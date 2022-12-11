import { ChangeEvent, FC, InputHTMLAttributes, memo, useState } from 'react'
import { Span } from '../Span/Span'
import cls from './TextFiled.module.css'
import { cn } from '../../lib/cn/cn'
import {
  StyledSearchIcon,
  StyledShowPasswordIcon,
  StyledTextFiled
} from './StyledTextField'

interface TextFiledProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  showPassword?: boolean
  textFieldMode: 'outlined' | 'nonOutlined'
}

type TypeInput = 'text' | 'password'

export const TextFiled: FC<TextFiledProps> = memo(props => {
  const { showPassword, title, textFieldMode, ...restProps } = props

  const [inputValue, setInputValue] = useState('')
  const [typeInput, setTypeInput] = useState<TypeInput>('text')

  const fieldMode = textFieldMode === 'nonOutlined'

  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const toggleTypeHandler = () => {
    setTypeInput(prev => (prev === 'text' ? 'password' : 'text'))
  }

  return (
    <div className={cls.wrapper}>
      <Span
        className={cn(cls.span, {
          [cls.show]: !!inputValue.length && fieldMode
        })}
        light
      >
        {title}
      </Span>
      <label className={cls.label}>
        {showPassword ? (
          <StyledShowPasswordIcon onClick={toggleTypeHandler} />
        ) : null}
        <StyledTextFiled
          type={typeInput}
          showPassword={!!showPassword}
          value={inputValue}
          onChange={inputValueHandler}
          placeholder={title}
          changeInputView={fieldMode}
          {...restProps}
        />
        {!fieldMode ? <StyledSearchIcon /> : null}
      </label>
    </div>
  )
})
