import { AppFilters } from '../models/FiltersModel'
import { useSearchParams } from 'react-router-dom'

export const useUlrParams = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const returnValue = {
    search: searchParams.get(AppFilters.search),
    perPage: Number(searchParams.get(AppFilters.perPage)),
    min: Number(searchParams.get(AppFilters.min)),
    max: Number(searchParams.get(AppFilters.max)),
    page: Number(searchParams.get(AppFilters.page))
  }

  const newArray = Object.entries(returnValue).filter(([key, value]) =>
    Boolean(value)
  )

  const newValue: Record<string, any> = {}

  for (let i = 0; i < newArray.length; i++) {
    newValue[newArray[i][0]] = newArray[i][1]
  }

  return newValue
}
