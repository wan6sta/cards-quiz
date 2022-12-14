import styled from 'styled-components'

interface StyledTitleProps {
  fontSize?: string
  color?: string
  marginBottom?: string
}

export const StyledTitle = styled.h1<StyledTitleProps>`
  font-weight: 600;
  font-size: ${props => (props.fontSize ? props.fontSize : '26px')};
  line-height: ${props => (props.fontSize ? 'normal' : '32px')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0')};
  color: ${props => (props.color ? props.color : '#000000')};
`
