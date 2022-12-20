import { FC } from 'react'
import cls from './Pagination.module.css'
import { Select } from '../Select/Select'
import { PaginatedItems } from './PaginatedItems'

export const Pagination: FC = props => {
  return (
    <div className={cls.paginateWrapper}>
      <PaginatedItems />
      <div className={cls.selectWrapper}>
        <span>Show</span>
        <Select />
        <span>Cards per Page</span>
      </div>
    </div>
  )
}
