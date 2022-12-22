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
  tokenDeathTime: 0,
  cardPackId: ''
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload
    },
    setCardsPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setCardPackId: (state, action: PayloadAction<string>) => {
      state.cardPackId = action.payload
    }
  }
})
export const { setCards, setCardsPage, setCardPackId } = cardsSlice.actions
