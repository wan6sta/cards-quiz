import { RootState } from '../../../app/providers/StoreProvider/store'

export const getCardUserIdSelector = (state: RootState) => state.cards.packUserId