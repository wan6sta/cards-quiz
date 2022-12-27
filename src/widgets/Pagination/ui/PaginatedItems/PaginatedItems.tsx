import { useParams, useSearchParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { debounce } from 'lodash-es'
import { ReactComponent as RightIcon } from '@/shared/assets/icons/RightArrowI.svg'
import { ReactComponent as LeftIcon } from '@/shared/assets/icons/LeftArrow.svg'
import { AppFilters } from '@/features/PacksList/model/types/FiltersModel'
import { useUlrParams } from '@/features/PacksList/model/hooks/useUrlParams'
import { getTotalPacksCount } from '@/features/PacksList/model/selectors/getTotalPacksCount'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import cls from './PaginatedItems.module.css'

export function PaginatedItems() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { packId } = useParams()
  const urlParams = useUlrParams()
  const urlItemsPerPage = Number(searchParams.get(AppFilters.perPage))

  const [itemsPerPage, setItemsPerPage] = useState(urlItemsPerPage || 10)

  const initialValue = 0
  const urlPageParams = Number(searchParams.get(AppFilters.page))

  const packsCount = useAppSelector(getTotalPacksCount(packId || '')) || 1

  useEffect(() => {
    setItemsPerPage(urlItemsPerPage || 10)
  }, [urlItemsPerPage])

  const pageCount = Math.ceil(packsCount / itemsPerPage)

  const handlePageClick = useCallback(
    debounce((event: any) => {
      setSearchParams({ ...urlParams, [AppFilters.page]: event.selected + 1 })
    }, 400),
    [setSearchParams]
  )

  return (
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
  )
}
