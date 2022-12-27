import { ButtonHTMLAttributes, forwardRef } from 'react'
import { ReactComponent as Logout } from '@/shared/assets/icons/Logout.svg'
import { StyledButton } from './StyledButton'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  width?: string
  logout?: boolean
  nonRounded?: boolean
  margin?: string
  disabled?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { disabled, logout, children, ...restProps } = props

    return (
      <StyledButton ref={ref} disabled={!!disabled} {...restProps}>
        {logout ? <Logout /> : null}
        {children}
      </StyledButton>
    )
  }
)
