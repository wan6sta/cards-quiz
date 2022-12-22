import { FC, useEffect, useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'
import {
  StyledErrorTd,
  StyledErrorTr,
  StyledHeadTr,
  StyledPacksList,
  StyledSpan,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTextWrapper,
  StyledTh,
  StyledThead,
  StyledTitleWrapper,
  StyledTr
} from './StyledPacksList'
import { ReactComponent as TrDown } from '../../shared/assets/icons/TrDown.svg'
import { ReactComponent as TrUp } from '../../shared/assets/icons/TrUp.svg'
import { CardPack } from './models/packModel'
import { useGetPacksQuery } from './api/packsApiSlice'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { getPacksSelector } from './selectors/getPacksSelector'
import { AppFilters } from './models/FiltersModel'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { LinearPageLoader } from '../../shared/ui/LinearPageLoader/LinearPageLoader'
import { useAppDispatch } from '../../app/providers/StoreProvider/hooks/useAppDispatch'
import { setCardPackId } from '../../pages/CardsListPage/CardsList/cardsSlice'
import { PackListActions } from '../../widgets/PackListActions/PackListActions'
import { errorMessageHandler } from '../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../shared/models/ErrorModel'
import { TableLoader } from '../../shared/ui/TableLoader/TableLoader'
import { ErrorAlert } from '../../shared/ui/ErrorAlert/ErrorAlert'

interface Table extends CardPack {
  actions?: string
}

export const PacksList: FC = props => {
  const [sorting, setSorting] = useState<SortingState>([])
  const { search } = useLocation()
  const data = useAppSelector(getPacksSelector)
  const userId = useAppSelector(state => state.auth.userData?._id)
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const sortedValue =
    sorting.length > 0 && `${sorting[0]?.desc ? '0' : '1'}${sorting[0]?.id}`

  const queryParams = {
    packName: searchParams.get(AppFilters.search) as string,
    pageCount: Number(searchParams.get(AppFilters.perPage)) || 10,
    min: Number(searchParams.get(AppFilters.min)),
    max: Number(searchParams.get(AppFilters.max)),
    page: Number(searchParams.get(AppFilters.page)) || 1,
    sortPacks: sortedValue as string,
    user_id: searchParams.get(AppFilters.filter) === 'my' ? userId : null
  }

  const { refetch, isFetching, error } = useGetPacksQuery(queryParams)

  useEffect(() => {
    refetch()
  }, [sorting, search])

  const onLearnButtonClickHandler = (cardPackId: string) => {
    dispatch(setCardPackId(cardPackId))
    navigate('/cards-list')
  }

  const columnHelper = createColumnHelper<Table>()

  const columns = [
    columnHelper.accessor('name', {
      header: 'Name',
      cell: cell => (
        <StyledTitleWrapper
          onClick={() => onLearnButtonClickHandler(cell.row.original._id)}
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
    columnHelper.accessor('actions', {
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
      <StyledPacksList>
        <StyledTable>
          <StyledThead>
            {table.getHeaderGroups().map(headerGroup => (
              <StyledHeadTr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <StyledTh key={header.id}>
                      {header.isPlaceholder ? null : (
                        <StyledTitleWrapper
                          {...{
                            onClick:
                              header.id !== 'actions'
                                ? header.column.getToggleSortingHandler()
                                : undefined
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: <TrUp />,
                            desc: <TrDown />
                          }[header.column.getIsSorted() as string] ?? null}
                        </StyledTitleWrapper>
                      )}
                    </StyledTh>
                  )
                })}
              </StyledHeadTr>
            ))}
          </StyledThead>

          <StyledTbody>
            {loading ? (
              <StyledErrorTr>
                <TableLoader />
              </StyledErrorTr>
            ) : !data.length ? (
              <StyledErrorTr>
                <StyledErrorTd>Packs not found</StyledErrorTd>
              </StyledErrorTr>
            ) : (
              table.getRowModel().rows.map(row => (
                <StyledTr body key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <StyledTd key={cell.id}>
                        <StyledTextWrapper>
                          <StyledSpan>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </StyledSpan>
                        </StyledTextWrapper>
                      </StyledTd>
                    )
                  })}
                </StyledTr>
              ))
            )}
          </StyledTbody>
        </StyledTable>
      </StyledPacksList>
      <ErrorAlert errorMessage={errorHandler} />
    </>
  )
}
