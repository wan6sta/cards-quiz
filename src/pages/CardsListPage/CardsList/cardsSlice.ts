import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Card, GetCardsResponse } from './Models/CardsModel'

const initialState: GetCardsResponse = {
  cards: [],
  maxGrade: 0,
  cardsTotalCount: 0,
  minGrade: 0,
  packUserId: '',
  page: 1,
  pageCount: 4,
  packCreated: new Date(''),
  packName: '',
  packPrivate: false,
  packUpdated: new Date(''),
  token: '',
  tokenDeathTime: 0
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload
    },
    setTotalPacksCount: (state, action: PayloadAction<number>) => {},
    setCardsMinCount: (state, action: PayloadAction<number>) => {},
    setCardsMaxCount: (state, action: PayloadAction<number>) => {}
  }
})
export const {
  setCards,
  setTotalPacksCount,
  setCardsMinCount,
  setCardsMaxCount
} = cardsSlice.actions
