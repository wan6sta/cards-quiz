import { StyledCheckbox, StyledWrapperCheckbox } from './StyledCheckbox'
import { ReactComponent as ActiveCheckboxIcon } from '../../assets/icons/ActiveCheckbox.svg'
import { ChangeEvent, useState } from 'react'
import cls from './Checkbox.module.css'
import { cn } from '../../lib/cn/cn'

export const Checkbox = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleIsActive = (e: ChangeEvent<HTMLInputElement>) => {
    setIsActive(e.currentTarget.checked)
  }

  return (
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
  )
}
