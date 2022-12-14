import styled from 'styled-components'

interface StyledFormGroupProps {
  margin?: string
}

export const StyledFormGroup = styled.div<StyledFormGroupProps>`
  width: 100%;
  margin: ${({ margin }) => margin || '0'};
`
export const StyledError = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: red;
  opacity: 0.8;
`
export const StyledFormCheckbox = styled.input`
  cursor: pointer;
  width: 18px;
  height: 18px;
  margin-right: 12px;
`
export const StyledCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 4px;
`
