import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { userloggedInResponse } from '../../../../features/Login/models/loginModels'

type Initial = Record<string, undefined | any>

const initialState: Initial = {
  userData: undefined
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<userloggedInResponse>) => {
      state.userData = action.payload
    },
    removeUserData: state => {
      state.userData = {}
    }
  }
})
export const { setUserData, removeUserData } = authSlice.actions
