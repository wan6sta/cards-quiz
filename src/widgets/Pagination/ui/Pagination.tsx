import { FC } from 'react'
import { PerPageSelect } from 'widgets/PerPageSelect/ui/PerPageSelect'
import { PaginatedItems } from './PaginatedItems'
import cls from './Pagination.module.css'

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
        <PerPageSelect />
        <span>{titleForSelectSpan}</span>
      </div>
    </div>
  )
}
