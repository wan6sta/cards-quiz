import { BoxCard } from '../../shared/ui/BoxCard/BoxCard'
import { Title } from '../../shared/ui/Title/Title'
import { Button } from '../../shared/ui/Button/Button'
import { Checkbox } from '../../shared/ui/Checkbox/Checkbox'
import { AppLink } from '../../shared/ui/AppLink/AppLink'
import { Span } from '../../shared/ui/Span/Span'
import * as yup from 'yup'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { StyledError, StyledFormCheckbox, StyledFormGroup } from './StyledLogin'
import { TextField } from '../../shared/ui/TextField/TextField'
import { useLoginMutation, useMeMutation } from './loginApiSlice'
import { Flex } from '../../shared/ui/Flex/Flex'

interface LoginForm {
  email: string
  password: string
  rememberMe: boolean
}

export const Schema = yup.object({
  email: yup
    .string()
    .email('Введите корректый Email адресс')
    .required('Поле обязательно к заполнению.'),
  password: yup
    .string()
    .min(7, 'Пароль должен быть больше 7 символов.')
    .required('Поле обязательно к заполнению.')
})
export const Login = () => {
  const [me, { data: meData, isLoading, isSuccess: meSuccess }] =
    useMeMutation()

  const [
    login,
    { data: loginData, error: loginError, isSuccess: loginSuccess }
  ] = useLoginMutation()

  useEffect(() => {
    me({})
  }, [])

  const navigate = useNavigate()

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

  if (isLoading) {
    return <div>loading...</div>
  }

  if (loginSuccess) {
    navigate('storybook')
  }

  if (meSuccess) {
    navigate('*')
  }
  const onSubmit: SubmitHandler<LoginForm> = data => {
    login(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BoxCard width={'413px'}>
        <Title>Sign in</Title>
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
        {errors?.email && <StyledError>{errors?.email.message}</StyledError>}
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
        {errors?.password && (
          <StyledError>{errors?.password?.message}</StyledError>
        )}
        {loginError && (
          <StyledError>
            {loginError?.data.error === 'user not found /ᐠ-ꞈ-ᐟ\\'
              ? 'Пользователь не найден.'
              : 'Некорректный e-mail адрес или пароль.'}
          </StyledError>
        )}
        <StyledFormGroup>
          <Flex justifyContent={'start'} alignItems={'center'}>
            <StyledFormCheckbox {...register('rememberMe')} type={'checkbox'} />
            <Span bold>Remember me</Span>
          </Flex>
          {/* <Controller
            name={'rememberMe'}
            control={control}
            render={({ field }) => <Checkbox Label={'rrrrr'} {...field} />}
          /> */}
        </StyledFormGroup>
        <StyledFormGroup margin={'0 0 45px 0'}>
          <AppLink to={'#'} secondary justifyContent={'flex-end'}>
            Forgot Password?
          </AppLink>
        </StyledFormGroup>
        <Button>Sign in</Button>
        <Span medium>Already have an account?</Span>
        <AppLink primary to={'#'}>
          Sign Up
        </AppLink>
      </BoxCard>
    </form>
  )
}
