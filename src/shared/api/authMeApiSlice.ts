import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { FetchError } from '../models/ErrorModel'
import { UserLoggedInResponse } from '../../features/Login/models/loginModels'
import { BASE_URL } from '../assets/constants/BASE_URL'
import {
  removeUserData,
  setUserData
} from '../../app/providers/StoreProvider/authSlice/authSlice'

export const authMeApiSlice = createApi({
  reducerPath: 'authMe/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    me: builder.mutation<UserLoggedInResponse, {}>({
      query: (payload: {}) => ({
        url: 'auth/me',
        method: 'POST',
        body: payload
      }),
      async onQueryStarted(payload, { dispatch, queryFulfilled }) {
        try {
          const res = await queryFulfilled
          dispatch(setUserData(res.data))
        } catch (e) {}
      }
    }),
    deleteMe: builder.mutation({
      query: (payload: {}) => ({
        url: 'auth/me',
        method: 'DELETE'
      }),
      async onQueryStarted(payload, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(removeUserData())
        } catch (e) {}
      }
    })
  })
})

export const { useMeMutation, useDeleteMeMutation } = authMeApiSlice
