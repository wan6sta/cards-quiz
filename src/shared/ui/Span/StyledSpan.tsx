import styled, { css } from 'styled-components'

interface StyledSpanProps {
  light?: boolean
  medium?: boolean
  bold?: boolean
  nonSelect?: boolean
  error?: boolean
  marginBottom?: string
}

export const StyledSpan = styled.span<StyledSpanProps>`
  font-size: 14px;
  line-height: 24px;
  opacity: 0.6;
  color: #000;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0px'};
  user-select: ${props => (props.nonSelect ? 'none' : 'text')};

  ${props =>
    props.light &&
    css`
      font-weight: 400;
    `}

  ${props =>
    props.medium &&
    css`
      font-weight: 600;
    `}

  ${props =>
    props.bold &&
    css`
      font-weight: 500;
      opacity: 1;
    `}

  ${props =>
    props.error &&
    css`
      user-select: none;
      color: #ff3636;
      font-weight: 500;
      font-size: 12px;
      opacity: 1;
    `}
`
