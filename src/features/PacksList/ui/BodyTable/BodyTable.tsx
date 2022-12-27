import {
  StyledFlexTd,
  StyledFlexTr,
  StyledSpan,
  StyledTbody,
  StyledTd,
  StyledTextWrapper,
  StyledTr
} from '../PacksList/StyledPacksList'
import { flexRender, Table } from '@tanstack/react-table'
import { CardPack } from '../../model/types/packModel'
import { TableLoader } from '@/shared/ui/TableLoader/TableLoader'

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
        <StyledFlexTr>
          <TableLoader />
        </StyledFlexTr>
      ) : !dataLength ? (
        <StyledFlexTr>
          <StyledFlexTd>Packs not found</StyledFlexTd>
        </StyledFlexTr>
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
