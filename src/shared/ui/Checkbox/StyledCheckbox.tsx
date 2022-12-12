import styled from 'styled-components'

interface StyledCheckboxProps {
  someProps?: string
}

export const StyledCheckbox = styled.input<StyledCheckboxProps>`
  cursor: pointer;
  width: 18px;
  height: 18px;
  &:checked {
    appearance: none;
  }
`

export const StyledWrapperCheckbox = styled.div<StyledCheckboxProps>`
  cursor: pointer;
  position: relative;
  width: 18px;
  height: 18px;
  &:hover {
    opacity: 0.85;
  }
`
