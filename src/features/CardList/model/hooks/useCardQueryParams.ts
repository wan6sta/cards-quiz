import { AppFilters } from '../../../PacksList/model/types/FiltersModel'
import { useParams, useSearchParams } from 'react-router-dom'
import { GetCardsArgs } from '../types/CardsModel'

export const useCardQueryParams = (
  sortedValue: string | boolean
): GetCardsArgs => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { packId } = useParams()

  return {
    cardsPack_id: String(packId),
    pageCount: Number(searchParams.get(AppFilters.perPage)) || 10,
    page: Number(searchParams.get(AppFilters.page)) || 1,
    cardAnswer: searchParams.get(AppFilters.search) as string,
    sortCards: sortedValue as string
  }
}
