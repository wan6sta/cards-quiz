import { RootState } from '../../store'

export const getAuthIdSelector = (state: RootState): string => {
  return state.auth.userData?._id ? state.auth.userData._id : ''
}
