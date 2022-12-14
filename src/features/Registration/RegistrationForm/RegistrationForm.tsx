import { FC } from 'react'
import { StyledBoxCard } from '../../../shared/ui/BoxCard/StyledBoxCard'
import { Title } from '../../../shared/ui/Title/Title'
import { Button } from '../../../shared/ui/Button/Button'
import { Span } from '../../../shared/ui/Span/Span'
import { AppLink } from '../../../shared/ui/AppLink/AppLink'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '../../../shared/ui/TextField/TextField'
import * as yup from 'yup'
import { FormProps, FormValues } from '../models/registrationModels'

const Schema = yup.object({
  email: yup.string().required('Email is required').email(),
  password: yup.string().required('Password is required').min(7).max(20),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords should match')
    .required('Passwords should match')
})

export const RegistrationForm: FC<FormProps> = props => {
  const { registerUser } = props

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onBlur',
    resolver: yupResolver(Schema)
  })

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    registerUser(data)
  }
  // Box Card
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledBoxCard>
        <Title marginBottom={'41px'}>Sign Up</Title>
        <Controller
          control={control}
          name={'email'}
          render={({ field }) => (
            <TextField
              title={'email'}
              error={errors.email?.message}
              textFieldMode={'nonOutlined'}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={'password'}
          render={({ field }) => (
            <TextField
              error={errors.password?.message}
              showPassword
              title={'password'}
              textFieldMode={'nonOutlined'}
              {...field}
            />
          )}
        />
        <Controller
          control={control}
          name={'confirmPassword'}
          render={({ field }) => (
            <TextField
              showPassword
              error={errors.confirmPassword?.message}
              title={'confirm password'}
              textFieldMode={'nonOutlined'}
              {...field}
            />
          )}
        />
        <Button>Sign Up</Button>
        <Span medium>Already have and account?</Span>
        <AppLink primary to={'/login'}>
          Sign in
        </AppLink>
      </StyledBoxCard>
    </form>
  )
}
