import { RootState } from '@/app/providers/StoreProvider'

export const getCardUserId = (state: RootState) =>
  state.cards.packUserId
