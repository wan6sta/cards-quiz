import { ChangeEvent, FC, useState } from 'react'
import { StyledCreateNewPassword } from './StyledForgotPassword'
import { TextField } from '../../shared/ui/TextField/TextField'
import { Span } from '../../shared/ui/Span/Span'
import { Button } from '../../shared/ui/Button/Button'
import { Flex } from '../../shared/ui/Flex/Flex'
import { useNewPassMutation } from './api/forgotPassApiSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'

export const CreateNewPassword: FC = props => {
  const { ...restProps } = props

  const [createNewPass, { isLoading, isSuccess }] = useNewPassMutation()
  const { token } = useParams()

  const navigate = useNavigate()
  const [passwordValue, setPasswordValue] = useState('')

  const createNewPasswordHandler = () => {
    if (!passwordValue) return
    if (!token) return

    const data = {
      password: passwordValue,
      resetPasswordToken: token
    }

    createNewPass(data)
  }

  const onChangeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.currentTarget.value)
  }

  if (isSuccess) {
    navigate(AppPaths.loginPage)
  }

  return (
    <StyledCreateNewPassword {...restProps}>
      <Flex margin='0 0 18px 0'>
        <TextField
          value={passwordValue}
          onChange={onChangeValueHandler}
          title='Password'
          textFieldMode='nonOutlined'
          showPassword
        />
      </Flex>
      <Flex margin='0 0 42px 0'>
        <Span>
          Create new password and we will send you further instructions to email
        </Span>
      </Flex>
      <Button onClick={createNewPasswordHandler}>Create new password</Button>
    </StyledCreateNewPassword>
  )
}
