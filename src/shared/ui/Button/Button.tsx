import { ButtonHTMLAttributes, forwardRef } from 'react'
import { StyledButton } from './StyledButton'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  width?: string
  nonRounded?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, ...restProps } = props

    return (
      <StyledButton ref={ref} {...restProps}>
        {children}
      </StyledButton>
    )
  }
)
