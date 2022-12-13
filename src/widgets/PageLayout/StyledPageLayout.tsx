import styled, { css } from 'styled-components'

export const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  
  ${props => props && css``}
`

export const StyledPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-height: calc(100vh - 84px);
  padding: 0 142px;
  ${props => props && css``}
`
