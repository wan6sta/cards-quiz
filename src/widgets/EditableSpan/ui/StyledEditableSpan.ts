import styled from 'styled-components'

interface StyledEditableSpanProps {
  marginBottom?: string
}

export const StyledEditableSpan = styled.div<StyledEditableSpanProps>`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '0px')};
  width: 100%;
`

export const StyledTextWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  column-gap: 10px;
  transition: 0.1s ease-in;

  &:hover {
    opacity: 0.85;
  }
`
