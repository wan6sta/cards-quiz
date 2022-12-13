import {
  StyledCheckbox,
  StyledCheckBoxContainer,
  StyledLabel,
  StyledWrapperCheckbox
} from './StyledCheckbox'
import { ReactComponent as ActiveCheckboxIcon } from '../../assets/icons/ActiveCheckbox.svg'
import { ChangeEvent, forwardRef, useState } from 'react'
import cls from './Checkbox.module.css'
import { cn } from '../../lib/cn/cn'

interface CheckboxProps {
  Label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { Label } = props
    const [isActive, setIsActive] = useState(false)

    const toggleIsActive = (e: ChangeEvent<HTMLInputElement>) => {
      setIsActive(e.currentTarget.checked)
    }

    return (
      <StyledCheckBoxContainer>
        <StyledWrapperCheckbox>
          <ActiveCheckboxIcon
            className={cn(cls.checkbox, { [cls.active]: isActive })}
          />
          <StyledCheckbox
            ref={ref}
            checked={isActive}
            onChange={toggleIsActive}
            type={'checkbox'}
          />
        </StyledWrapperCheckbox>
        {Label && <StyledLabel>{Label}</StyledLabel>}
      </StyledCheckBoxContainer>
    )
  }
)
