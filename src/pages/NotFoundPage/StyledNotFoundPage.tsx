import styled, { css } from 'styled-components'

export const StyledNotFoundPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f9f9fa;
  ${props => props && css``}
`

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 62px;
  ${props => props && css``}
`

export const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 11px;
  
  ${props => props && css``}
`

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 64px;
  height: 192px;
  width: 218px;
  ${props => props && css``}
`
