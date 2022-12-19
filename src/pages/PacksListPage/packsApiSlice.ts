import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { BASE_URL } from '../../shared/assets/constants/BASE_URL'
import { FetchError } from '../../shared/models/ErrorModel'

export const packsApiSlice = createApi({
  reducerPath: 'packs/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  endpoints: builder => ({
    getPacks: builder.query<any, any>({
      query: () => ({
        url: 'cards/pack',
        method: 'GET'
      })
    }),
    createCardPack: builder.mutation({
      query: (payload: {}) => ({
        url: 'cards/pack',
        method: 'POST',
        body: payload
      })
    }),
    deleteCardPack: builder.mutation({
      query: (id: string) => ({
        url: 'cards/pack',
        method: 'DELETE',
        params: {
          cardId: id
        }
      })
    }),
    updateCardsPack: builder.mutation({
      query: (id: string) => ({
        url: 'cards/pack',
        method: 'PUT',
        params: {
          id
        }
      })
    })
  })
})

export const {
  useLazyGetPacksQuery,
  useCreateCardPackMutation,
  useDeleteCardPackMutation,
  useUpdateCardsPackMutation
} = packsApiSlice
