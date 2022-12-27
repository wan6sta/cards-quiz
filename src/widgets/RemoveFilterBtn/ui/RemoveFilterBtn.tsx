import { useSearchParams } from 'react-router-dom'
import { ReactComponent as RemoveFilter } from '../../../shared/assets/icons/FilterRemove.svg'
import { RemoveFilterWrapper } from './StyledRemoveFilterBtn'
import { useUlrParams } from 'features/PacksList/hooks/useUrlParams'

export const RemoveFilterBtn = () => {
  const urlParams = useUlrParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const removeQueryParams = () => {
    if (urlParams) {
      setSearchParams({})
    }
  }

  return (
    <RemoveFilterWrapper onClick={removeQueryParams} tabIndex={0}>
      <RemoveFilter />
    </RemoveFilterWrapper>
  )
}
