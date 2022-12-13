import styled, { css } from 'styled-components'

interface StyledFlexProps {
  flexDirection?: 'column' | 'row'
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  alignSelf?: 'flex-start' | 'center' | 'flex-end'
  justifyContent?: 'space-between' | 'center' | 'start' | 'flex-end'
  justifySelf?: 'center' | 'start' | 'flex-end'
  rowGap?: string
  columnGap?: string
  cursorPointer?: boolean
  onClick?: Function
  width?: string
  height?: string
}

export const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex: 1;
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height ? props.height : 'auto'};
  flex-direction: ${props => props.flexDirection ? props.flexDirection : 'row'};
  align-items: ${props => props.alignItems ? props.alignItems : 'flex-start'};
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'start'};
  justify-self: ${props => props.justifySelf ? props.justifySelf : 'start'};
  row-gap: ${props => props.rowGap ? props.rowGap : '0'};
  column-gap: ${props => props.rowGap ? props.rowGap : '0'};
  cursor: ${props => props.cursorPointer ? 'pointer' : 'default'};
  ${props => props && css``}
`
