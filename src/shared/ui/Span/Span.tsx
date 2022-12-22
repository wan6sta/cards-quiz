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
  hover?: boolean
  spanTitle?: boolean
  alignSelf?: string
  fontSize?: string
}

export const Span: FC<PropsWithChildren<SpanProps>> = memo(props => {
  const { hover, children, ...restProps } = props

  return (
    <StyledSpan hover={!!hover} {...restProps}>
      {children}
    </StyledSpan>
  )
})
