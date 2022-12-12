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
export const StyledLabel = styled.span`
  margin-left: 12px;
  font-weight: 500;
  font-size: 14px;
`
export const StyledCheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`
