import { FC, useEffect, useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'

import { ReactComponent as TrDown } from '../../shared/assets/icons/TrDown.svg'
import { ReactComponent as TrUp } from '../../shared/assets/icons/TrUp.svg'

import {
  StyledErrorTd,
  StyledErrorTr,
  StyledHeadTr,
  StyledPacksList,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTh,
  StyledThead,
  StyledTitleWrapper,
  StyledTr
} from '../PacksList/StyledPacksList'
import { useGetCardQuery } from './api/cardApiSlice'
import { Card, GetCardsArgs } from './Models/CardsModel'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { CardListGrade } from './ui/CardListGrade/CardListGrade'
import { TableLoader } from '../../shared/ui/TableLoader/TableLoader'
import { getAuthIdSelector } from '../../app/providers/StoreProvider/authSlice/selectors/getAuthIdSelector'
import { getCardUserIdSelector } from './selectors/getCardUserIdSelector'
import { getCardsSelector } from './selectors/getCardsSelector'
import { CreateNewCard } from './ui/CreateNewCard/CreateNewCard'
import { AppFilters } from '../PacksList/models/FiltersModel'
import { StyledCardSpan, StyledCardTextWrapper } from './StyledCardsList'

interface Table extends Card {
  actions?: string
}

const columnHelper = createColumnHelper<Table>()

const columns = [
  columnHelper.accessor('question', {
    header: 'Question',
    cell: cell => (
      <StyledCardTextWrapper>
        <StyledCardSpan>{cell.getValue()}</StyledCardSpan>
      </StyledCardTextWrapper>
    )
  }),
  columnHelper.accessor('answer', {
    header: 'Answer',
    cell: cell => (
      <StyledCardTextWrapper>
        <StyledCardSpan>{cell.getValue()}</StyledCardSpan>
      </StyledCardTextWrapper>
    )
  }),
  columnHelper.accessor('updated', {
    header: 'Last Updated',
    cell: cell => (
      <StyledCardTextWrapper>
        <StyledCardSpan>{cell.getValue()}</StyledCardSpan>
      </StyledCardTextWrapper>
    )
  }),
  columnHelper.accessor('grade', {
    header: 'Grade',
    cell: cell => (
      <CardListGrade
        grade={cell.row.original.grade as number}
        packsId={cell.row.original._id}
        packCreatorId={cell.row.original.user_id}
      />
    )
  })
]

export const CardsList: FC = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [searchParams, setSearchParams] = useSearchParams()
  const { packId } = useParams()
  const { search } = useLocation()
  const data = useAppSelector(getCardsSelector)
  const userAuthId = useAppSelector(getAuthIdSelector)
  const userPackId = useAppSelector(getCardUserIdSelector)

  const cardsQueryParams: GetCardsArgs = {
    cardsPack_id: String(packId),
    pageCount: Number(searchParams.get(AppFilters.perPage)) || 10,
    page: Number(searchParams.get(AppFilters.page)) || 1,
    cardAnswer: searchParams.get(AppFilters.search) as string
  }

  const { refetch, isFetching } = useGetCardQuery(cardsQueryParams)

  useEffect(() => {
    refetch()
  }, [search])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel()
  })

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
            {isFetching ? (
              <StyledErrorTr>
                <TableLoader />
              </StyledErrorTr>
            ) : !data.length ? (
              <StyledErrorTr>
                {userAuthId === userPackId ? (
                  <CreateNewCard text />
                ) : (
                  <StyledErrorTd>Packs not found</StyledErrorTd>
                )}
              </StyledErrorTr>
            ) : (
              table.getRowModel().rows.map(row => (
                <StyledTr body key={row.id}>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <StyledTd key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </StyledTd>
                    )
                  })}
                </StyledTr>
              ))
            )}
          </StyledTbody>
        </StyledTable>
      </StyledPacksList>
    </>
  )
}
