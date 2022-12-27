import { RootState } from '@/app/providers/StoreProvider'

export const isAuthSelector = (state: RootState) => state.auth.isAuth
