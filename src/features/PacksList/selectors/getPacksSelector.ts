import { RootState } from '../../../app/providers/StoreProvider/config/store'

export const getPacksSelector = (state: RootState) => state.packs.userPack
