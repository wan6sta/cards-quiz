import { AppFilters } from '../models/FiltersModel'
import { useSearchParams } from 'react-router-dom'
import { identity, isBoolean, pickBy } from 'lodash-es'

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

  // const newArray = Object.entries(returnValue).filter(([key, value]) =>
  //   Boolean(value)
  // )
  //
  // const newValue: Record<string, any> = {}
  //
  // for (let i = 0; i < newArray.length; i++) {
  //   newValue[newArray[i][0]] = newArray[i][1]
  // }

  return returnValue
}
