import { FC } from 'react'
import cls from './Pagination.module.css'
import { Select } from '../Select/Select'
import { PaginatedItems } from './PaginatedItems'

interface PaginationProps {
  titleForSelectSpan?: string
}

export const Pagination: FC<PaginationProps> = props => {
  const { titleForSelectSpan } = props
  return (
    <div className={cls.paginateWrapper}>
      <PaginatedItems />
      <div className={cls.selectWrapper}>
        <span>Show</span>
        <Select />
        <span>{titleForSelectSpan}</span>
      </div>
    </div>
  )
}
