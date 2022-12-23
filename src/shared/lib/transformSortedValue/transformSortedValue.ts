import { SortingState } from '@tanstack/react-table'

export const transformSortedValue = (
  sorting: SortingState
): string | boolean => {
  return (
    sorting.length > 0 && `${sorting[0]?.desc ? '0' : '1'}${sorting[0]?.id}`
  )
}
