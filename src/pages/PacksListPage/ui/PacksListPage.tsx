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
import { Title } from '@/shared/ui/Title/Title'
import { AddNewPack } from '@/features/PacksList/ui/AddNewPack/AddNewPack'
import { Span } from '@/shared/ui/Span/Span'
import { DebouncedTableInput } from '@/widgets/DeboucedTableInput'
import { PacksSwitcher } from '@/widgets/PacksSwitcher'
import { RemoveFilterBtn } from '@/widgets/RemoveFilterBtn'
import { DoubleRange } from '@/widgets/DoubleRange'
import { PacksList } from '@/features/PacksList/PacksList'
import { Pagination } from '@/widgets/Pagination'

export const PacksListPage = () => {
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
            <DebouncedTableInput title={'Enter cards pack name'} />
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
