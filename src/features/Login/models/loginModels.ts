import { RegistredUserModel } from '../../../shared/models/RegistredUserModel'

export interface userloggedInResponse extends RegistredUserModel {
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
