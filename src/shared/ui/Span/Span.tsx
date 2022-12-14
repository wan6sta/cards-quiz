import { FC, memo, PropsWithChildren } from 'react'
import { StyledSpan } from './StyledSpan'

interface SpanProps {
  light?: boolean
  medium?: boolean
  bold?: boolean
  error?: boolean
  nonSelect?: boolean
  className?: string
  marginBottom?: string
  textCenter?: boolean
}

export const Span: FC<PropsWithChildren<SpanProps>> = memo(props => {
  const { children, ...restProps } = props

  return <StyledSpan {...restProps}>{children}</StyledSpan>
})
