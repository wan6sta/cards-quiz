import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {userloggedInResponse} from '../models/loginModels'

const initialState = {
  userData: {}
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
export const {setUserData, removeUserData} = authSlice.actions

export default authSlice.reducer
