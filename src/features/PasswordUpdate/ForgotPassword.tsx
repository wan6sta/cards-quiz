import { FC, useEffect } from 'react'
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

export const Schema = yup.object({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required')
})

export const ForgotPassword: FC = props => {
  const { ...restProps } = props
  const navigate = useNavigate()

  const [resetPassword, { isLoading, isSuccess }] = useResetPassMutation()

  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors, isValid }
  } = useForm<{ email: string }>({
    defaultValues: {
      email: ''
    },
    mode: 'onBlur',
    resolver: yupResolver(Schema)
  })

  const onSubmit: SubmitHandler<{ email: string }> = async formData => {
    if (errors.email?.message) return
    const data = {
      email: formData.email, // кому восстанавливать пароль
      from: 'wow team',
      // можно указать разработчика фронта)
      message: `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:5173/setNewPassword/$token$'>
link</a>
</div>` // хтмп-письмо, вместо $token$ бэк вставит токен
    }
    resetPassword(data)
  }

  useEffect(() => {
    if (isSuccess) {
      navigate(AppPaths.checkEmailPage)
    }
  }, [isSuccess])

  const disableButton = !!errors.email?.message || isLoading

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
    </form>
  )
}
