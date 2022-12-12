import { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { StyledAppLink } from './StyledAppLink'

interface AppLinkProps extends LinkProps {
  primary?: boolean
  secondary?: boolean
  justifyContent?: string
}

export const AppLink: FC<AppLinkProps> = props => {
  const { justifyContent, primary, secondary, ...restProps } = props

  return (
    <StyledAppLink
      justifyContent={justifyContent}
      primary={!!primary}
      secondary={!!secondary}
    >
      <Link {...restProps} />
    </StyledAppLink>
  )
}
