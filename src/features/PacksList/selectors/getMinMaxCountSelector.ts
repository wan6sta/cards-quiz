import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/providers/StoreProvider/config/store'

export const getMinMaxCountSelector = createSelector(
  (state: RootState) => (state.packs),
  (packs) => [packs.cardsMinCount, packs.cardsMaxCount]
)
