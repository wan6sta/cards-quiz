import {
  StyledCheckbox,
  StyledCheckBoxContainer,
  StyledLabel
} from './StyledCheckbox'
import { ChangeEvent, forwardRef, InputHTMLAttributes } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  Label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { Label, onChange } = props
    const toggleIsActive = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
    }

    return (
      <StyledCheckBoxContainer>
        <StyledCheckbox
          ref={ref}
          onChange={toggleIsActive}
          type={'checkbox'}
          {...props}
        />
        {Label && <StyledLabel>{Label}</StyledLabel>}
      </StyledCheckBoxContainer>
    )
  }
)
