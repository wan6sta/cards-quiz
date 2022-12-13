import { FC, PropsWithChildren } from 'react'
import { StyledImgWrapper } from './StyledImgWrapper'

interface ImgWrapperProps {
  width?: string
  height?: string
  borderRadius?: string
  marginBottom?: string
}

export const ImgWrapper: FC<PropsWithChildren<ImgWrapperProps>> = props => {
  const { children, ...restProps } = props

  return <StyledImgWrapper {...restProps}>{children}</StyledImgWrapper>
}
