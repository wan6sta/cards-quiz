import { FC } from 'react'
import { StyledPagination } from './StyledPagination'

interface PaginationProps {}

export const Pagination: FC<PaginationProps> = props => {
  const { ...restProps } = props

  return <StyledPagination {...restProps} />
}
