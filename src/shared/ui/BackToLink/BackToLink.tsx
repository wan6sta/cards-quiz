import { FC, PropsWithChildren } from 'react'
import { ReactComponent as BackIcon } from '@/shared/assets/icons/BackToIcon.svg'
import { AppPaths } from '@/app/providers/AppRouter/config/routerConfig'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { StyledBackToLink, StyledWrapper } from './StyledBackToLink'
import { useParams } from 'react-router-dom'

interface BackToLinkProps {
  marginBottom?: string
  alignSelf?: string
  cardList?: boolean
}

export const BackToLink: FC<PropsWithChildren<BackToLinkProps>> = props => {
  const { packId } = useParams()

  const { children, cardList, ...restProps } = props

  return (
    <StyledBackToLink {...restProps}>
      <AppLink
        to={
          cardList ? `/cards-list/${packId as string}` : AppPaths.packsListPage
        }
      >
        <StyledWrapper>
          <BackIcon />
          {children}
        </StyledWrapper>
      </AppLink>
    </StyledBackToLink>
  )
}
