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

export const CardsListPage: FC = props => {
  return (
    <StyledPacksListPage>
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
