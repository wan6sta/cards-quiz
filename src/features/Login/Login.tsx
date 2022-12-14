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
  StyledError,
  StyledFormCheckbox,
  StyledFormGroup
} from './StyledLogin'
import { TextField } from '../../shared/ui/TextField/TextField'
import { LoginForm } from './models/loginModels'
import { FetchError } from '../../shared/models/ErrorModel'
import { useMeMutation } from '../../shared/api/authMeApiSlice'
import { useLoginMutation } from './api/loginApiSlice'
import { useDispatch } from 'react-redux'
import { setIsLogin } from '../../app/providers/StoreProvider/authSlice/authSlice'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const Schema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(7).required('Password is required')
})

export const Login = () => {
  const [me, { isLoading, isSuccess: meSuccess }] = useMeMutation()

  // Загрузки
  const [
    login,
    { error: loginError, isSuccess: loginSuccess, isLoading: isLoginLoading }
  ] = useLoginMutation()

  const dispatch = useDispatch()

  useEffect(function fetchIsLogin () {
    me({})
  }, [])

  const navigate = useNavigate()

  if (loginSuccess) {
    navigate(AppPaths.profilePage)
  }

  const {
    handleSubmit,
    reset,
    control,
    register,
    formState: { errors }
  } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    mode: 'onBlur',
    resolver: yupResolver(Schema)
  })

  // Пустая страница с загрузкой
  if (isLoading) {
    return <div>loading...</div>
  }

  if (meSuccess) {
    navigate(AppPaths.profilePage)
  }

  const notify = () => {
    console.log(123)
    toast('Wow so easy !')
  }

  // Всплывашку добавить на саксес / на еррор
  const onSubmit: SubmitHandler<LoginForm> = async data => {
    await login(data)
    loginSuccess && navigate('/profile')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <button onClick={notify}>Notify !</button>
        <ToastContainer />
      </div>

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
        {loginError && (
          <StyledError>
            {(loginError as FetchError)?.data?.error ===
            'user not found /ᐠ-ꞈ-ᐟ\\'
              ? 'User not found'
              : 'Incorrect email or password'}
          </StyledError>
        )}
        <StyledFormGroup>
          <StyledCheckboxLabel>
            <StyledFormCheckbox {...register('rememberMe')} type={'checkbox'} />
            <Span bold>Remember me</Span>
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
        <Button>Sign in</Button>
        <Span medium>Already have an account?</Span>
        <AppLink primary to={AppPaths.registrationPage}>
          Sign Up
        </AppLink>
      </BoxCard>
    </form>
  )
}
