import React, { forwardRef } from 'react'
import { useRegisterUserMutation } from './registerApiSlice'
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../../shared/ui/Button/Button'
import { StyledBoxCard } from '../../shared/ui/BoxCard/StyledBoxCard'

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

const TextField = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input ref={ref} {...props} />
))

interface FormValues {
  email: string
  password: string
}

const schema = yup.object({
  email: yup.string().required('Email is required').email(),
  password: yup.string().required('Password is required').min(3).max(20)
})

export const Registration = () => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<FormValues>({
    resolver: yupResolver(schema)
  })

  const [
    registerNow,
    {
      isError: registrationError,
      isLoading: registrationLoading,
      data: registerUserResponse
    }
  ] = useRegisterUserMutation()

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) =>
    registerNow(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledBoxCard>
          <TextField
            {...register('email', { required: true, maxLength: 20 })}
            type='text'
            placeholder={'enter your email'}
          />
          <p>{errors.email?.message}</p>
          <TextField
            {...register('password', {
              required: true,
              minLength: 3
            })}
            type='password'
            placeholder={'enter your password'}
          />
          <p>{errors.password?.message}</p>
          <TextField
            {...register('password', { required: true, minLength: 3 })}
            type='password'
            placeholder={'enter your password'}
          />
          <p>{errors.password?.message}</p>
          <Button>Sign Up</Button>
        </StyledBoxCard>
      </form>
      {registrationLoading && <p>Loading...</p>}
      {registrationError && <p>Something went wrong...</p>}
      <div>{JSON.stringify(registerUserResponse)}</div>
    </>
  )
}
