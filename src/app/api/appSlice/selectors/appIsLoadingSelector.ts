import { RootState } from '@/app/providers/StoreProvider'

export const appIsLoadingSelector = (state: RootState) => state.app.isLoading
