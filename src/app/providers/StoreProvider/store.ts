import { configureStore } from '@reduxjs/toolkit'
import { authApiSlice } from '../../../features/Registration/authApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [authApiSlice.reducerPath]: authApiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(authApiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>

setupListeners(store.dispatch)
