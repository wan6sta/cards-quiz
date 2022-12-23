import {
  StyledHeadTr,
  StyledTh,
  StyledThead,
  StyledTitleWrapper
} from '../../StyledPacksList'
import { flexRender, Table } from '@tanstack/react-table'
import { CardPack } from '../../models/packModel'
import { ReactComponent as TrDown } from '../../../../shared/assets/icons/TrDown.svg'
import { ReactComponent as TrUp } from '../../../../shared/assets/icons/TrUp.svg'

interface Props {
  table: Table<CardPack>
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
  )
}
