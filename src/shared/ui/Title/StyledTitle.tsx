import styled from 'styled-components'

interface StyledTitleProps {
  fontSize?: string
}

export const StyledTitle = styled.h1<StyledTitleProps>`
  font-weight: 600;
  font-size: ${props => props.fontSize ? props.fontSize : '26px'};
  line-height: ${props => props.fontSize ? 'normal' : '32px'};
  color: #000000;
`
