import { useSearchParams } from 'react-router-dom'
import { ReactComponent as RemoveFilter } from '@/shared/assets/icons/FilterRemove.svg'
import { useUlrParams } from '@/features/PacksList/model/hooks/useUrlParams'
import { RemoveFilterWrapper } from './StyledRemoveFilterBtn'

export const RemoveFilterBtn = () => {
  const urlParams = useUlrParams()
  const [_, setSearchParams] = useSearchParams()

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
