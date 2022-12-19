import { FC, useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import {
  StyledIconsWrapper,
  StyledPacksList,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTextWrapper,
  StyledTh,
  StyledThead,
  StyledTr,
  StyledTrDownWrapper
} from './StyledPacksList'
import { ReactComponent as TrDown } from '../../shared/assets/icons/TrDown.svg'
import { ReactComponent as LearnIcon } from '../../shared/assets/icons/TeacherIcon.svg'
import { ReactComponent as EditIcon } from '../../shared/assets/icons/EditIcon.svg'
import { ReactComponent as DeleteIcon } from '../../shared/assets/icons/Trash.svg'

interface Person {
  Name: string
  Cards: number
  ['Last Updated']: string
  ['Created by']: string
  Actions: string
}

const defaultData: Person[] = [
  {
    Name: 'Lanaya',
    Cards: 12392193921321312,
    'Last Updated': '18.03.2021',
    'Created by': 'wan6stawan6stawan6stawan6sta',
    Actions: 'some actions'
  },
  {
    Name: 'LanayaLanayaLanayaLanayaLanayaLanayaLanayaLanayaLanayaLanaya',
    Cards: 4,
    'Last Updated': '18.03.2021',
    'Created by': 'wan6sta',
    Actions: 'some actions'
  },
  {
    Name: 'Lanaya',
    Cards: 4,
    'Last Updated': '18.03.2021',
    'Created by': 'wan6sta',
    Actions: 'some actions'
  },
  {
    Name: 'Lanaya',
    Cards: 4,
    'Last Updated': '18.03.2021',
    'Created by': 'wan6sta',
    Actions: 'some actions'
  },
  {
    Name: 'Lanaya',
    Cards: 12392193921321312,
    'Last Updated': '18.03.2021',
    'Created by': 'wan6stawan6stawan6stawan6sta',
    Actions: 'some actions'
  },
  {
    Name: 'LanayaLanayaLanayaLanayaLanayaLanayaLanayaLanayaLanayaLanaya',
    Cards: 4,
    'Last Updated': '18.03.2021',
    'Created by': 'wan6sta',
    Actions: 'some actions'
  },
  {
    Name: 'Lanaya',
    Cards: 4,
    'Last Updated': '18.03.2021',
    'Created by': 'wan6sta',
    Actions: 'some actions'
  },
  {
    Name: 'Lanaya',
    Cards: 4,
    'Last Updated': '18.03.2021',
    'Created by': 'wan6sta',
    Actions: 'some actions'
  }
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('Name', {}),
  columnHelper.accessor(row => row.Cards, {
    id: 'Cards',
    header: () => 'Cards'
  }),
  columnHelper.accessor('Last Updated', {
    header: () => 'Last Updated'
  }),
  columnHelper.accessor('Created by', {
    header: () => 'Created by'
  }),
  columnHelper.accessor('Actions', {
    header: 'Actions'
  })
]

export const PacksList: FC = props => {
  const [data, setData] = useState(() => [...defaultData])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <StyledPacksList className='p-2'>
      <StyledTable>
        <StyledThead>
          {table.getHeaderGroups().map(headerGroup => (
            <StyledTr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                if (header.id === 'Last Updated') {
                  return (
                    <StyledTh key={header.id}>
                      {header.isPlaceholder ? null : (
                        <StyledTrDownWrapper>
                          <span>Last updated</span>
                          <TrDown />
                        </StyledTrDownWrapper>
                      )}
                    </StyledTh>
                  )
                }

                return (
                  <StyledTh key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
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
                if (cell.column.id === 'Actions') {
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </StyledTextWrapper>
                  </StyledTd>
                )
              })}
            </StyledTr>
          ))}
        </StyledTbody>
      </StyledTable>
    </StyledPacksList>
  )
}
