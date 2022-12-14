import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { FetchError } from '../../../shared/models/ErrorModel'

export const forgotApiSlice = createApi({
  reducerPath: 'forgot/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://neko-back.herokuapp.com/2.0',
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    resetPass: builder.mutation({
      query: (payload: {}) => ({
        url: 'auth/forgot',
        method: 'POST',
        body: payload
      })
    }),
    newPass: builder.mutation({
      query: (payload: {}) => ({
        url: 'auth/set-new-password',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const { useResetPassMutation, useNewPassMutation } = forgotApiSlice
