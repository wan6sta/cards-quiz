import { ChangeEvent, FC, useEffect, useState } from 'react'
import { StyledForgotPassword } from './StyledForgotPassword'
import { TextField } from '../../shared/ui/TextField/TextField'
import { Span } from '../../shared/ui/Span/Span'
import { Button } from '../../shared/ui/Button/Button'
import { AppLink } from '../../shared/ui/AppLink/AppLink'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { Flex } from '../../shared/ui/Flex/Flex'
import { useResetPassMutation } from './api/forgotPassApiSlice'
import { useNavigate } from 'react-router-dom'

export const ForgotPassword: FC = props => {
  const { ...restProps } = props
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const [resetPassword, { isLoading, isSuccess }] = useResetPassMutation()

  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const onBlurHandler = () => {
    setError('')
    if (!inputValue) {
      setError('Email is required')
    }
  }

  const resetPasswordHandler = () => {
    if (error) return
    if (!inputValue) return

    const data = {
      email: inputValue, // кому восстанавливать пароль
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

  if (isSuccess) {
    navigate(AppPaths.checkEmailPage)
  }

  return (
    <StyledForgotPassword {...restProps}>
      <Flex margin='0 0 25px 0'>
        <TextField
          onBlur={onBlurHandler}
          error={error}
          onChange={inputValueHandler}
          value={inputValue}
          title='Email'
          textFieldMode='nonOutlined'
        />
      </Flex>
      <Flex margin='0 0 65px 0'>
        <Span>
          Enter your email address and we will send you further instructions{' '}
        </Span>
      </Flex>
      <Flex margin='0 0 39px 0'>
        <Button onClick={resetPasswordHandler} disabled={!!error} primary>
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
  )
}
