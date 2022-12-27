import { RootState } from '../../../app/providers/StoreProvider/config/store'

export const getPackName = (state: RootState) => state.cards.packName
