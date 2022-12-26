import styled, { css } from 'styled-components'

interface StyledModalWrapperProps {}

export const StyledModalWrapper = styled.div<StyledModalWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);

  ${props => props && css``}
`
