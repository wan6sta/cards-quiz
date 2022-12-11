import styled, { css } from 'styled-components'
import { ReactComponent as SearchIcon } from '../../assets/icons/SearchIcon.svg'
import { ReactComponent as EyeIcon } from '../../assets/icons/Eye.svg'

interface StyledTextFiledProps {
  changeInputView?: boolean
  showPassword?: boolean
}

export const StyledTextFiled = styled.input<StyledTextFiledProps>`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  height: 36px;
  font-family: inherit;
  transition: 0.2s ease-in;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  padding: 6px 6px 6px 40px;

  &:focus {
    outline: none;
    border: 1px solid rgba(54, 110, 255, 1);
  }

  &::placeholder {
    font-weight: 400;
  }

  ${props =>
    props.changeInputView &&
    css`
      border: none;
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      height: 28px;
      padding: 0;

      &:focus {
        outline: none;
        border: none;
        border-bottom: 2px solid rgb(54, 110, 255);
      }
    `}

  ${props =>
    props.showPassword &&
    css`
      padding-right: 48px;
    `}
`

export const StyledSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  position: absolute;
  top: 23px;
  left: 17px;
  opacity: 0.5;
`

export const StyledShowPasswordIcon = styled(EyeIcon)`
  position: absolute;
  cursor: pointer;
  transition: 0.3s;
  top: 18px;
  right: 18px;

  &:hover {
    opacity: 0.7;
  }
`
