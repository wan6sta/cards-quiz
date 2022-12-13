import {
  ChangeEvent,
  FC,
  forwardRef,
  InputHTMLAttributes,
  memo,
  useState
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

interface TextFiledProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  showPassword?: boolean
  textFieldMode: 'outlined' | 'nonOutlined'
}

type TypeInput = 'text' | 'password'

export const TextFiled: FC<TextFiledProps> = memo(
  forwardRef<HTMLInputElement, TextFiledProps>((props, ref) => {
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
          nonSelect
          light
        >
          {title}
        </Span>
        {showPassword ? (
          <StyledShowPasswordWrapper onClick={toggleTypeHandler} tabIndex={1}>
            <StyledShowPasswordIcon />
          </StyledShowPasswordWrapper>
        ) : null}
        <label className={cls.label}>
          <StyledTextFiled
            ref={ref}
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
        </label>
      </div>
    )
  })
)
