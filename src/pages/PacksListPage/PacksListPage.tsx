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
  RemoveFilterWrapper,
  StyledPacksListPage,
  TitleWrapper
} from './StyledPacksList'
import { Title } from '../../shared/ui/Title/Title'
import { Button } from '../../shared/ui/Button/Button'
import { Span } from '../../shared/ui/Span/Span'
import { TextField } from '../../shared/ui/TextField/TextField'
import { PacksSwitcher } from '../../shared/ui/PacksSwitcher/PacksSwitcher'
import { DoubleRange } from '../../shared/ui/DoubleRange/DoubleRange'
import { ReactComponent as RemoveFilter } from '../../shared/assets/icons/FilterRemove.svg'
import { Pagination } from '../../widgets/Pagination/Pagination'
import { DeboucedTableInput } from '../../widgets/DeboucedTableInput/DeboucedTableInput'

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
          <RemoveFilterWrapper>
            <RemoveFilter />
          </RemoveFilterWrapper>
        </FilterSliderWrapper>
      </FilterWrapper>
      <PacksList />
      <PaginationWrapper>
        <Pagination />
      </PaginationWrapper>
    </StyledPacksListPage>
  )
}
