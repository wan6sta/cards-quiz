import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../types/CardsModel'

interface Initial {
  cards: Card[]
  packUserId: string
  packName: string
  cardsTotalCount: number
  cardPackId: string
}

const initialState: Initial = {
  cards: [],
  packUserId: '',
  packName: '',
  cardsTotalCount: 0,
  cardPackId: ''
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload
    },
    setPackUserId: (state, action: PayloadAction<string>) => {
      state.packUserId = action.payload
    },
    setPackName: (state, action: PayloadAction<string>) => {
      state.packName = action.payload
    },
    setCardsTotalCount: (state, action: PayloadAction<number>) => {
      state.cardsTotalCount = action.payload
    },
    setCardPackId: (state, action: PayloadAction<string>) => {
      state.cardPackId = action.payload
    },
    resetCardState: state => {
      state.cards = []
      state.packName = ''
      state.packUserId = ''
      state.cardsTotalCount = 0
    }
  }
})
export const {
  setCardsTotalCount,
  setPackName,
  setPackUserId,
  setCards,
  setCardPackId
} = cardsSlice.actions
