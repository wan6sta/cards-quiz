import { RootState } from '../../../app/providers/StoreProvider/store'

export const getPacksSelector = (packId: string) => (state: RootState): number => {
  if (packId) {
    return state.cards.cardsTotalCount
  }
  return state.packs.totalPacksCount
}