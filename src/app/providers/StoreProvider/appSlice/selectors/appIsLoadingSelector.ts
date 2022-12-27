import { RootState } from '../../store'

export const appIsLoadingSelector = (state: RootState) => state.app.isLoading
