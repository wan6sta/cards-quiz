import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { registerApiSlice } from '@/features/Registration/api/registerApiSlice'
import { loginApiSlice } from '@/features/Login/api/loginApiSlice'
import { forgotApiSlice } from '@/features/PasswordUpdate/api/forgotPassApiSlice'
import { profileSlice } from '@/features/Profile/api/profileSlice'
import { packsApiSlice } from '@/features/PacksList/api/packsApiSlice'
import { cardApiSlice } from '@/features/CardList/api/cardApiSlice'
import { packsSlice } from '@/features/PacksList/slice/packsSlice'
import { cardsSlice } from '@/features/CardList/slice/cardsSlice'
import { authMeApiSlice, authSlice } from '@/app/api/authSlice'
import { appSlice } from '@/app/api/appSlice'

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
