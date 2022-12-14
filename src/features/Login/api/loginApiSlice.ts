import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { userloggedInResponse } from '../models/loginModels'
import { FetchError } from '../../../shared/models/ErrorModel'

export const loginApiSlice = createApi({
  reducerPath: 'login/api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:7542/2.0/',
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    login: builder.mutation<userloggedInResponse, LoginPayload>({
      query: (payload: LoginPayload) => ({
        url: 'auth/login',
        method: 'POST',
        body: payload
      })
    }),
    me: builder.mutation<userloggedInResponse, {}>({
      query: (payload: {}) => ({
        url: 'auth/me',
        method: 'POST',
        body: payload
      })
    })
  })
})

interface LoginPayload {
  email: string
  password: string
  rememberMe: boolean
}

export const { useLoginMutation, useMeMutation } = loginApiSlice
