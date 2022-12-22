import { FC, useEffect, useRef } from 'react'
import { Title } from '../../shared/ui/Title/Title'
import { Button } from '../../shared/ui/Button/Button'
import { Span } from '../../shared/ui/Span/Span'
import { Pagination } from '../../widgets/Pagination/Pagination'
import { DebouncedTableInput } from '../../widgets/DeboucedTableInput/DebouncedTableInput'
import { ButtonWrapper } from '../../features/PacksList/ui/AddNewPack/StyledAddNewPack'
import {
  FilterTextFieldWrapper,
  FilterWrapper,
  InputWrapper,
  PaginationWrapper,
  StyledPacksListPage,
  TitleWrapper
} from '../PacksListPage/StyledPacksList'
import { CardsList } from '../../features/CardList/CardsList'
import { BackToLink } from '../../shared/ui/BackToLink/BackToLink'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { getPackName } from '../../features/CardList/selectors/getPackName'
import { Flex } from '../../shared/ui/Flex/Flex'
import { Dropdown } from '../../widgets/Dropdown/Dropdown'
import { Portal } from '../../shared/ui/Portal/Portal'
import { StyledTitleWrapper } from './StyledCardsListPage'

export const CardsListPage: FC = props => {
  const packName = useAppSelector(getPackName)

  return (
    <StyledPacksListPage>
      <BackToLink alignSelf='flex-start' marginBottom='27px'>
        Back to Packs List
      </BackToLink>
      <TitleWrapper>
        <StyledTitleWrapper>
            <Title>{packName.slice(0, 25)}</Title>
            <Dropdown />
        </StyledTitleWrapper>
        <ButtonWrapper>
          <Button>Learn this pack</Button>
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
