import { FC } from 'react'

import { Title } from '../../shared/ui/Title/Title'
import { Button } from '../../shared/ui/Button/Button'
import { Span } from '../../shared/ui/Span/Span'
import { Pagination } from '../../widgets/Pagination/Pagination'
import { DeboucedTableInput } from '../../widgets/DeboucedTableInput/DeboucedTableInput'
import { ButtonWrapper } from '../../features/PacksList/ui/AddNewPack/StyledAddNewPack'
import {
  FilterTextFieldWrapper,
  FilterWrapper,
  InputWrapper,
  PaginationWrapper,
  StyledPacksListPage,
  TitleWrapper
} from '../PacksListPage/StyledPacksList'
import { CardsList } from './CardsList/CardsList'
import { BackToLink } from '../../shared/ui/BackToLink/BackToLink'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { AddNewCard } from './addNewCardPage/AddNewCard'

export const CardsListPage: FC = props => {
  /* const cardsData = useAppSelector(state => state.cards.cards)
  if (!cardsData.length) return <AddNewCard /> */
  return (
    <StyledPacksListPage>
      <BackToLink alignSelf='flex-start' marginBottom='27px'>
        Back to Packs List
      </BackToLink>
      <TitleWrapper>
        <Title>Friends Pack</Title>
        <ButtonWrapper>
          <Button>Learn this pack</Button>
        </ButtonWrapper>
      </TitleWrapper>
      <FilterWrapper>
        <FilterTextFieldWrapper>
          <InputWrapper>
            <Span spanTitle>Search</Span>
            <DeboucedTableInput />
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
