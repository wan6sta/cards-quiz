import { FC, MouseEventHandler, PropsWithChildren } from 'react'
import { StyledFlex } from './StyledFlex'

interface FlexProps {
  flexDirection?: 'column' | 'row'
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  alignSelf?: 'flex-start' | 'center' | 'flex-end'
  justifyContent?: 'space-between' | 'center' | 'start' | 'flex-end'
  justifySelf?: 'center' | 'start' | 'flex-end'
  rowGap?: string
  columnGap?: string
  cursorPointer?: boolean
  onClick?: MouseEventHandler<HTMLDivElement>
  margin?: string
  padding?: string
  width?: string
  height?: string
}

export const Flex: FC<PropsWithChildren<FlexProps>> = props => {
  const { cursorPointer, children, ...restProps } = props

  return (
    <StyledFlex tabIndex={1} cursorPointer={!!cursorPointer} {...restProps}>
      {children}
    </StyledFlex>
  )
}
