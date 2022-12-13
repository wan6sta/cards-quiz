import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const loginApiSlice = createApi({
  reducerPath: 'login/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://neko-back.herokuapp.com/2.0/',
    credentials: 'include'
  }),
  endpoints: builder => ({
    login: builder.mutation<any, any>({
      query: (payload: LoginPayload) => ({
        url: 'auth/login',
        method: 'POST',
        body: payload
      })
    }),
    me: builder.mutation<any, any>({
      query: (payload: any) => ({
        url: 'auth/me',
        method: 'POST',
        body: payload
      })
    })
  })
})

interface LoginPayload {
  email: string
  password: string
}

export const { useLoginMutation, useMeMutation } = loginApiSlice
