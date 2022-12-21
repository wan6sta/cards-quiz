import styled, {css} from "styled-components";

interface StyledPacksSwitcherProps {
  isAll?: boolean
  isMy?: boolean
}

export const StyledPacksSwitcher = styled.div<StyledPacksSwitcherProps>`
  display: flex;
  background: #FFFFFF;
  border-radius: 2px;
  width: 196px;
  height: 36px;
  ${props => props && css``}
`

export const StyledPack = styled.div<StyledPacksSwitcherProps>`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 36px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  border: 1px solid #D9D9D9;
  border-radius: 2px;
  transition: 0.1s ease-in;
  
  &:hover {
    opacity: 0.9;
  }
  
  ${props => props.isAll && css`
    background: #366EFF;
    color: white;
    border: 1px solid transparent;
    border-radius: 0 2px 2px 0;
  `}

  ${props => props.isMy && css`
    background: #366EFF;
    color: white;
    border: 1px solid transparent;
    border-radius: 2px 0 0 2px;
  `}
`