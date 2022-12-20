import { identity, pickBy } from 'lodash-es'
import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { BASE_URL } from '../../../shared/assets/constants/BASE_URL'
import { FetchError } from '../../../shared/models/ErrorModel'
import { CreatePack } from '../../../features/PacksList/models/packModel'

export const cardApiSlice = createApi({
  reducerPath: 'card/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  tagTypes: ['Card'],
  endpoints: builder => ({
    getCard: builder.query<any, any>({
      query: args => ({
        url: `cards/card`,
        params: pickBy({
          ...args
        })
      }),
      providesTags: result => ['Card']
    }),
    createCard: builder.mutation<any, any>({
      query: (payload: any) => ({
        url: 'cards/card',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['Card']
    }),
    deleteCard: builder.mutation<any, string>({
      query: cardId => ({
        url: `cards/card/${cardId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Card']
    }),
    updateCard: builder.mutation<any, any>({
      query: payload => ({
        url: `cards/card/${payload._id}`,
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['Card']
    })
  })
})

export const {
  useGetCardQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation
} = cardApiSlice
