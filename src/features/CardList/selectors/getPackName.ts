import { RootState } from '../../../app/providers/StoreProvider/store'

export const getPackName = (state: RootState) => state.cards.packName
