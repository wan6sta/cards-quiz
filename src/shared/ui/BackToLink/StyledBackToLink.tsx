import styled, { css } from 'styled-components'

interface StyledBackToLinkProps {
  marginBottom?: string
  alignSelf?: string
}

export const StyledBackToLink = styled.div<StyledBackToLinkProps>`
  display: flex;
  align-items: center;
  height: 24px;
  align-self: ${props => (props.alignSelf ? props.alignSelf : 'flex-start')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
  transition: 0.1s ease-in;

  &:hover {
    opacity: 0.85;
  }
`
export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  font-size: 16px;
  font-weight: 500;
  ${props => props && css``}
`
