import {
  StyledErrorTd,
  StyledErrorTr,
  StyledSpan,
  StyledTbody,
  StyledTd,
  StyledTextWrapper,
  StyledTr
} from '../../StyledPacksList'
import { TableLoader } from '../../../../shared/ui/TableLoader/TableLoader'
import { flexRender, Table } from '@tanstack/react-table'
import { CardPack } from '../../models/packModel'

interface Props {
  loading: boolean
  dataLength: number
  table: Table<CardPack>
}

export const BodyTable = (props: Props) => {
  const { loading, table, dataLength } = props

  return (
    <StyledTbody>
      {loading ? (
        <StyledErrorTr>
          <TableLoader />
        </StyledErrorTr>
      ) : !dataLength ? (
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
  )
}
