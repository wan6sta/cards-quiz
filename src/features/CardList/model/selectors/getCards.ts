import { RootState } from '@/app/providers/StoreProvider'

export const getCards = (state: RootState) => state.cards.cards
