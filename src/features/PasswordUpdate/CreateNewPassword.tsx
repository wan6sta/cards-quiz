import { FC, useEffect } from 'react'
import { StyledCreateNewPassword } from './StyledForgotPassword'
import { TextField } from '../../shared/ui/TextField/TextField'
import { Span } from '../../shared/ui/Span/Span'
import { Button } from '../../shared/ui/Button/Button'
import { Flex } from '../../shared/ui/Flex/Flex'
import { useNewPassMutation } from './api/forgotPassApiSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { LinearPageLoader } from '../../shared/ui/LinearPageLoader/LinearPageLoader'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { ErrorAlert } from '../../shared/ui/ErrorAlert/ErrorAlert'
import { errorMessageHandler } from '../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../shared/models/ErrorModel'

export const Schema = yup.object({
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
})

export const CreateNewPassword: FC = props => {
  const { ...restProps } = props

  const [createNewPass, { isLoading, isSuccess, error }] = useNewPassMutation()
  const { token } = useParams()
  const navigate = useNavigate()

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<{ password: string }>({
    defaultValues: {
      password: ''
    },
    mode: 'all',
    resolver: yupResolver(Schema)
  })

  const onSubmit: SubmitHandler<{ password: string }> = async formData => {
    if (errors.password?.message) return
    if (!token) return

    const data = {
      password: formData.password,
      resetPasswordToken: token
    }

    createNewPass(data)
    reset()
  }

  useEffect(() => {
    if (isSuccess) {
      navigate(AppPaths.loginPage)
    }
  }, [isSuccess])

  const disableButton = !!errors.password?.message || isLoading

  const errorHandler = errorMessageHandler((error as FetchError)?.data?.error)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledCreateNewPassword {...restProps}>
        {isLoading ? <LinearPageLoader /> : null}
        <Flex margin='0 0 18px 0'>
          <Controller
            name={'password'}
            control={control}
            render={({ field }) => (
              <TextField
                error={errors.password?.message}
                title='Password'
                textFieldMode='nonOutlined'
                showPassword
                {...field}
              />
            )}
          ></Controller>
        </Flex>
        <Flex margin='0 0 42px 0'>
          <Span>
            Create new password and we will send you further instructions to
            email
          </Span>
        </Flex>
        <Button disabled={disableButton}>Create new password</Button>
      </StyledCreateNewPassword>
      <ErrorAlert errorMessage={errorHandler} />
    </form>
  )
}
