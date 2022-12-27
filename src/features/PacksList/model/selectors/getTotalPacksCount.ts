import { RootState } from '@/app/providers/StoreProvider'

export const getTotalPacksCount =
  (packId: string) =>
  (state: RootState): number => {
    if (packId) {
      return state.cards.cardsTotalCount
    }
    return state.packs.totalPacksCount
  }
