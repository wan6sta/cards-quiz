import { RegistredUserModel } from '@/shared/types/RegistredUserModel'

export interface UserLoggedInResponse extends RegistredUserModel {
  token: string
  tokenDeathTime: number
  avatar: string
}

export interface LoginForm {
  email: string
  password: string
  rememberMe: boolean
}

export interface LoginPayload {
  email: string
  password: string
  rememberMe: boolean
}
