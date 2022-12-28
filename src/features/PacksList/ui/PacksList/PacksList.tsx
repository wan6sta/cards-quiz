import { FC, useEffect, useState } from 'react'
import {
  createColumnHelper,
  getCoreRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { StyledTable, StyledTitleWrapper } from './StyledPacksList'
import { CardPack } from '../../model/types/packModel'
import { AppFilters } from '../../model/types/FiltersModel'
import { PackListActions } from '../PackListActions/PackListActions'
import { BodyTable } from '../BodyTable/BodyTable'
import { TheadTable } from '../TheadTable/TheadTable'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import {
  getPacks,
  useGetPacksQuery,
  usePackQueryParams,
  useUlrParams
} from '@/features/PacksList'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { getAppIsLoading } from '@/app/api/appSlice'
import { transformSortedValue } from '@/shared/lib/transformSortedValue/transformSortedValue'
import { setPackUserId } from '@/features/CardList'
import { errorMessageHandler } from '@/shared/lib/errorMessageHandler/errorMessageHandler'
import { LinearPageLoader } from '@/widgets/LinearPageLoader'
import { ErrorAlert } from '@/shared/ui/ErrorAlert/ErrorAlert'
import { FetchError } from '@/shared/types/ErrorModel'

const columnHelper = createColumnHelper<CardPack>()

export const PacksList: FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const { search } = useLocation()
  const urlParams = useUlrParams()

  const appIsLoading = useAppSelector(getAppIsLoading)
  const data = useAppSelector(getPacks)

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
    if (appIsLoading) return

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
          cardsCount={cell.row.original.cardsCount}
          packCreatorId={cell.row.original.user_id}
          packsId={cell.row.original._id}
          packsName={cell.row.original.name}
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
