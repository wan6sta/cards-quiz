import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  useState,
  KeyboardEvent
} from 'react'
import { Span } from '../Span/Span'
import cls from './TextFiled.module.css'
import { cn } from '../../lib/cn/cn'
import {
  StyledSearchIcon,
  StyledSearchIconWrapper,
  StyledShowPasswordIcon,
  StyledShowPasswordWrapper,
  StyledTextFiled
} from './StyledTextField'
import { Button } from '../Button/Button'

interface TextFiledProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  showPassword?: boolean
  textFieldMode: 'outlined' | 'nonOutlined'
  withSaveButton?: boolean
  error?: string
  onEnter?: (str: string) => void
}

type TypeInput = 'text' | 'password'

export const TextFiled: FC<TextFiledProps> = memo(props => {
  const {
    error,
    onEnter,
    withSaveButton,
    showPassword,
    title,
    textFieldMode,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState('')
  const [typeInput, setTypeInput] = useState<TypeInput>('text')

  const fieldMode = textFieldMode === 'nonOutlined'

  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const toggleTypeHandler = () => {
    setTypeInput(prev => (prev === 'text' ? 'password' : 'text'))
  }

  const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if ((e.code = 'Enter')) {
      onEnter && onEnter(inputValue)
    }
  }

  return (
    <div className={cls.wrapper}>
      <Span
        className={cn(cls.span, {
          [cls.show]: !!inputValue.length && fieldMode
        })}
        nonSelect
        light
      >
        {title}
      </Span>
      {withSaveButton && !error ? (
        <Button className={cn(cls.saveButton)} nonRounded>
          Save
        </Button>
      ) : null}
      {showPassword ? (
        <StyledShowPasswordWrapper onClick={toggleTypeHandler} tabIndex={1}>
          <StyledShowPasswordIcon />
        </StyledShowPasswordWrapper>
      ) : null}
      <label className={cls.label}>
        <StyledTextFiled
          onKeyDown={onEnterHandler}
          error={!!error}
          withSaveButton={!!withSaveButton}
          type={typeInput}
          showPassword={!!showPassword}
          value={inputValue}
          onChange={inputValueHandler}
          placeholder={title}
          changeInputView={fieldMode}
          {...restProps}
        />
        {!fieldMode ? (
          <StyledSearchIconWrapper>
            <StyledSearchIcon />
          </StyledSearchIconWrapper>
        ) : null}
        <Span error className={cls.error}>
          {error}
        </Span>
      </label>
    </div>
  )
})
