import styled, { css } from 'styled-components'

interface StyledPageLoaderProps {}

export const StyledPageLoader = styled.div<StyledPageLoaderProps>`
  z-index: -2;
  display: flex;
  padding: 200px 0 0 0;
  align-items: flex-start;
  justify-content: center;
  min-height: calc(100vh - 204px);
  width: 100%;
  ${props => props && css``}
`
