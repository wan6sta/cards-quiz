import { AppFilters } from '../models/FiltersModel'
import { useSearchParams } from 'react-router-dom'
import { identity, pickBy } from 'lodash-es'

export const useUlrParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const returnValue = pickBy(
    {
      search: searchParams.get(AppFilters.search),
      perPage: searchParams.get(AppFilters.perPage),
      min: searchParams.get(AppFilters.min),
      max: searchParams.get(AppFilters.max),
      page: searchParams.get(AppFilters.page),
      filter: searchParams.get(AppFilters.filter)
    },
    identity
  )

  return returnValue
}
