import { AppFilters } from '../models/FiltersModel'
import { useSearchParams } from 'react-router-dom'
import {ArgsForGetCards} from "../../../pages/PacksListPage/packModel";

interface Sorting {
  id: string
  desc: boolean
}

export const useQueryParams = (sorting: Sorting[]): ArgsForGetCards => {
  const [searchParams, setSearchParams] = useSearchParams()
  const sortedValue =
    sorting.length > 0 && `${sorting[0]?.desc ? '0' : '1'}${sorting[0]?.id}`

  console.log(sorting)

  return {
    packName: searchParams.get(AppFilters.search) || '',
    pageCount: Number(searchParams.get(AppFilters.perPage)) || 10,
    min: Number(searchParams.get(AppFilters.min)) || 0,
    max: Number(searchParams.get(AppFilters.max)) || 10,
    page: Number(searchParams.get(AppFilters.page)) || 1,
    sortPacks: sortedValue as string | undefined
  }
}
