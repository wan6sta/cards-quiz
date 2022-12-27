import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authMeApiSlice, authSlice } from '@/app/api/authSlice'
import { appSlice } from '@/app/api/appSlice'
import { registerApiSlice } from '@/features/Registration'
import { loginApiSlice } from '@/features/Login'
import { forgotApiSlice } from '@/features/PasswordUpdate'
import { profileSlice } from '@/features/Profile'
import { packsApiSlice, packsSlice } from '@/features/PacksList'
import { cardApiSlice, cardsSlice } from '@/features/CardList'

export const store = configureStore({
  reducer: {
    [registerApiSlice.reducerPath]: registerApiSlice.reducer,
    [loginApiSlice.reducerPath]: loginApiSlice.reducer,
    [forgotApiSlice.reducerPath]: forgotApiSlice.reducer,
    [authMeApiSlice.reducerPath]: authMeApiSlice.reducer,
    [profileSlice.reducerPath]: profileSlice.reducer,
    [packsApiSlice.reducerPath]: packsApiSlice.reducer,
    [cardApiSlice.reducerPath]: cardApiSlice.reducer,
    auth: authSlice.reducer,
    packs: packsSlice.reducer,
    cards: cardsSlice.reducer,
    app: appSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      registerApiSlice.middleware,
      loginApiSlice.middleware,
      authMeApiSlice.middleware,
      forgotApiSlice.middleware,
      profileSlice.middleware,
      packsApiSlice.middleware,
      cardApiSlice.middleware
    ),
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
