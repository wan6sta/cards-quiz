import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { FetchError } from '../../../shared/models/ErrorModel'

export const profileSlice = createApi({
  reducerPath: 'profile/api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.MODE === 'development'
        ? import.meta.env.VITE_API_BASE_URL
        : import.meta.env.VITE_API_PROD_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    editName: builder.mutation({
      query: (payload: {}) => ({
        url: 'auth/me',
        method: 'PUT',
        body: payload
      })
    })
  })
})

export const { useEditNameMutation } = profileSlice
