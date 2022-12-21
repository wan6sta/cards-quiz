import { FC } from 'react'
import { PacksList } from '../../features/PacksList/PacksList'

import { Title } from '../../shared/ui/Title/Title'
import { Button } from '../../shared/ui/Button/Button'
import { Span } from '../../shared/ui/Span/Span'
import { PacksSwitcher } from '../../shared/ui/PacksSwitcher/PacksSwitcher'
import { DoubleRange } from '../../shared/ui/DoubleRange/DoubleRange'
import { Pagination } from '../../widgets/Pagination/Pagination'
import { DeboucedTableInput } from '../../widgets/DeboucedTableInput/DeboucedTableInput'
import { RemoveFilterBtn } from '../../widgets/RemoveFilterBtn/RemoveFilterBtn'
import {
  ButtonWrapper,
  FilterSliderWrapper,
  FilterTextFieldWrapper,
  FilterWrapper,
  InputWrapper,
  PackSwitcherWrapper,
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
          <Button>Learn by this pack</Button>
        </ButtonWrapper>
      </TitleWrapper>
      <FilterWrapper>
        <FilterTextFieldWrapper>
          <InputWrapper>
            <Span spanTitle>Provide your text</Span>
            <DeboucedTableInput />
          </InputWrapper>
        </FilterTextFieldWrapper>
      </FilterWrapper>
      <CardsList />
      <PaginationWrapper>
        <Pagination />
      </PaginationWrapper>
    </StyledPacksListPage>
  )
}
