import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/providers/StoreProvider'

export const getUrlMinMaxCount = createSelector(
  (state: RootState) => state.packs,
  packs => [packs.cardsMinCount, packs.cardsMaxCount]
)
