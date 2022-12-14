import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import { FetchError, RegistrationResponseType } from './registrationModels'

export const registerApiSlice = createApi({
  reducerPath: 'register/api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:7542/2.0/',
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    registerUser: builder.mutation<RegistrationResponseType, RegisterUserPayload>({
      query: (payload: RegisterUserPayload) => ({
        url: 'auth/register',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const { useRegisterUserMutation } = registerApiSlice

interface RegisterUserPayload {
  email: string
  password: string
}
