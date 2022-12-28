import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { BASE_URL } from '@/shared/assets/constants/BASE_URL'
import { FetchError } from '@/shared/types/ErrorModel'

export const learnApiSlice = createApi({
  reducerPath: 'login/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    grade: builder.mutation<any, any>({
      query: payload => ({
        url: 'cards/grade',
        method: 'PUT',
        body: payload
      })
    })
  })
})

export const { useGradeMutation } = learnApiSlice
