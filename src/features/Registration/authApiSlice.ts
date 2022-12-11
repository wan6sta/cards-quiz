import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApiSlice = createApi({
  reducerPath: 'auth/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7542/2.0/',
    credentials: 'include'
  }),
  endpoints: builder => ({
    getPing: builder.query<any, any>({
      query: () => ({
        url: 'ping',
        method: 'GET'
      })
    }),
    sendPing: builder.mutation<any, any>({
      query: (payload: { frontTime: number }) => ({
        url: 'ping',
        method: 'POST',
        body: payload
      })
    }),
    registerUser: builder.mutation<any, any>({
      query: (payload: RegisterUserPayload) => ({
        url: 'auth/register',
        method: 'POST',
        body: payload
      })
    }),
    login: builder.mutation<any, any>({
      query: (payload: LoginPayload) => ({
        url: 'auth/login',
        method: 'POST',
        body: payload
      })
    })
  })
})

export const {
  useSendPingMutation,
  useGetPingQuery,
  useLoginMutation,
  useRegisterUserMutation
} = authApiSlice

interface RegisterUserPayload {
  email: string
  password: string
}

interface LoginPayload {
  email: string
  password: string
}
