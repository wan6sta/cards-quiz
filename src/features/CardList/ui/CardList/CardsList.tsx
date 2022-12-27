import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import {
  createColumnHelper,
  getCoreRowModel,
  SortingState,
  useReactTable
} from '@tanstack/react-table'
import { useGetCardQuery } from '../../api/cardApiSlice'
import { Card } from '../../model/types/CardsModel'
import { CardListGrade } from '../CardListGrade/CardListGrade'
import { getCards } from '../../model/selectors/getCards'
import { StyledCardSpan, StyledCardTextWrapper } from './StyledCardsList'
import { useUlrParams } from '../../../PacksList/model/hooks/useUrlParams'
import { useCardQueryParams } from '../../model/hooks/useCardQueryParams'
import { TheadTable } from '../TheadTable/TheadTable'
import { BodyTable } from '../BodyTable/BodyTable'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { transformSortedValue } from '@/shared/lib/transformSortedValue/transformSortedValue'
import { AppFilters } from '@/features/PacksList/model/types/FiltersModel'
import {
  StyledPacksList,
  StyledTable
} from '@/features/PacksList/ui/PacksList/StyledPacksList'
import { getAppIsLoading } from '@/app/api/appSlice'

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
        cardName={cell.row.original.question}
        initAnswer={cell.row.original.answer}
      />
    )
  })
]

export const CardsList = () => {
  const urlParams = useUlrParams()
  const [_, setSearchParams] = useSearchParams()
  const { search } = useLocation()

  const data = useAppSelector(getCards)
  const appIsLoading = useAppSelector(getAppIsLoading)

  const [sorting, setSorting] = useState<SortingState>([])
  const sortedValue = transformSortedValue(sorting)

  const cardsQueryParams = useCardQueryParams(sortedValue)

  const {
    refetch,
    isFetching,
    data: cardsData
  } = useGetCardQuery(cardsQueryParams)

  useEffect(() => {
    if (appIsLoading) return

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
  )
}
