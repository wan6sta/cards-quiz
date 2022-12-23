import { useAppSelector } from './useAppSelector'
import { getAuthIdSelector } from '../authSlice/selectors/getAuthIdSelector'
import { getCardUserIdSelector } from '../../../../features/CardList/selectors/getCardUserIdSelector'

export const useIsMyPack = () => {
  const authId = useAppSelector(getAuthIdSelector)
  const userPackId = useAppSelector(getCardUserIdSelector)

  return authId === userPackId
}