import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardPack } from '../models/packModel'

interface Initial {
  userPack: [] | CardPack[]
  totalPacksCount: number
}

const initialState: Initial = {
  userPack: [],
  totalPacksCount: 0
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
    }
  }
})
export const { setUserPack, setTotalPacksCount } = packsSlice.actions
