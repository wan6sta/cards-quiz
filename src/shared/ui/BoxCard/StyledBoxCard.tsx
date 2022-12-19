import styled, { css } from 'styled-components'

interface StyledBoxCardProps {
  width?: string
  rowGap?: string
}

export const StyledBoxCard = styled.div<StyledBoxCardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: ${props => (props.rowGap ? props.rowGap : '24px')};
  width: ${props => (props.width ? props.width : '413px')};
  background: #ffffff;
  box-shadow: 2px 1px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 2px;
  padding: 35px 33px 42px 33px;

  ${props => props && css``}
`
