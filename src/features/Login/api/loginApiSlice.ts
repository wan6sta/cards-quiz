import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { LoginPayload, UserLoggedInResponse } from '../model/types/loginModels'
import { BASE_URL } from '@/shared/assets/constants/BASE_URL'
import { setUserData } from '@/app/api/authSlice'
import { FetchError } from '@/shared/types/ErrorModel'

export const loginApiSlice = createApi({
  reducerPath: 'login/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    login: builder.mutation<UserLoggedInResponse, LoginPayload>({
      query: (payload: LoginPayload) => ({
        url: 'auth/login',
        method: 'POST',
        body: payload
      }),
      async onQueryStarted(payload, { dispatch, queryFulfilled }) {
        const res = await queryFulfilled
        dispatch(setUserData(res.data))
      }
    })
  })
})

export const { useLoginMutation } = loginApiSlice
