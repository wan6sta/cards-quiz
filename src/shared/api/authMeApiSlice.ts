import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { FetchError } from '../models/ErrorModel'
import { UserLoggedInResponse } from '../../features/Login/models/loginModels'

export const authMeApiSlice = createApi({
  reducerPath: 'authMe/api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      import.meta.env.MODE === 'development'
        ? import.meta.env.VITE_API_BASE_URL
        : import.meta.env.VITE_API_PROD_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    me: builder.mutation<UserLoggedInResponse, {}>({
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
