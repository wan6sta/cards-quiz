import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'
import { BASE_URL } from '../../../shared/assets/constants/BASE_URL'
import { FetchError } from '../../../shared/models/ErrorModel'
import {
  ArgsForGetCards,
  ArgsForPackBodyRequest,
  CardPack,
  CreatePack,
  CreatePackResponse,
  DeletePackResponse,
  PacksResponse,
  UpdatePack,
  UpdatePackResponse
} from '../models/packModel'
import { identity, pickBy } from 'lodash-es'
import {
  setCardsMaxCount,
  setCardsMinCount,
  setTotalPacksCount,
  setUserPack
} from '../slice/packsSlice'
import { convertPacksData } from '../lib/convertPacksData'

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
        try {
          const { data } = await queryFulfilled
          dispatch(setUserPack(convertPacksData<CardPack>(data.cardPacks)))
          dispatch(setTotalPacksCount(data.cardPacksTotalCount))
          dispatch(setCardsMinCount(data.minCardsCount))
          dispatch(setCardsMaxCount(data.maxCardsCount))
        } catch {}
      },
      providesTags: result => ['Cards']
    }),
    createCardPack: builder.mutation<
      CreatePackResponse,
      ArgsForPackBodyRequest<CreatePack>
    >({
      query: payload => ({
        url: 'cards/pack',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['Cards']
    }),
    deleteCardPack: builder.mutation<DeletePackResponse, string>({
      query: payload => {
        return {
          url: `cards/pack`,
          method: 'DELETE',
          params: {
            id: payload
          }
        }
      },
      invalidatesTags: ['Cards']
    }),
    updateCardsPack: builder.mutation<
      CardPack,
      ArgsForPackBodyRequest<UpdatePack>
    >({
      query: payload => {
        return {
          url: `cards/pack`,
          method: 'PUT',
          body: payload
        }
      },
      transformResponse: (response: UpdatePackResponse) =>
        response.updatedCardsPack,
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
