import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { FetchError } from '../../../shared/models/ErrorModel'
import { BASE_URL } from '../../../shared/assets/constants/BASE_URL'

export const profileSlice = createApi({
  reducerPath: 'profile/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
