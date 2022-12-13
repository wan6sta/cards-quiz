import { FC, PropsWithChildren } from 'react'
import { StyledBackToLink, StyledWrapper } from './StyledBackToLink'
import { AppLink } from '../AppLink/AppLink'
import { ReactComponent as BackIcon } from '../../assets/icons/BackToIcon.svg'

interface BackToLinkProps {
  marginBottom?: string
  alignSelf?: string
}

export const BackToLink: FC<PropsWithChildren<BackToLinkProps>> = props => {
  const { children, ...restProps } = props

  return (
    <StyledBackToLink {...restProps}>
      <AppLink to={'/'}>
        <StyledWrapper>
          <BackIcon />
          {children}
        </StyledWrapper>
      </AppLink>
    </StyledBackToLink>
  )
}
