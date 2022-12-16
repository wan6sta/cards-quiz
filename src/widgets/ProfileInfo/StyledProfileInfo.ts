import styled, {css} from "styled-components";

interface StyledProfileInfoProps {}

export const StyledProfileInfo = styled.div<StyledProfileInfoProps>`
  display: flex;
  align-items: center;
  column-gap: 12px;
  cursor: pointer;
  height: 60px;
  transition: 0.25s ease-in;
  
  ${props => props && css``}
`

export const StyledUserName = styled.div<StyledProfileInfoProps>`
  display: flex;
  align-items: center;
  height: 30px;
  
  ${props => props && css``}
`