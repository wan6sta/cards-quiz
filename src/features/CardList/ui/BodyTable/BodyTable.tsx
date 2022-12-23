import {
  StyledFlexTd,
  StyledFlexTr,
  StyledTbody,
  StyledTd,
  StyledTr
} from '../../../PacksList/StyledPacksList'
import { TableLoader } from '../../../../shared/ui/TableLoader/TableLoader'
import { CreateNewCard } from '../CreateNewCard/CreateNewCard'
import { flexRender, Table } from '@tanstack/react-table'
import { Card } from '../../Models/CardsModel'
import {useIsMyPack} from "../../../../app/providers/StoreProvider/hooks/useIsMyPack";

interface Props {
  loading: boolean
  dataLength: number
  table: Table<Card>
}

export const BodyTable = (props: Props) => {
  const {table, loading, dataLength} = props
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
