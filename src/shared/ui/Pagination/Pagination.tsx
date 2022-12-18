import { FC, useState } from 'react'
import ReactPaginate from 'react-paginate'
import cls from './Pagination.module.css'
import { ReactComponent as LeftIcon } from '../../assets/icons/LeftArrow.svg'
import { ReactComponent as RightIcon } from '../../assets/icons/RightArrowI.svg'
import { Select } from '../Select/Select'

interface PaginationProps {}

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14
]

function Items({ currentItems }: { currentItems: number[] }) {
  return (
    <>
      {currentItems &&
        currentItems.map(item => (
          <div>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  )
}

function PaginatedItems({ itemsPerPage }: { itemsPerPage: number }) {
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  console.log(currentItems)

  return (
    <>
      <ReactPaginate
        breakLabel='...'
        nextLabel={
          <div tabIndex={1} className={cls.prev}>
            <RightIcon />
          </div>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={
          <div tabIndex={1} className={cls.prev}>
            <LeftIcon />
          </div>
        }
        renderOnZeroPageCount={undefined}
        className={cls.ul}
        activeClassName={cls.active}
      />
    </>
  )
}

export const Pagination: FC<PaginationProps> = props => {
  const { ...restProps } = props

  return (
    <div className={cls.paginateWrapper}>
      <PaginatedItems itemsPerPage={3} />
      <div className={cls.selectWrapper}>
        <span>Show</span>
        <Select />
        <span>Cards per Page</span>
      </div>
    </div>
  )
}
