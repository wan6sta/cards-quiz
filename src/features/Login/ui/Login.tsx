import * as yup from 'yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  StyledCheckboxLabel,
  StyledFormCheckbox,
  StyledFormGroup
} from './StyledLogin'
import { LoginForm } from '../model/types/loginModels'
import { useLoginMutation } from '../api/loginApiSlice'
import 'react-toastify/dist/ReactToastify.css'
import { errorMessageHandler } from '@/shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '@/shared/types/ErrorModel'
import { LinearPageLoader } from '@/widgets/LinearPageLoader'
import { BoxCard } from '@/shared/ui/BoxCard/BoxCard'
import { Title } from '@/shared/ui/Title/Title'
import { TextField } from '@/shared/ui/TextField/TextField'
import { Span } from '@/shared/ui/Span/Span'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { AppPaths } from '@/app/providers/AppRouter'
import { Button } from '@/shared/ui/Button/Button'
import { ErrorAlert } from '@/shared/ui/ErrorAlert/ErrorAlert'

export const Schema = yup.object({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
})

export const Login = () => {
  const [login, { error: loginError, isLoading: isLoginLoading }] =
    useLoginMutation()

  const {
    handleSubmit,
    control,
    register,
    formState: { errors }
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    mode: 'all',
    resolver: yupResolver(Schema)
  })

  const onSubmit: SubmitHandler<LoginForm> = async data => {
    await login(data)
  }

  const errorHandler = errorMessageHandler(
    (loginError as FetchError)?.data?.error
  )

  const disableButton =
    !!errors.email?.message ||
    !!errors.password?.message ||
    !!errors.rememberMe?.message ||
    isLoginLoading

  const isBundleLoading = isLoginLoading

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isBundleLoading ? <LinearPageLoader /> : null}
      <BoxCard>
        <Title marginBottom={'17px'}>Sign in</Title>
        <Controller
          name={'email'}
          control={control}
          render={({ field }) => (
            <TextField
              title={'Email'}
              error={errors?.email?.message}
              textFieldMode={'nonOutlined'}
              {...field}
            />
          )}
        />
        <Controller
          name={'password'}
          control={control}
          render={({ field }) => (
            <TextField
              error={errors?.password?.message}
              title={'Password'}
              showPassword
              textFieldMode={'nonOutlined'}
              {...field}
            />
          )}
        />
        <StyledFormGroup>
          <StyledCheckboxLabel>
            <StyledFormCheckbox {...register('rememberMe')} type={'checkbox'} />
            <Span nonSelect bold>
              Remember me
            </Span>
          </StyledCheckboxLabel>
        </StyledFormGroup>
        <StyledFormGroup margin={'0 0 45px 0'}>
          <AppLink
            to={AppPaths.forgotPasswordPage}
            secondary
            justifyContent={'flex-end'}
          >
            Forgot Password?
          </AppLink>
        </StyledFormGroup>
        <Button disabled={disableButton}>Sign in</Button>
        <Span medium>Already have an account?</Span>
        <AppLink primary to={AppPaths.registrationPage}>
          Sign Up
        </AppLink>
      </BoxCard>
      <ErrorAlert errorMessage={errorHandler} />
    </form>
  )
}
