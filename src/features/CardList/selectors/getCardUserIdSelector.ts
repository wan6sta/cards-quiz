import { RootState } from '../../../app/providers/StoreProvider/config/store'

export const getCardUserIdSelector = (state: RootState) =>
  state.cards.packUserId
