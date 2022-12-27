import { RootState } from '@/app/providers/StoreProvider'

export const getPacks = (state: RootState) => state.packs.userPack
