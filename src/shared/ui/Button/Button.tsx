import { ButtonHTMLAttributes, FC } from 'react'
import { StyledButton } from './StyledButton'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  width?: string
  nonRounded?: boolean
}

export const Button: FC<ButtonProps> = props => {
  const { children, ...restProps } = props

  return <StyledButton {...restProps}>{children}</StyledButton>
}
