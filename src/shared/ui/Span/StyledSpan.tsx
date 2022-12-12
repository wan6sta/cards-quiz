import styled, { css } from 'styled-components'

interface StyledSpanProps {
  light: boolean
  medium: boolean
  bold: boolean
  nonSelect?: boolean
}

export const StyledSpan = styled.span<StyledSpanProps>`
  font-size: 14px;
  line-height: 24px;
  opacity: 0.5;
  color: #000;
  user-select: ${props => props.nonSelect ? 'none' : 'text'};

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
`
