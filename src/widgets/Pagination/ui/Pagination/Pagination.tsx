import { FC } from 'react'
import { PerPageSelect } from '@/widgets/PerPageSelect'
import { PaginatedItems } from '../PaginatedItems/PaginatedItems'
import { SelectWrapper, StyledPagination } from './StyledPagination'

interface PaginationProps {
  titleForSelectSpan?: string
}

export const Pagination: FC<PaginationProps> = props => {
  const { titleForSelectSpan } = props

  return (
    <StyledPagination>
      <PaginatedItems />
      <SelectWrapper>
        <span>Show</span>
        <PerPageSelect />
        <span>{titleForSelectSpan}</span>
      </SelectWrapper>
    </StyledPagination>
  )
}
