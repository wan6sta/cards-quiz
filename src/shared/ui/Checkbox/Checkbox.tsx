import {
  StyledCheckbox,
  StyledLabel,
  StyledWrapperCheckbox
} from './StyledCheckbox'
import { ReactComponent as ActiveCheckboxIcon } from '../../assets/icons/ActiveCheckbox.svg'
import { ChangeEvent, FC, useState } from 'react'
import cls from './Checkbox.module.css'
import { cn } from '../../lib/cn/cn'

interface CheckboxProps {
  Label?: string
}

export const Checkbox: FC<CheckboxProps> = props => {
  const { Label } = props
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = (e: ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.currentTarget.checked)
  }

  return (
    <>
      <StyledWrapperCheckbox>
        <ActiveCheckboxIcon
          className={cn(cls.checkbox, { [cls.active]: isActive })}
        />
        <StyledCheckbox
          checked={isActive}
          onChange={toggleIsActive}
          type={'checkbox'}
        />
      </StyledWrapperCheckbox>
      {Label && <StyledLabel>{Label}</StyledLabel>}
    </>
  )
}
