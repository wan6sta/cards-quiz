import { RootState } from '../../../app/providers/StoreProvider/store'

export const getCardsSelector = (state: RootState) => state.cards.cards
