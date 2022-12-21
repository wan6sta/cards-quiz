import { FC } from 'react'
import { PacksList } from '../../features/PacksList/PacksList'
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
} from './StyledPacksList'
import { Title } from '../../shared/ui/Title/Title'
import { Button } from '../../shared/ui/Button/Button'
import { Span } from '../../shared/ui/Span/Span'
import { PacksSwitcher } from '../../shared/ui/PacksSwitcher/PacksSwitcher'
import { DoubleRange } from '../../shared/ui/DoubleRange/DoubleRange'
import { Pagination } from '../../widgets/Pagination/Pagination'
import { DeboucedTableInput } from '../../widgets/DeboucedTableInput/DeboucedTableInput'
import { RemoveFilterBtn } from '../../widgets/RemoveFilterBtn/RemoveFilterBtn'

export const PacksListPage: FC = props => {
  return (
    <StyledPacksListPage>
      <TitleWrapper>
        <Title>Packs list</Title>
        <ButtonWrapper>
          <Button>Add new pack</Button>
        </ButtonWrapper>
      </TitleWrapper>
      <FilterWrapper>
        <FilterTextFieldWrapper>
          <InputWrapper>
            <Span spanTitle>Search</Span>
            <DeboucedTableInput />
          </InputWrapper>
          <PackSwitcherWrapper>
            <PacksSwitcher />
          </PackSwitcherWrapper>
        </FilterTextFieldWrapper>

        <FilterSliderWrapper>
          <DoubleRange />
          <RemoveFilterBtn />
        </FilterSliderWrapper>
      </FilterWrapper>
      <PacksList />
      <PaginationWrapper>
        <Pagination />
      </PaginationWrapper>
    </StyledPacksListPage>
  )
}
