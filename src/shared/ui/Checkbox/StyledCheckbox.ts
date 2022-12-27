import styled from 'styled-components'

interface StyledCheckboxProps {
    width?: string
    height?: string
}

export const StyledCheckbox = styled.input<StyledCheckboxProps>`
  cursor: pointer;
  width: ${props => props.width ? props.width : '18px'};
  height: ${props => props.height ? props.height : '18px'};
`

export const StyledLabel = styled.span`
  cursor: pointer;
  margin-left: 12px;
  font-weight: 500;
  user-select: none;
  font-size: 14px;
`
export const StyledCheckBoxContainer = styled.label`
  display: flex;
  align-items: center;
`
