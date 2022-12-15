import { BoxCard } from '../../shared/ui/BoxCard/BoxCard'
import { Title } from '../../shared/ui/Title/Title'
import { Button } from '../../shared/ui/Button/Button'
import { AppLink } from '../../shared/ui/AppLink/AppLink'
import { Span } from '../../shared/ui/Span/Span'
import * as yup from 'yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import {
  StyledCheckboxLabel,
  StyledFormCheckbox,
  StyledFormGroup
} from './StyledLogin'
import { TextField } from '../../shared/ui/TextField/TextField'
import { LoginForm } from './models/loginModels'
import { FetchError } from '../../shared/models/ErrorModel'
import { useMeMutation } from '../../shared/api/authMeApiSlice'
import { useLoginMutation } from './api/loginApiSlice'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { LinearPageLoader } from '../../shared/ui/LinearPageLoader/LinearPageLoader'
import 'react-toastify/dist/ReactToastify.css'

export const Schema = yup.object({
  email: yup
    .string()
    .email('Email must be a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(7, 'Password must be at least 7 characters')
    .required('Password is required')
})

export const Login = () => {
  const [me, { isLoading: isMeLoading, isSuccess: meSuccess }] = useMeMutation()

  // Загрузки
  const [
    login,
    { error: loginError, isSuccess: loginSuccess, isLoading: isLoginLoading }
  ] = useLoginMutation()

  const navigate = useNavigate()

  useEffect(function fetchIsLogin () {
    me({})
  }, [])

  useEffect(() => {
    if (meSuccess) {
      navigate(AppPaths.profilePage)
    }
    if (loginSuccess) {
      navigate(AppPaths.profilePage)
    }
  }, [meSuccess, loginSuccess])

  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors, isValid }
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    mode: 'onBlur',
    resolver: yupResolver(Schema)
  })

  const onSubmit: SubmitHandler<LoginForm> = async data => {
    await login(data)
    reset()
  }

  const disableButton =
    !!errors.email?.message ||
    !!errors.password?.message ||
    !!errors.rememberMe?.message ||
    isMeLoading ||
    isLoginLoading

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isMeLoading ? <LinearPageLoader /> : null}
      {isLoginLoading ? <LinearPageLoader /> : null}
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
    </form>
  )
}
