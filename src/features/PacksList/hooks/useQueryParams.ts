import { AppFilters } from '../models/FiltersModel'
import { useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../../../app/providers/StoreProvider/hooks/useAppSelector'
import { getAuthIdSelector } from '../../../app/providers/StoreProvider/authSlice/selectors/getAuthIdSelector'

export const useQueryParams = (sortedValue: string | boolean) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const userId = useAppSelector(getAuthIdSelector)

  return {
    packName: searchParams.get(AppFilters.search) as string,
    pageCount: Number(searchParams.get(AppFilters.perPage)) || 10,
    min: Number(searchParams.get(AppFilters.min)),
    max: Number(searchParams.get(AppFilters.max)),
    page: Number(searchParams.get(AppFilters.page)) || 1,
    sortPacks: sortedValue as string,
    user_id: searchParams.get(AppFilters.filter) === 'my' ? userId : null
  }
}
