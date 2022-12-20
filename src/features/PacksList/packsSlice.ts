import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardPack } from '../../pages/PacksListPage/packModel'

interface Initial {
  userPack: [] | CardPack[]
}

const initialState: Initial = {
  userPack: []
}

export const packsSlice = createSlice({
  name: 'packs',
  initialState,
  reducers: {
    setUserPack: (state, action: PayloadAction<CardPack[]>) => {
      console.log(action.payload)
      state.userPack = action.payload
    }
  }
})
export const { setUserPack } = packsSlice.actions
