import { FC, useEffect, useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'
import {
  StyledIconsWrapper,
  StyledPacksList,
  StyledSpan,
  StyledTable,
  StyledTableWrapper,
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
import { ReactComponent as LearnIcon } from '../../shared/assets/icons/TeacherIcon.svg'
import { ReactComponent as EditIcon } from '../../shared/assets/icons/EditIcon.svg'
import { ReactComponent as DeleteIcon } from '../../shared/assets/icons/Trash.svg'
import { CardPack } from './models/packModel'
import { useGetPacksQuery } from './api/packsApiSlice'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { getPacksSelector } from './selectors/getPacksSelector'
import { AppFilters } from './models/FiltersModel'
import { useSearchParams } from 'react-router-dom'

interface Table extends CardPack {
  actions?: string
}

const columnHelper = createColumnHelper<Table>()

const columns = [
  columnHelper.accessor('name', {
    header: 'Name'
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
    header: 'Actions'
  })
]

export const PacksList: FC = props => {
  const [sorting, setSorting] = useState<SortingState>([])
  const data = useAppSelector(getPacksSelector)

  const [searchParams, setSearchParams] = useSearchParams()
  const sortedValue =
    sorting.length > 0 && `${sorting[0]?.desc ? '0' : '1'}${sorting[0]?.id}`

  const queryParams = {
    packName: searchParams.get(AppFilters.search),
    pageCount: Number(searchParams.get(AppFilters.perPage)) || 10,
    min: Number(searchParams.get(AppFilters.min)),
    max: Number(searchParams.get(AppFilters.max)),
    page: Number(searchParams.get(AppFilters.page)),
    sortPacks: sortedValue as string | undefined
  }

  // @ts-expect-error
  const { refetch, isLoading } = useGetPacksQuery(queryParams)

  useEffect(() => {
    refetch()
  }, [
    sorting,
    searchParams.get(AppFilters.perPage),
    searchParams.get(AppFilters.page)
  ])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel()
  })

  const loading = isLoading

  return (
    <>
      <StyledPacksList>
        <StyledTable>
          <StyledThead>
            {table.getHeaderGroups().map(headerGroup => (
              <StyledTr key={headerGroup.id}>
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
              </StyledTr>
            ))}
          </StyledThead>
          <StyledTableWrapper>
            <StyledTbody>
              {table.getRowModel().rows.map(row => (
                <StyledTr body key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    if (cell.column.id === 'actions') {
                      return (
                        <StyledTd key={cell.id}>
                          <StyledIconsWrapper>
                            <LearnIcon />
                            <EditIcon />
                            <DeleteIcon />
                          </StyledIconsWrapper>
                        </StyledTd>
                      )
                    }
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
              ))}
            </StyledTbody>
          </StyledTableWrapper>
        </StyledTable>
      </StyledPacksList>
    </>
  )
}
