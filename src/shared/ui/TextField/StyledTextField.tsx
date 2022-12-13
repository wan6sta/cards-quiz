import styled, { css } from 'styled-components'
import { ReactComponent as SearchIcon } from '../../assets/icons/SearchIcon.svg'
import { ReactComponent as EyeIcon } from '../../assets/icons/Eye.svg'

interface StyledTextFiledProps {
  changeInputView?: boolean
  showPassword?: boolean
  error?: boolean
  withSaveButton?: boolean
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
    user-select: none;
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

  ${props =>
      props.withSaveButton &&
      css`
      padding-right: 80px;
    `}

  ${props =>
      props.error &&
      css`
        border: 1px solid #ff3636;
    `}

  ${props =>
      props.error && props.changeInputView &&
      css`
        border: none;
        border-bottom: 2px solid #ff3636;
         &:focus {
           border-bottom: 2px solid #ff3636;
         }
      `}
`

export const StyledSearchIcon = styled(SearchIcon)`
  
`

export const StyledShowPasswordIcon = styled(EyeIcon)``

export const StyledShowPasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  width: 39px;
  height: 36px;
  transition: 0.3s;
  top: -5px;
  right: 0;
  
  &:hover {
    opacity: 0.7;
  }
`

export const StyledSearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: -6px;
  left: 0;
  opacity: 0.5;
  width: 44px;
  height: 36px;
`
