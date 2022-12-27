import { flexRender, Table } from '@tanstack/react-table'
import { CreateNewCard } from '../CreateNewCard/CreateNewCard'
import { Card } from '../../model/types/CardsModel'
import {
  StyledFlexTd,
  StyledFlexTr,
  StyledTbody,
  StyledTd,
  StyledTr
} from '@/features/PacksList/ui/PacksList/StyledPacksList'
import { TableLoader } from '@/shared/ui/TableLoader/TableLoader'
import { useIsMyPack } from '@/shared/hooks/useIsMyPack'

interface Props {
  loading: boolean
  dataLength: number
  table: Table<Card>
}

export const BodyTable = (props: Props) => {
  const { table, loading, dataLength } = props
  const isMyPack = useIsMyPack()

  return (
    <StyledTbody>
      {loading ? (
        <StyledFlexTr>
          <TableLoader />
        </StyledFlexTr>
      ) : !dataLength ? (
        <StyledFlexTr>
          {isMyPack ? (
            <CreateNewCard text />
          ) : (
            <StyledFlexTd>Packs not found</StyledFlexTd>
          )}
        </StyledFlexTr>
      ) : (
        table.getRowModel().rows.map(row => (
          <StyledTr body key={row.id}>
            {row.getVisibleCells().map(cell => {
              return (
                <StyledTd key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </StyledTd>
              )
            })}
          </StyledTr>
        ))
      )}
    </StyledTbody>
  )
}
