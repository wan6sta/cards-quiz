import { FC, PropsWithChildren } from 'react'
import { ReactComponent as BackIcon } from '@/shared/assets/icons/BackToIcon.svg'
import { AppPaths } from '@/app/providers/AppRouter/routerConfig'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { StyledBackToLink, StyledWrapper } from './StyledBackToLink'

interface BackToLinkProps {
  marginBottom?: string
  alignSelf?: string
}

export const BackToLink: FC<PropsWithChildren<BackToLinkProps>> = props => {
  const { children, ...restProps } = props

  return (
    <StyledBackToLink {...restProps}>
      <AppLink to={AppPaths.packsListPage}>
        <StyledWrapper>
          <BackIcon />
          {children}
        </StyledWrapper>
      </AppLink>
    </StyledBackToLink>
  )
}
