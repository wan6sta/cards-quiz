import { FC, memo, PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

interface StyledSpanProps {
  light: boolean
  medium: boolean
  bold: boolean
}

const StyledSpan = styled.span<StyledSpanProps>`
  font-size: 14px;
  line-height: 24px;
  opacity: 0.5;
  color: #000;

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
      color: #000;
    `}
`

interface SpanProps {
  light?: boolean
  medium?: boolean
  bold?: boolean
  className?: string
}

export const Span: FC<PropsWithChildren<SpanProps>> = memo(props => {
  const { children, ...restProps } = props

  return <StyledSpan {...restProps}>{children}</StyledSpan>
})
