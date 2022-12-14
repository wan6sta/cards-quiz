export interface AddedUser {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: Date
  updated: Date
  __v: number
  password?: string
}

export interface RegistrationResponseType {
  addedUser: AddedUser | ErrorResponse
}

export interface ErrorResponse {
  error: string
  email: string
  in: string
}

export interface FetchError {
  status: number
  data: ErrorResponse
}
