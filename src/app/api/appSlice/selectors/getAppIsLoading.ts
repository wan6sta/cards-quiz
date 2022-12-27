import { RootState } from '@/app/providers/StoreProvider'

export const getAppIsLoading = (state: RootState) => state.app.isLoading
