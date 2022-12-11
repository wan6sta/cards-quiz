import { FC, forwardRef, InputHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as EyeIcon } from '../../assets/icons/Eye.svg'
import { ReactComponent as SearchIcon } from '../../assets/icons/SearchIcon.svg'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  showPassword?: () => void
  textFieldMode: 'outlined' | 'nonOutlined'
}

interface StyledInputProps {
  changeInputView?: boolean
}

const StyledInput = styled.input<StyledInputProps>`
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  padding-left: 35px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  height: 36px;
  background-color: transparent;
  transition: 0.3s;
  font-weight: bold;

  &:focus {
    outline: none;
    border: 2px solid #1a73a8;
  }

  ${props =>
    props.changeInputView &&
    css`
      border: none;
      border-bottom: 2px solid #e0e0e0;
      padding-left: 0;

      &:focus {
        outline: none;
        border: none;
        border-bottom: 2px solid #1a73a8;
      }
    `}
`

const StyledShowPasswordIcon = styled(EyeIcon)`
  cursor: pointer;
  position: relative;
  left: 369px;
  top: -28px;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

const StyledShowSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  position: relative;
  left: 15px;
  top: -25px;
  opacity: 0.5;
`

export const TextFieldOld: FC<TextFieldProps> = forwardRef<
HTMLInputElement,
TextFieldProps
>(({ showPassword, textFieldMode, ...restProps }, ref) => {
  const fieldMode = textFieldMode === 'outlined'

  return (
    <>
      <StyledInput ref={ref} changeInputView={!fieldMode} {...restProps} />
      {showPassword ? <StyledShowPasswordIcon onClick={showPassword} /> : ''}
      {fieldMode && <StyledShowSearchIcon />}
    </>
  )
})
