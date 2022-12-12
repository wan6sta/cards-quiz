import styled, { css } from 'styled-components'

interface StyledBoxCardProps {
  width?: string
}

export const StyledBoxCard = styled.div<StyledBoxCardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 24px;
  width: ${props => props.width ? props.width : '550px'};
  background: #FFFFFF;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 35px 33px 42px 33px;
  
  ${props => props && css``}
`
