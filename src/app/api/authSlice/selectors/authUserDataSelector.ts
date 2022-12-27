import { RootState } from '@/app/providers/StoreProvider'

export const authUserDataSelector = (state: RootState) => state.auth.userData
