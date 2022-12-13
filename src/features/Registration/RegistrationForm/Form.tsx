import React, { FC } from 'react'
import { StyledBoxCard } from '../../../shared/ui/BoxCard/StyledBoxCard'
import { Title } from '../../../shared/ui/Title/Title'
import { Button } from '../../../shared/ui/Button/Button'
import { Span } from '../../../shared/ui/Span/Span'
import { AppLink } from '../../../shared/ui/AppLink/AppLink'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { TextField } from '../../../shared/ui/TextField/TextField'

interface FormValues {
  email: string
  password: string
  confirmPassword: string
}

const schema = yup.object({
  email: yup.string().required('Email is required').email(),
  password: yup.string().required('Password is required').min(7).max(20),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords should match')
    .required('Passwords should match')
})

interface FormProps {
  registerUser: (data: FormValues) => void
}

export const Form: FC<FormProps> = ({ registerUser }) => {
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
    resolver: yupResolver(schema)
  })

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    registerUser(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledBoxCard>
        <Title>Sign Up</Title>
        <Controller
          control={control}
          name={'email'}
          render={({ field }) => (
            <TextField
              title={'email'}
              textFieldMode={'nonOutlined'}
              {...field}
            />
          )}
        />
        <p>{errors.email?.message}</p>
        <Controller
          control={control}
          name={'password'}
          render={({ field }) => (
            <TextField
              showPassword
              title={'password'}
              textFieldMode={'nonOutlined'}
              {...field}
            />
          )}
        />
        <p>{errors.password?.message}</p>
        <Controller
          control={control}
          name={'confirmPassword'}
          render={({ field }) => (
            <TextField
              showPassword
              title={'confirm password'}
              textFieldMode={'nonOutlined'}
              {...field}
            />
          )}
        />
        <p>{errors.confirmPassword?.message}</p>
        <Button>Sign Up</Button>
        <Span medium>Already have and account?</Span>
        <AppLink primary to={'login'}>
          Sign in
        </AppLink>
      </StyledBoxCard>
    </form>
  )
}
