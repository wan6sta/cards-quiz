import { FC, useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'

import { ReactComponent as TrDown } from '../../shared/assets/icons/TrDown.svg'
import { ReactComponent as TrUp } from '../../shared/assets/icons/TrUp.svg'
import { ReactComponent as EditIcon } from '../../shared/assets/icons/EditIcon.svg'
import { ReactComponent as DeleteIcon } from '../../shared/assets/icons/Trash.svg'
import {
  StyledHeadTr,
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
} from '../PacksList/StyledPacksList'
import {
  useDeleteCardMutation,
  useGetCardQuery,
  useUpdateCardMutation
} from './api/cardApiSlice'
import { Card, GetCardsArgs } from './Models/CardsModel'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { useParams } from 'react-router-dom'
import { StarRating } from '../../widgets/StarRating/StarRating'
import { CardListGrade } from '../../widgets/CardListGrade/CardListGrade'

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
    header: 'Grade',
    cell: cell => (
      <CardListGrade
        packsId={cell.row.original._id}
        packCreatorId={cell.row.original.user_id}
      />
    )
  })
]

export const CardsList: FC = props => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [deleteCard] = useDeleteCardMutation()
  const [updateCard] = useUpdateCardMutation()
  const data = useAppSelector(state => state.cards.cards)
  const { packId } = useParams()
  const userId = useAppSelector(state => state.auth.userData?._id)

  const cardsQueryParams: GetCardsArgs = {
    cardsPack_id: String(packId)
  }

  const { refetch, isFetching } = useGetCardQuery(cardsQueryParams)

  useEffect(() => {
    refetch()
  }, [])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel()
  })

  const onDeleteCardHandler = async (cardId: string) => {
    await deleteCard(cardId)
  }
  const onUpdateCardHandler = async (cardId: string) => {
    const updateCardPayload = {
      card: {
        _id: cardId,
        question: 'How you doing?'
      }
    }
    await updateCard(updateCardPayload)
  }
  return (
    <>
      <StyledPacksList>
        <StyledTable>
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

          <StyledTbody>
            {table.getRowModel().rows.map(row => (
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
            ))}
          </StyledTbody>
        </StyledTable>
      </StyledPacksList>
    </>
  )
}
