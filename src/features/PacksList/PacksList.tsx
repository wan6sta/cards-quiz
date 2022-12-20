import { FC, useEffect, useMemo, useState } from 'react'
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
  StyledTr
} from './StyledPacksList'
import { ReactComponent as TrDown } from '../../shared/assets/icons/TrDown.svg'
import { ReactComponent as TrUp } from '../../shared/assets/icons/TrUp.svg'
import { ReactComponent as LearnIcon } from '../../shared/assets/icons/TeacherIcon.svg'
import { ReactComponent as EditIcon } from '../../shared/assets/icons/EditIcon.svg'
import { ReactComponent as DeleteIcon } from '../../shared/assets/icons/Trash.svg'
import { ArgsForGetCards, CardPack } from '../../pages/PacksListPage/packModel'
import { useGetPacksQuery } from '../../pages/PacksListPage/packsApiSlice'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'

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
  const { userPack } = useAppSelector(state => state.packs)

  const [sorting, setSorting] = useState<SortingState>([])

  const sortedValueHandler =
    sorting.length > 0 && `${sorting[0]?.desc ? '0' : '1'}${sorting[0]?.id}`

  const queryParams = {
    packName: 'test',
    pageCount: 10,
    min: 0,
    max: 10,
    page: 1,
    sortPacks: sortedValueHandler
  } as ArgsForGetCards

  const { refetch } = useGetPacksQuery(queryParams)

  useEffect(() => {
    refetch()
  }, [sorting])

  const data = useMemo(() => [...userPack], [userPack])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <StyledPacksList className='p-2'>
      <StyledTable>
        <StyledThead>
          {table.getHeaderGroups().map(headerGroup => (
            <StyledTr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <StyledTh key={header.id}>
                    {header.isPlaceholder ? null : (
                      <div
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
                      </div>
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
  )
}
