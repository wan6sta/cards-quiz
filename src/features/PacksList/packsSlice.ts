import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardPack } from '../../pages/PacksListPage/packModel'

export interface Filter {
  search?: string
  showPacks?: string
  perPage?: string
  page?: number
  min?: number
  max?: number
}

interface Initial {
  userPack: [] | CardPack[]
  filters: Filter
}

const initialState: Initial = {
  userPack: [],
  filters: {
    search: '',
    showPacks: '',
    perPage: '10',
    page: 0,
    min: 1,
    max: 10
  }
}

export const packsSlice = createSlice({
  name: 'packs',
  initialState,
  reducers: {
    setUserPack: (state, action: PayloadAction<CardPack[]>) => {
      console.log(action.payload)
      state.userPack = action.payload
    },
    setFilters: (state, action: PayloadAction<Filter>) => {
      if (action.payload.perPage) {
        state.filters = action.payload
      }
    }
  }
})
export const { setUserPack, setFilters } = packsSlice.actions
