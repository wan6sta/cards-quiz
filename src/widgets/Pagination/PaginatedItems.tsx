import { useSearchParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AppFilters } from '../../features/PacksList/models/FiltersModel'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import ReactPaginate from 'react-paginate'
import cls from './Pagination.module.css'
import { ReactComponent as RightIcon } from '../../shared/assets/icons/RightArrowI.svg'
import { ReactComponent as LeftIcon } from '../../shared/assets/icons/LeftArrow.svg'
import { useUlrParams } from '../../features/PacksList/hooks/useUrlParams'

export function PaginatedItems() {
  const [searchParams, setSearchParams] = useSearchParams()
  // const [itemOffset, setItemOffset] = useState(0)

  const [itemsPerPage, setItemsPerPage] = useState(
    Number(searchParams.get(AppFilters.perPage)) || 10
  )
  const initialValue = 0
  const urlParams = useUlrParams()
  const urlPageParams = Number(searchParams.get(AppFilters.page))
  // const endOffset = itemOffset + itemsPerPage
  const packsCount = useAppSelector(state => state.packs.totalPacksCount)
  // const items = []
  //
  // for (let i = 0; i < packsCount; i++) {
  //   items.push(i)
  // }

  useEffect(() => {
    setItemsPerPage(Number(searchParams.get(AppFilters.perPage)) || 10)
  }, [searchParams.get(AppFilters.perPage)])

  // const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(packsCount / itemsPerPage)

  const handlePageClick = (event: any) => {
    setSearchParams({ ...urlParams, [AppFilters.page]: event.selected + 1 })
    // const newOffset = (event.selected * itemsPerPage) % packsCount
    // setItemOffset(newOffset)
  }

  console.log(urlPageParams)
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
        forcePage={urlPageParams === 0 ? initialValue : urlPageParams - 1}
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
