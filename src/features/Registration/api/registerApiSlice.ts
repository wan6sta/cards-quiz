import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'
import {
  RegisterUserPayload,
  RegistrationResponseType
} from '../model/types/registrationModels'
import { BASE_URL } from '@/shared/assets/constants/BASE_URL'
import { FetchError } from '@/shared/types/ErrorModel'

export const registerApiSlice = createApi({
  reducerPath: 'register/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    registerUser: builder.mutation<
      RegistrationResponseType,
      RegisterUserPayload
    >({
      query: (payload: RegisterUserPayload) => ({
        url: 'auth/register',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const { useRegisterUserMutation } = registerApiSlice
