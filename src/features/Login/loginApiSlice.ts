import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export const loginApiSlice = createApi({
  reducerPath: 'login/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7542/2.0/',
    credentials: 'include'
  }),
  endpoints: build => ({
    login: build.mutation<any, any>({
      query: (payload: LoginPayload) => ({
        url: 'auth/login',
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

export const { useLoginMutation } = loginApiSlice
