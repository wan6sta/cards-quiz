import { pickBy } from 'lodash-es'
import { createApi } from '@reduxjs/toolkit/query/react'
import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react'

import {
  Card,
  CardApiPayload,
  CreateCard,
  CreateCardResponse,
  DeleteCardResponse,
  GetCardsArgs,
  GetCardsResponse,
  UpdateCard,
  UpdateCardResponse
} from '../model/types/CardsModel'
import {
  setCardPackId,
  setCards,
  setCardsTotalCount,
  setPackName,
  setPackUserId
} from '../model/slice/cardsSlice'
import { BASE_URL } from '@/shared/assets/constants/BASE_URL'
import { FetchError } from '@/shared/types/ErrorModel'
import { setAppIsLoading } from '@/app/api/appSlice'
import { convertPacksData } from '@/features/PacksList/model/lib/convertPacksData'

export const cardApiSlice = createApi({
  reducerPath: 'card/api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }) as BaseQueryFn<string | FetchArgs, unknown, FetchError, {}>,
  tagTypes: ['Card'],
  endpoints: builder => ({
    getCard: builder.query<GetCardsResponse, GetCardsArgs>({
      query: args => ({
        url: `cards/card`,
        params: pickBy({
          ...args
        })
      }),
      async onQueryStarted(payload, { dispatch, queryFulfilled }) {
        try {
          dispatch(setAppIsLoading(true))
          const { data } = await queryFulfilled
          dispatch(setCardsTotalCount(data.cardsTotalCount))
          dispatch(setCards(convertPacksData<Card>(data.cards)))
          dispatch(setCardPackId(String(data.cardPackId)))
          dispatch(setPackName(data.packName))
          dispatch(setPackUserId(data.packUserId))
          dispatch(setAppIsLoading(false))
        } catch {
          dispatch(setAppIsLoading(false))
        }
      },
      providesTags: result => ['Card']
    }),
    createCard: builder.mutation<
      CreateCardResponse,
      CardApiPayload<CreateCard>
    >({
      query: payload => ({
        url: 'cards/card',
        method: 'POST',
        body: payload
      }),
      invalidatesTags: ['Card']
    }),
    deleteCard: builder.mutation<DeleteCardResponse, string>({
      query: cardId => ({
        url: `cards/card/`,
        method: 'DELETE',
        params: {
          id: cardId
        }
      }),
      invalidatesTags: ['Card']
    }),
    updateCard: builder.mutation<
      UpdateCardResponse,
      CardApiPayload<UpdateCard>
    >({
      query: payload => ({
        url: `cards/card/`,
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
