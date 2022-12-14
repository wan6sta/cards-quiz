import { FC, PropsWithChildren } from 'react'
import { StyledPageLayout, StyledPageWrapper } from './StyledPageLayout'
import { Navbar } from '@/widgets/Navbar/ui/Navbar'

export const PageLayout: FC<PropsWithChildren> = props => {
  const { children, ...restProps } = props

  return (
    <StyledPageLayout {...restProps}>
      <Navbar />
      <StyledPageWrapper>{children}</StyledPageWrapper>
    </StyledPageLayout>
  )
}
