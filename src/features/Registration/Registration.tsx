import { useRegisterUserMutation } from './api/registerApiSlice'
import { useNavigate } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FormValues } from './models/registrationModels'
import { yupResolver } from '@hookform/resolvers/yup'
import { BoxCard } from '../../shared/ui/BoxCard/BoxCard'
import { Title } from '../../shared/ui/Title/Title'
import { TextField } from '../../shared/ui/TextField/TextField'
import { Button } from '../../shared/ui/Button/Button'
import { Span } from '../../shared/ui/Span/Span'
import { AppLink } from '../../shared/ui/AppLink/AppLink'
import * as yup from 'yup'
import { LinearPageLoader } from '../../shared/ui/LinearPageLoader/LinearPageLoader'
import { errorMessageHandler } from '../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../shared/models/ErrorModel'
import { ErrorAlert } from '../../shared/ui/ErrorAlert/ErrorAlert'

const Schema = yup.object({
  email: yup.string().required('Email is required').email(),
  password: yup.string().required('Password is required').min(8).max(20),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords should match')
    .required('Passwords should match')
})

export const Registration = () => {
  const navigate = useNavigate()

  const [
    registerUser,
    {
      isSuccess,
      isError: registrationError,
      isLoading: registrationLoading,
      error
    }
  ] = useRegisterUserMutation()

  useEffect(() => {
    if (isSuccess) navigate(AppPaths.registrationSuccessPage)
  }, [isSuccess])

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'all',
    resolver: yupResolver(Schema)
  })

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    await registerUser(data)
    reset()
  }

  const disableButton =
    !!errors.email?.message ||
    !!errors.password?.message ||
    !!errors.confirmPassword?.message ||
    registrationLoading

  const properErrorMessage = errorMessageHandler(
    (error as FetchError)?.data?.error
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {registrationLoading ? <LinearPageLoader /> : null}
      <BoxCard>
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
        <Button disabled={disableButton} margin={'70px 0 10px 0'}>
          Sign Up
        </Button>
        <Span medium>Already have and account?</Span>
        <AppLink primary to={AppPaths.loginPage}>
          Sign in
        </AppLink>
      </BoxCard>
      <ErrorAlert errorMessage={properErrorMessage} />
    </form>
  )
}
