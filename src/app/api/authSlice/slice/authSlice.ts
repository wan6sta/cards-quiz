import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserLoggedInResponse } from '@/features/Login/model/types/loginModels'

interface Initial {
  userData: undefined | UserLoggedInResponse
  isAuth: boolean
}

const initialState: Initial = {
  userData: undefined,
  isAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserLoggedInResponse>) => {
      state.userData = action.payload
      state.isAuth = true
    },
    removeUserData: state => {
      state.userData = undefined
      state.isAuth = false
    },

    setError: state => {
      state.isAuth = false
      state.userData = undefined
    }
  }
})
export const { setUserData, removeUserData } = authSlice.actions
