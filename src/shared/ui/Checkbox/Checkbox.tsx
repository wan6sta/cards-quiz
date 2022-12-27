import {
  StyledCheckbox,
  StyledCheckBoxContainer,
  StyledLabel
} from './StyledCheckbox'
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  width?: string
  height?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { label, onChange, ...restProps } = props
    const toggleIsActive = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
    }

    return (
      <StyledCheckBoxContainer>
        <StyledCheckbox
          ref={ref}
          onChange={toggleIsActive}
          type={'checkbox'}
          {...restProps}
        />
        {label && <StyledLabel>{label}</StyledLabel>}
      </StyledCheckBoxContainer>
    )
  }
)
