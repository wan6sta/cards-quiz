import { RootState } from '@/app/providers/StoreProvider'

export const getIsAuth = (state: RootState) => state.auth.isAuth
