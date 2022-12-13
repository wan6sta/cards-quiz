import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const registerApiSlice = createApi({
  reducerPath: 'register/api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:7542/2.0/',
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
    })
  })
})

export const { useSendPingMutation, useGetPingQuery, useRegisterUserMutation } =
  registerApiSlice

interface RegisterUserPayload {
  email: string
  password: string
}
