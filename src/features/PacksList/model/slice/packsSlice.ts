import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardPack } from '../types/packModel'

interface Initial {
  userPack: [] | CardPack[]
  totalPacksCount: number
  cardsMinCount: number
  cardsMaxCount: number
}

const initialState: Initial = {
  userPack: [],
  totalPacksCount: 0,
  cardsMinCount: 0,
  cardsMaxCount: 0
}

export const packsSlice = createSlice({
  name: 'packs',
  initialState,
  reducers: {
    setUserPack: (state, action: PayloadAction<CardPack[]>) => {
      state.userPack = action.payload
    },
    setTotalPacksCount: (state, action: PayloadAction<number>) => {
      state.totalPacksCount = action.payload
    },
    setCardsMinCount: (state, action: PayloadAction<number>) => {
      state.cardsMinCount = action.payload
    },
    setCardsMaxCount: (state, action: PayloadAction<number>) => {
      state.cardsMaxCount = action.payload
    }
  }
})
export const {
  setUserPack,
  setTotalPacksCount,
  setCardsMinCount,
  setCardsMaxCount
} = packsSlice.actions
