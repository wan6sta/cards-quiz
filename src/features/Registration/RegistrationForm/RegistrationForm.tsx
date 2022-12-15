import { FC } from 'react'
import { Title } from '../../../shared/ui/Title/Title'
import { Button } from '../../../shared/ui/Button/Button'
import { Span } from '../../../shared/ui/Span/Span'
import { AppLink } from '../../../shared/ui/AppLink/AppLink'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextField } from '../../../shared/ui/TextField/TextField'
import * as yup from 'yup'
import { FormProps, FormValues } from '../models/registrationModels'
import { AppPaths } from '../../../app/providers/AppRouter/routerConfig'
import { BoxCard } from '../../../shared/ui/BoxCard/BoxCard'

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
    formState: { errors, isValid }
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BoxCard rowGap={'11px'}>
        <Title marginBottom={'17px'}>Sign Up</Title>
        <Controller
          control={control}
          name={'email'}
          render={({ field }) => (
            <TextField
              title={'Email'}
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
              title={'Password'}
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
              title={'Confirm password'}
              textFieldMode={'nonOutlined'}
              {...field}
            />
          )}
        />
        <Button disabled={!isValid} margin={'57px 0 20px 0'}>
          Sign Up
        </Button>
        <Span medium>Already have and account?</Span>
        <AppLink primary to={AppPaths.loginPage}>
          Sign in
        </AppLink>
      </BoxCard>
    </form>
  )
}
