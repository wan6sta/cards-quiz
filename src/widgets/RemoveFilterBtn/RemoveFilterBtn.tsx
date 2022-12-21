import { useUlrParams } from '../../features/PacksList/hooks/useUrlParams'
import { useSearchParams } from 'react-router-dom'
import { AppFilters } from '../../features/PacksList/models/FiltersModel'
import { ReactComponent as RemoveFilter } from '../../shared/assets/icons/FilterRemove.svg'
import { RemoveFilterWrapper } from "./StyledRemoveFilterBtn";

export const RemoveFilterBtn = () => {
  const urlParams = useUlrParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const removeQueryParams = () => {
    if (urlParams) {
      searchParams.delete(AppFilters.search)
      searchParams.delete(AppFilters.perPage)
      searchParams.delete(AppFilters.min)
      searchParams.delete(AppFilters.max)
      searchParams.delete(AppFilters.page)
      searchParams.delete(AppFilters.filter)
      setSearchParams(searchParams)
    }
  }
  return (
    <RemoveFilterWrapper>
      <RemoveFilter onClick={removeQueryParams} />
    </RemoveFilterWrapper>
  )
}
