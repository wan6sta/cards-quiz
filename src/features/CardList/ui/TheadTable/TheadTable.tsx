import { flexRender, Table } from '@tanstack/react-table'
import { Card } from '../../model/types/CardsModel'
import { ReactComponent as TrDown } from '@/shared/assets/icons/TrDown.svg'
import { ReactComponent as TrUp } from '@/shared/assets/icons/TrUp.svg'
import {
  StyledHeadTr,
  StyledTh,
  StyledThead,
  StyledTitleWrapper
} from '@/features/PacksList/ui/PacksList/StyledPacksList'

interface Props {
  table: Table<Card>
}

export const TheadTable = (props: Props) => {
  const { table } = props

  return (
    <StyledThead>
      {table.getHeaderGroups().map(headerGroup => (
        <StyledHeadTr key={headerGroup.id}>
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
        </StyledHeadTr>
      ))}
    </StyledThead>
  )
}
