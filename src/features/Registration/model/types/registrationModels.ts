import { RegistredUserModel } from '@/shared/types/RegistredUserModel'
import { ErrorResponse } from '@/shared/types/ErrorModel'

export interface RegistrationResponseType {
  addedUser: RegistredUserModel | ErrorResponse
}

export interface FormValues {
  email: string
  password: string
  confirmPassword: string
}

export interface FormProps {
  registerUser: (data: FormValues) => void
}

export interface RegisterUserPayload {
  email: string
  password: string
}
