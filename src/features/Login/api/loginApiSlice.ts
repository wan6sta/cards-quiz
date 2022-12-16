import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { LoginPayload, userloggedInResponse } from '../models/loginModels'
import { FetchError } from '../../../shared/models/ErrorModel'

export const loginApiSlice = createApi({
  reducerPath: 'login/api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.MODE === 'development'
        ? import.meta.env.VITE_API_BASE_URL
        : import.meta.env.VITE_API_PROD_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    login: builder.mutation<userloggedInResponse, LoginPayload>({
      query: (payload: LoginPayload) => ({
        url: 'auth/login',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const { useLoginMutation } = loginApiSlice
