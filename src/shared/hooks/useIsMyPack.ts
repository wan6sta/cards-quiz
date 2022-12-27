import { useAppSelector } from './useAppSelector'
import { getAuthId } from '@/app/api/authSlice/selectors/getAuthId'
import { getCardUserId } from '@/features/CardList/model/selectors/getCardUserId'

export const useIsMyPack = () => {
  const authId = useAppSelector(getAuthId)
  const userPackId = useAppSelector(getCardUserId)

  return authId === userPackId
}
