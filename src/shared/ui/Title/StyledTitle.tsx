import styled from 'styled-components'

interface StyledTitleProps {
  fontSize?: string
  color?: string
  marginBottom?: string
  underLine?: boolean
  lineHeight?: string
}

export const StyledTitle = styled.h1<StyledTitleProps>`
  font-weight: 600;
  font-size: ${props => (props.fontSize ? props.fontSize : '26px')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : 'normal')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0')};
  text-decoration: ${props => (props.underLine ? 'underline dashed' : 'none')};
  color: ${props => (props.color ? props.color : '#000000')};
`
