import styled, { css } from 'styled-components'

export const StyledProfileInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  cursor: pointer;
  height: 60px;
  transition: 0.25s ease-in;

  ${props => props && css``}
`

export const StyledUserName = styled.div`
  display: flex;
  align-items: center;
  height: 30px;

  ${props => props && css``}
`
