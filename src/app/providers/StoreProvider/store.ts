import { configureStore } from '@reduxjs/toolkit'
import { registerApiSlice } from '../../../features/Registration/registerApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loginApiSlice } from '../../../features/Login/loginApiSlice'

export const store = configureStore({
  reducer: {
    [registerApiSlice.reducerPath]: registerApiSlice.reducer,
    [loginApiSlice.reducerPath]: loginApiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      registerApiSlice.middleware,
      loginApiSlice.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
