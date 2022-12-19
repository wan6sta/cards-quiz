import styled, {css} from "styled-components";


interface StyledPacksListPageProps {}

export const StyledPacksListPage = styled.div<StyledPacksListPageProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-top: 16px;
  width: 100%;
  ${props => props && css``}
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
  ${props => props && css``}
`

export const ButtonWrapper = styled.div`
  display: flex;
  width: 175px;
  ${props => props && css``}
`

export const FilterWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-bottom: 24px;
  justify-content: space-between;
`

export const InputWrapper = styled.div`
    width: 413px;
`

export const PackSwitcherWrapper = styled.div`
  display: flex;
`

export const RemoveFilterWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FFFFFF;
  border: 1px solid #E8E8E8;
  width: 40px;
  height: 36px;
  border-radius: 2px;
  transition: 0.1s ease-in;
  
  &:hover {
    opacity: 0.8;
  }
`


export const FilterTextFieldWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
`

export const FilterSliderWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
`

export const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 72px;
  left: 0;
`