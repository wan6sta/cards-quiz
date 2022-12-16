import styled, {css} from "styled-components";

interface StyledProfileModalInfoProps {}

export const StyledProfileModalInfo = styled.div<StyledProfileModalInfoProps>`
  padding: 22px;
  display: flex;
  flex-direction: column;
  width: 122px;
  height: 104px;
  background: #FFFFFF;
  border: 1px solid #CFCFCF;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.06);
  position: relative;
`

export const StyledProfileItem = styled.div<StyledProfileModalInfoProps>`
  display: flex;
  align-items: center;
  column-gap: 15px;
  cursor: pointer;
  
  &:hover {
    color: black;
  }
`

export const StyledTextWrapper = styled.div<StyledProfileModalInfoProps>`
    
    &:hover {
      color: black;
    }
`