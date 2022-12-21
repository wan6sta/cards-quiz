import { FC, useEffect, useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'

import { ReactComponent as TrDown } from '../../../shared/assets/icons/TrDown.svg'
import { ReactComponent as TrUp } from '../../../shared/assets/icons/TrUp.svg'
import { ReactComponent as LearnIcon } from '../../../shared/assets/icons/TeacherIcon.svg'
import { ReactComponent as EditIcon } from '../../../shared/assets/icons/EditIcon.svg'
import { ReactComponent as DeleteIcon } from '../../../shared/assets/icons/Trash.svg'
import {
  StyledIconsWrapper,
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
} from '../../../features/PacksList/StyledPacksList'
import { useAppSelector } from '../../../app/providers/StoreProvider/hooks/useAppSelector'
import { useGetCardQuery } from '../../PacksListPage/PackPage/cardApiSlice'
import { Card } from './Models/CardsModel'

interface Table extends Card {
  actions?: string
}

const columnHelper = createColumnHelper<Table>()

const columns = [
  columnHelper.accessor('question', {
    header: 'Question'
  }),
  columnHelper.accessor('answer', {
    header: 'Answer'
  }),
  columnHelper.accessor('updated', {
    header: 'Last Updated'
  }),
  columnHelper.accessor('grade', {
    header: 'Grade'
  })
]

export const CardsList: FC = props => {
  const [sorting, setSorting] = useState<SortingState>([])
  const { data: rrr, isSuccess } = useGetCardQuery({
    cardsPack_id: '639f46707792515ac401bb00'
  })
  const [data, setData] = useState([])
  // const userId = useAppSelector(state => state.auth.userData?._id)
  useEffect(() => {
    if (rrr) {
      setData(rrr.cards)
    }
  }, [isSuccess])
  console.log(rrr?.cards)
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel()
  })
  useEffect(() => {
    console.log(table.getRowModel().rows)
  }, [])

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
                            onClick: header.column.getToggleSortingHandler()
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

          <StyledTbody>
            {table.getRowModel().rows.map(row => (
              <StyledTr body key={row.id}>
                {row.getVisibleCells().map(cell => {
                  if (cell.column.id === 'grade') {
                    return (
                      <StyledTd key={cell.id}>
                        <StyledIconsWrapper>
                          ⭐⭐⭐⭐⭐
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
        </StyledTable>
      </StyledPacksList>
    </>
  )
}
