import { ErrorResponse } from '../../../shared/models/ErrorModel'
import { RegistredUserModel } from '../../../shared/models/RegistredUserModel'

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
