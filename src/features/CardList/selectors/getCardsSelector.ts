import { RootState } from '../../../app/providers/StoreProvider/config/store'

export const getCardsSelector = (state: RootState) => state.cards.cards
