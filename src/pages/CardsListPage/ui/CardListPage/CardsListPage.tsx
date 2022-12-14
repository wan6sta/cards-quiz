import { FC } from 'react'
import { useAppSelector } from '@/shared/hooks/useAppSelector'
import { useIsMyPack } from '@/shared/hooks/useIsMyPack'
import {
  FilterTextFieldWrapper,
  FilterWrapper,
  InputWrapper,
  PaginationWrapper,
  StyledPacksListPage,
  TitleWrapper
} from '@/pages/PacksListPage/ui/StyledPacksList'
import { BackToLink } from '@/shared/ui/BackToLink/BackToLink'
import { Title } from '@/shared/ui/Title/Title'
import { Dropdown } from '@/widgets/Dropdown'
import { CreateNewCard } from '@/features/CardList/ui/CreateNewCard/CreateNewCard'
import { Button } from '@/shared/ui/Button/Button'
import { Span } from '@/shared/ui/Span/Span'
import { DebouncedTableInput } from '@/widgets/DeboucedTableInput'
import { Pagination } from '@/widgets/Pagination'
import { ButtonWrapper } from '@/features/PacksList/ui/AddNewPack/StyledAddNewPack'
import { StyledTitleWrapper } from './StyledCardsListPage'
import { CardsList, getPackName } from '@/features/CardList'
import { useNavigate, useParams } from 'react-router-dom'
import { getTotalPacksCount } from '@/features/PacksList'

export const CardsListPage: FC = () => {
  const { packId } = useParams()
  const navigate = useNavigate()
  const cardsCount = useAppSelector(getTotalPacksCount(packId as string))
  const packName = useAppSelector(getPackName).slice(0, 25)
  const isMyPack = useIsMyPack()
  const onClickHandler = () => {
    if (cardsCount !== 0) navigate(`/learn/${packId as string}`)
  }

  return (
    <StyledPacksListPage>
      <BackToLink marginBottom='27px'>Back to Packs List</BackToLink>
      <TitleWrapper>
        <StyledTitleWrapper>
          <Title>{packName}</Title>
          {isMyPack ? <Dropdown /> : null}
        </StyledTitleWrapper>
        <ButtonWrapper>
          {isMyPack ? (
            <CreateNewCard />
          ) : (
            <Button onClick={onClickHandler}>Learn this pack</Button>
          )}
        </ButtonWrapper>
      </TitleWrapper>
      <FilterWrapper>
        <FilterTextFieldWrapper>
          <InputWrapper>
            <Span spanTitle>Search</Span>
            <DebouncedTableInput title={'Enter your question'} />
          </InputWrapper>
        </FilterTextFieldWrapper>
      </FilterWrapper>
      <CardsList />
      <PaginationWrapper>
        <Pagination titleForSelectSpan={'Cards per Page'} />
      </PaginationWrapper>
    </StyledPacksListPage>
  )
}
