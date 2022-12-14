import styled, { css } from 'styled-components'

interface StyledButtonProps {
  primary?: boolean
  secondary?: boolean
  danger?: boolean
  nonRounded?: boolean
  width?: string
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  text-align: center;
  background-color: #366eff;
  width: ${props => (props.width ? props.width : '100%')};
  border-radius: 30px;
  font-family: inherit;
  font-size: 16px;
  color: #fff;
  height: 36px;
  transition: 0.1s ease-in;
  user-select: none;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  box-shadow: 0px 4px 18px rgba(54, 110, 255, 0.35),
    inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  ${props =>
    props.primary &&
    css`
      background-color: #366eff;
    `}

  ${props =>
    props.danger &&
    css`
      background-color: #ff3636;
      box-shadow: 0px 4px 18px rgba(255, 54, 54, 0.35),
        inset 0px 1px 0px rgba(255, 255, 255, 0.3);
    `}

  ${props =>
    props.secondary &&
    css`
      background-color: #fff;
      color: #000;
      font-weight: 500;
      box-shadow: 0px 2px 10px rgba(109, 109, 109, 0.25),
        inset 0px 1px 0px rgba(255, 255, 255, 0.3);
    `}

  ${props =>
    props.nonRounded &&
    css`
      border-radius: 2px;
      box-shadow: none;
    `}
`
