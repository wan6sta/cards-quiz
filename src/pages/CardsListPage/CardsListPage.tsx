import { FC } from 'react'
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
import { Dropdown } from '../../widgets/Dropdown/Dropdown'
import { StyledTitleWrapper } from './StyledCardsListPage'
import { CreateNewCard } from '../../features/CardList/ui/CreateNewCard/CreateNewCard'
import { useIsMyPack } from '../../app/providers/StoreProvider/hooks/useIsMyPack'

export const CardsListPage: FC = () => {
  const packName = useAppSelector(getPackName).slice(0, 25)
  const isMyPack = useIsMyPack()

  return (
    <StyledPacksListPage>
      <BackToLink marginBottom='27px'>
        Back to Packs List
      </BackToLink>
      <TitleWrapper>
        <StyledTitleWrapper>
          <Title>{packName}</Title>
          {isMyPack ? <Dropdown /> : null}
        </StyledTitleWrapper>
        <ButtonWrapper>
          {isMyPack ? <CreateNewCard /> : <Button>Learn this pack</Button>}
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
