import { FC, useEffect, useState } from 'react'
import {
  createColumnHelper,
  getCoreRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'
import {
  StyledPacksList,
  StyledTable,
  StyledTitleWrapper
} from './StyledPacksList'
import { CardPack, PacksResponse } from './models/packModel'
import { useGetPacksQuery } from './api/packsApiSlice'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { getPacksSelector } from './selectors/getPacksSelector'
import { AppFilters } from './models/FiltersModel'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { LinearPageLoader } from '../../shared/ui/LinearPageLoader/LinearPageLoader'
import { useAppDispatch } from '../../app/providers/StoreProvider/hooks/useAppDispatch'
import { PackListActions } from './ui/PackListActions/PackListActions'
import { errorMessageHandler } from '../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../shared/models/ErrorModel'
import { ErrorAlert } from '../../shared/ui/ErrorAlert/ErrorAlert'
import { setPackUserId } from '../CardList/slice/cardsSlice'
import { useUlrParams } from './hooks/useUrlParams'
import { usePackQueryParams } from './hooks/usePackQueryParams'
import { BodyTable } from './ui/BodyTable/BodyTable'
import { TheadTable } from './ui/TheadTable/TheadTable'
import { transformSortedValue } from '../../shared/lib/transformSortedValue/transformSortedValue'

const columnHelper = createColumnHelper<CardPack>()

export const PacksList: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const { search } = useLocation()
  const urlParams = useUlrParams()

  const data = useAppSelector(getPacksSelector)

  const [sorting, setSorting] = useState<SortingState>([])
  const sortedValue = transformSortedValue(sorting)

  const queryParams = usePackQueryParams(sortedValue)

  const {
    refetch,
    isFetching,
    error,
    data: packData
  } = useGetPacksQuery(queryParams)

  useEffect(() => {
    refetch()
  }, [sorting, search])

  useEffect(() => {
    if (packData?.cardPacks.length === 0 && packData.page > 1) {
      setSearchParams({
        ...urlParams,
        [AppFilters.page]: String(packData.page - 1)
      })
    }
  }, [packData])

  const onClickNameHandler = (cardPackId: string, userCardId: string) => {
    dispatch(setPackUserId(userCardId))
    navigate(`/cards-list/${cardPackId}`)
  }

  const columns = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: cell => (
        <StyledTitleWrapper
          onClick={() =>
            onClickNameHandler(cell.row.original._id, cell.row.original.user_id)
          }
        >
          {cell.getValue()}
        </StyledTitleWrapper>
      )
    }),
    columnHelper.accessor('cardsCount', {
      header: 'Cards'
    }),
    columnHelper.accessor('updated', {
      header: 'Last Updated'
    }),
    columnHelper.accessor('user_name', {
      header: 'Created by'
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: cell => (
        <PackListActions
          packCreatorId={cell.row.original.user_id}
          packsId={cell.row.original._id}
        />
      )
    })
  ]

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel()
  })

  const loading = isFetching

  const errorHandler = errorMessageHandler((error as FetchError)?.data?.error)
  return (
    <>
      {loading ? <LinearPageLoader /> : null}
      <StyledTable>
        <TheadTable table={table} />
        <BodyTable loading={loading} dataLength={data.length} table={table} />
      </StyledTable>
      <ErrorAlert errorMessage={errorHandler} />
    </>
  )
}
