import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { FetchError } from '../models/ErrorModel'
import { userloggedInResponse } from '../../features/Login/models/loginModels'

export const authMeApiSlice = createApi({
  reducerPath: 'authMe/api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:7542/2.0/',
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    me: builder.mutation<userloggedInResponse, {}>({
      query: (payload: {}) => ({
        url: 'auth/me',
        method: 'POST',
        body: payload
      })
    }),
    deleteMe: builder.mutation({
      query: (payload: {}) => ({
        url: 'auth/me',
        method: 'DELETE'
      })
    })
  })
})

export const { useMeMutation, useDeleteMeMutation } = authMeApiSlice
