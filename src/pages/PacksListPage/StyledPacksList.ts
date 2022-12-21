import styled, { css } from 'styled-components'

export const StyledPacksListPage = styled.div`
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