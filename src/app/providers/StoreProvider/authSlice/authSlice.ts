import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserLoggedInResponse } from '../../../../features/Login/models/loginModels'

interface Initial {
  userData: undefined | UserLoggedInResponse
  isAuth: boolean
  isLoading: boolean
  error: string
}

const initialState: Initial = {
  userData: undefined,
  isAuth: false,
  isLoading: false,
  error: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserLoggedInResponse>) => {
      state.isLoading = false
      state.userData = action.payload
      state.isAuth = true
      state.error = ''
    },
    removeUserData: state => {
      state.isLoading = false
      state.userData = undefined
      state.isAuth = false
      state.error = ''
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
      state.error = ''
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.isLoading = false
      state.isAuth = false
      state.userData = undefined
    }
  }
})
export const { setUserData, removeUserData, setIsLoading, setError } = authSlice.actions
