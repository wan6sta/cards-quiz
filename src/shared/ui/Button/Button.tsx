import { ButtonHTMLAttributes, FC } from 'react'
import { StyledButton } from './StyledButton'
import { ReactComponent as Logout } from '../../assets/icons/Logout.svg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  width?: string
  logout?: boolean
  nonRounded?: boolean
}

export const Button: FC<ButtonProps> = props => {
  const { logout, children, ...restProps } = props

  return (
    <StyledButton {...restProps}>
      {logout ? <Logout /> : null}
      {children}
    </StyledButton>
  )
}
