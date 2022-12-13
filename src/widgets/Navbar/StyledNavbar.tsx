import styled, { css } from 'styled-components'

interface StyledNavbarProps {
  someProps?: string
}

export const StyledNavbar = styled.div<StyledNavbarProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 6px 136px;
  height: 60px;
  background: #fcfcfc;
  margin-bottom: 24px;
  box-shadow: 0px 2px 10px rgba(109, 109, 109, 0.25),
    inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  ${props => props && css``}
`

export const StyledButtonWrapper = styled.div<StyledNavbarProps>`
  display: flex;
  align-items: center;
  width: 113px;
`
