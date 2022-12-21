import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { BASE_URL } from '../../../shared/assets/constants/BASE_URL'
import { FetchError } from '../../../shared/models/ErrorModel'
import { ArgsForGetCards, CardPack, PacksResponse } from '../models/packModel'
import { identity, pickBy } from 'lodash-es'
import {
  setCardsMaxCount,
  setCardsMinCount,
  setTotalPacksCount,
  setUserPack
} from '../slice/packsSlice'
import {convertData} from "../lib/convertData";

export const packsApiSlice = createApi({
  reducerPath: 'packs/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  tagTypes: ['Cards'],
  endpoints: builder => ({
    getPacks: builder.query<PacksResponse, ArgsForGetCards>({
      query: args => ({
        url: `cards/pack`,
        params: pickBy(
          {
            ...args
          },
          identity
        )
      }),
      async onQueryStarted(payload, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled
        dispatch(setUserPack(convertData(data.cardPacks)))
        dispatch(setTotalPacksCount(data.cardPacksTotalCount))
        dispatch(setCardsMinCount(data.minCardsCount))
        dispatch(setCardsMaxCount(data.maxCardsCount))
      },
      providesTags: result => ['Cards']
    }),
    createCardPack: builder.mutation<any, any>({
      query: (payload: any) => ({
        url: 'cards/pack',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['Cards']
    }),
    deleteCardPack: builder.mutation<any, CardPack>({
      query: payload => ({
        url: `cards/pack/${payload._id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Cards']
    }),
    updateCardsPack: builder.mutation<CardPack, CardPack>({
      query: payload => ({
        url: `cards/pack/${payload._id}`,
        method: 'PUT',
        body: payload
      }),
      invalidatesTags: ['Cards']
    })
  })
})

export const {
  useGetPacksQuery,
  useCreateCardPackMutation,
  useDeleteCardPackMutation,
  useUpdateCardsPackMutation,
  useLazyGetPacksQuery
} = packsApiSlice
