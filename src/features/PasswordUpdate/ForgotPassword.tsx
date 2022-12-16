import { FC, useEffect, useState } from 'react'
import { StyledForgotPassword } from './StyledForgotPassword'
import { TextField } from '../../shared/ui/TextField/TextField'
import { Span } from '../../shared/ui/Span/Span'
import { Button } from '../../shared/ui/Button/Button'
import { AppLink } from '../../shared/ui/AppLink/AppLink'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { Flex } from '../../shared/ui/Flex/Flex'
import { useResetPassMutation } from './api/forgotPassApiSlice'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LinearPageLoader } from '../../shared/ui/LinearPageLoader/LinearPageLoader'
import { RestoreUserEmailKey } from '../../shared/assets/constants/RestoreUserEmail'
import { ErrorAlert } from '../../shared/ui/ErrorAlert/ErrorAlert'
import { errorMessageHandler } from '../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../shared/models/ErrorModel'

export const Schema = yup.object({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required')
})

export const ForgotPassword: FC = props => {
  const { ...restProps } = props
  const navigate = useNavigate()

  const [resetPassword, { isLoading, isSuccess, error }] =
    useResetPassMutation()

  const [email, setEmail] = useState('')

  useEffect(() => {
    if (isSuccess) {
      sessionStorage.setItem(RestoreUserEmailKey, email)
      navigate(AppPaths.checkEmailPage)
    }
  }, [isSuccess, email])

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<{ email: string }>({
    defaultValues: {
      email: ''
    },
    mode: 'all',
    resolver: yupResolver(Schema)
  })

  const url = import.meta.env.MODE === 'development'
          ? 'http://localhost:5174'
          : 'https://cards-quiz.vercel.app'

  const finalUrl = `${url}/#/set-new-password/$token$`

  const onSubmit: SubmitHandler<{ email: string }> = async formData => {
    if (errors.email?.message) return
    const data = {
      email: formData.email,
      from: 'wow team',
      message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href=${finalUrl}>
link</a>
</div>`
    }
    setEmail(prev => data.email)
    await resetPassword(data)
    reset()
  }

  const disableButton = !!errors.email?.message || isLoading

  const errorHandler = errorMessageHandler((error as FetchError)?.data?.error)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? <LinearPageLoader /> : null}
      <StyledForgotPassword {...restProps}>
        <Flex margin='0 0 25px 0'>
          <Controller
            name={'email'}
            control={control}
            render={({ field }) => (
              <TextField
                error={errors.email?.message}
                title='Email'
                textFieldMode='nonOutlined'
                {...field}
              />
            )}
          ></Controller>
        </Flex>
        <Flex margin='0 0 65px 0'>
          <Span>
            Enter your email address and we will send you further instructions{' '}
          </Span>
        </Flex>
        <Flex margin='0 0 39px 0'>
          <Button disabled={disableButton} primary>
            Send Instructions
          </Button>
        </Flex>
        <Flex margin='0 0 11px 0' justifyContent='center'>
          <Span bold>Did you remember your password?</Span>
        </Flex>
        <AppLink justifyContent='center' primary to={AppPaths.loginPage}>
          Try logging in
        </AppLink>
      </StyledForgotPassword>
      <ErrorAlert errorMessage={errorHandler} />
    </form>
  )
}
