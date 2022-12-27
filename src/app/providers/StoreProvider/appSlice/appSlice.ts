import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Initial {
  isLoading: boolean
}

const initialState: Initial = {
  isLoading: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})
export const { setAppIsLoading } = appSlice.actions
