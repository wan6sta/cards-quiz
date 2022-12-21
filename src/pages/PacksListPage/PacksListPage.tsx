import { FC } from 'react'
import { PacksList } from '../../features/PacksList/PacksList'
import {
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
import { Span } from '../../shared/ui/Span/Span'
import { PacksSwitcher } from '../../widgets/PacksSwitcher/PacksSwitcher'
import { DoubleRange } from '../../widgets/DoubleRange/DoubleRange'
import { Pagination } from '../../widgets/Pagination/Pagination'
import { DeboucedTableInput } from '../../widgets/DeboucedTableInput/DeboucedTableInput'
import { RemoveFilterBtn } from '../../widgets/RemoveFilterBtn/RemoveFilterBtn'
import { AddNewPack } from '../../features/PacksList/ui/AddNewPack/AddNewPack'

export const PacksListPage: FC = props => {
  return (
    <StyledPacksListPage>
      <TitleWrapper>
        <Title>Packs list</Title>
        <AddNewPack />
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
        <Pagination titleForSelectSpan={'Packs per Page'} />
      </PaginationWrapper>
    </StyledPacksListPage>
  )
}
