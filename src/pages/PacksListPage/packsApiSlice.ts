import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { BASE_URL } from '../../shared/assets/constants/BASE_URL'
import { FetchError } from '../../shared/models/ErrorModel'
import { CardPack, CreatePack, ServerResponse } from './packModel'

export const packsApiSlice = createApi({
  reducerPath: 'packs/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  tagTypes: ['Cards'],
  endpoints: builder => ({
    getPacks: builder.query<CardPack[], any>({
      query: () => ({
        url: 'cards/pack'
      }),
      transformResponse: (response: ServerResponse) => response.cardPacks,
      providesTags: result => ['Cards']
    }),
    createCardPack: builder.mutation<CreatePack, CreatePack>({
      query: (payload: CreatePack) => ({
        url: 'cards/pack',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['Cards']
    }),
    deleteCardPack: builder.mutation({
      query: (id: string) => ({
        url: `cards/pack/${id}`,
        method: 'DELETE',
        params: {
          cardId: id
        }
      }),
      invalidatesTags: ['Cards']
    }),
    updateCardsPack: builder.mutation<CreatePack, any>({
      query: (id: string) => ({
        url: `cards/pack/${id}`,
        method: 'PUT',
        params: {
          id
        }
      }),
      invalidatesTags: ['Cards']
    })
  })
})

export const {
  useGetPacksQuery,
  useCreateCardPackMutation,
  useDeleteCardPackMutation,
  useUpdateCardsPackMutation
} = packsApiSlice
