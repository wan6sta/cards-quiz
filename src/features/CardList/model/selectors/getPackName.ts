import { RootState } from '@/app/providers/StoreProvider'

export const getPackName = (state: RootState) => state.cards.packName
