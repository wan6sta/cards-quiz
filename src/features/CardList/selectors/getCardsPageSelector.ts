import { RootState } from '../../../app/providers/StoreProvider/store'

export const getCardsPageSelector = (state: RootState) => state.cards.page
