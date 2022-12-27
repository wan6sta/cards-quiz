import { RootState } from '@/app/providers/StoreProvider'

export const getAuthId = (state: RootState): string => {
  return state.auth.userData?._id ? state.auth.userData._id : ''
}
