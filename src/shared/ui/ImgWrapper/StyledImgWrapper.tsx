import styled, { css } from 'styled-components'

interface StyledImgWrapperProps {
  width?: string
  height?: string
  borderRadius?: string
  marginBottom?: string
  cursorPointer?: boolean
}

export const StyledImgWrapper = styled.div<StyledImgWrapperProps>`
  width: ${props => (props.width ? props.width : '96px')};
  height: ${props => (props.height ? props.height : '96px')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0%')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0px')};
  cursor: ${props => (props.cursorPointer ? 'pointer' : 'default')};

  & > img {
    user-select: none;
    border-radius: ${props => (props.borderRadius ? props.borderRadius : '0%')};
  }

  ${props => props && css``}
`
