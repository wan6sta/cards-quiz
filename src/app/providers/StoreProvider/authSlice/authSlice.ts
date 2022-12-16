import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userloggedInResponse } from '../../../../features/Login/models/loginModels'

interface Initial {
  userData: undefined | userloggedInResponse
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
    setUserData: (state, action: PayloadAction<userloggedInResponse>) => {
      state.userData = action.payload
      state.isAuth = true
    },
    removeUserData: state => {
      state.userData = undefined
      state.isAuth = false
    }
  }
})
export const { setUserData, removeUserData } = authSlice.actions
