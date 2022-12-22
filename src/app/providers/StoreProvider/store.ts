import { configureStore } from '@reduxjs/toolkit'
import { registerApiSlice } from '../../../features/Registration/api/registerApiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { loginApiSlice } from '../../../features/Login/api/loginApiSlice'
import { forgotApiSlice } from '../../../features/PasswordUpdate/api/forgotPassApiSlice'
import { authMeApiSlice } from '../../../shared/api/authMeApiSlice'
import { authSlice } from './authSlice/authSlice'
import { profileSlice } from '../../../features/Profile/api/profileSlice'
import { packsApiSlice } from '../../../features/PacksList/api/packsApiSlice'
import { packsSlice } from '../../../features/PacksList/slice/packsSlice'
import { cardApiSlice } from '../../../pages/PacksListPage/PackPage/cardApiSlice'
import { cardsSlice } from '../../../pages/CardsListPage/CardsList/cardsSlice'

export const store = configureStore({
  reducer: {
    [registerApiSlice.reducerPath]: registerApiSlice.reducer,
    [loginApiSlice.reducerPath]: loginApiSlice.reducer,
    [forgotApiSlice.reducerPath]: forgotApiSlice.reducer,
    [authMeApiSlice.reducerPath]: authMeApiSlice.reducer,
    [profileSlice.reducerPath]: profileSlice.reducer,
    [packsApiSlice.reducerPath]: packsApiSlice.reducer,
    auth: authSlice.reducer,
    [cardApiSlice.reducerPath]: cardApiSlice.reducer,
    packs: packsSlice.reducer,
    cards: cardsSlice.reducer
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
