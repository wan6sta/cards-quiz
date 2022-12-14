import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
  isLogin: boolean
}

const initialState: InitialState = {
  isLogin: false
}

const todosSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin (state, action) {
      state.isLogin = action.payload
    }
  }
})

export const { setIsLogin } = todosSlice.actions

export default todosSlice.reducer
