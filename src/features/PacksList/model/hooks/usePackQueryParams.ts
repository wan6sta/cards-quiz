import { useSearchParams } from 'react-router-dom'
import { AppFilters } from '../types/FiltersModel'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { getAuthId } from '@/app/api/authSlice'

export const usePackQueryParams = (sortedValue: string | boolean) => {
  const [searchParams, _] = useSearchParams()
  const userId = useAppSelector(getAuthId)

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
