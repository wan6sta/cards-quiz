import { RootState } from '../../../app/providers/StoreProvider/store'

export const getTotalPacksCountSelector =
  (packId: string) =>
  (state: RootState): number => {
    if (packId) {
      return state.cards.cardsTotalCount
    }
    return state.packs.totalPacksCount
  }
