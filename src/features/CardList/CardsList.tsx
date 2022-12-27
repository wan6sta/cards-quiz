import { FC, useEffect, useState } from 'react'
import {
  createColumnHelper,
  getCoreRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'
import { StyledPacksList, StyledTable } from '../PacksList/StyledPacksList'
import { useGetCardQuery } from './api/cardApiSlice'
import { Card } from './Models/CardsModel'
import { useAppSelector } from '../../shared/hooks/useAppSelector'
import { useLocation, useSearchParams } from 'react-router-dom'
import { CardListGrade } from './ui/CardListGrade/CardListGrade'
import { getCardsSelector } from './selectors/getCardsSelector'
import { AppFilters } from '../PacksList/models/FiltersModel'
import { StyledCardSpan, StyledCardTextWrapper } from './StyledCardsList'
import { useUlrParams } from '../PacksList/hooks/useUrlParams'
import { useCardQueryParams } from './hooks/useCardQueryParams'
import { TheadTable } from './ui/TheadTable/TheadTable'
import { BodyTable } from './ui/BodyTable/BodyTable'
import { transformSortedValue } from '../../shared/lib/transformSortedValue/transformSortedValue'

const columnHelper = createColumnHelper<Card>()

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
  columnHelper.display({
    id: 'grade',
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
  const urlParams = useUlrParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const { search } = useLocation()

  const data = useAppSelector(getCardsSelector)

  const [sorting, setSorting] = useState<SortingState>([])
  const sortedValue = transformSortedValue(sorting)

  const cardsQueryParams = useCardQueryParams(sortedValue)

  const {
    refetch,
    isFetching,
    data: cardsData
  } = useGetCardQuery(cardsQueryParams)

  useEffect(() => {
    refetch()
  }, [search])

  useEffect(() => {
    if (cardsData?.cards.length === 0 && cardsData.page > 1) {
      setSearchParams({
        ...urlParams,
        [AppFilters.page]: String(cardsData.page - 1)
      })
    }
  }, [cardsData])

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
          <TheadTable table={table} />
          <BodyTable
            dataLength={data.length}
            loading={isFetching}
            table={table}
          />
        </StyledTable>
      </StyledPacksList>
    </>
  )
}
