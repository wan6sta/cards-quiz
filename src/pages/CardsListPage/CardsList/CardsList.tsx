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
import { CardPack } from '../../../features/PacksList/models/packModel'
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

interface Table extends CardPack {
  actions?: string
}

const columnHelper = createColumnHelper<any>()

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
  const data = [{ id: 1, name: 'blabla' }]

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
        </StyledTable>
      </StyledPacksList>
    </>
  )
}
