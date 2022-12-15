import { configureStore } from '@reduxjs/toolkit'
import { registerApiSlice } from '../../../features/Registration/api/registerApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loginApiSlice } from '../../../features/Login/api/loginApiSlice'
import authReducer from './authSlice/authSlice'
import { forgotApiSlice } from '../../../features/PasswordUpdate/api/forgotPassApiSlice'
import { authMeApiSlice } from '../../../shared/api/authMeApiSlice'
import authSlice from '../../../features/Login/api/authSlice'
export const store = configureStore({
  reducer: {
    authSlice,
    [registerApiSlice.reducerPath]: registerApiSlice.reducer,
    [loginApiSlice.reducerPath]: loginApiSlice.reducer,
    [forgotApiSlice.reducerPath]: forgotApiSlice.reducer,
    [authMeApiSlice.reducerPath]: authMeApiSlice.reducer,
    auth: authReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      registerApiSlice.middleware,
      loginApiSlice.middleware,
      authMeApiSlice.middleware,
      forgotApiSlice.middleware
    ),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
