import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  KeyboardEvent,
  memo,
  useState
} from 'react'
import { Span } from '@/shared/ui/Span/Span'
import { Button } from '@/shared/ui/Button/Button'
import { cn } from '@/shared/lib/cn/cn'
import {
  StyledSearchIcon,
  StyledSearchIconWrapper,
  StyledShowPasswordIcon,
  StyledShowPasswordSlashIcon,
  StyledShowPasswordWrapper,
  StyledTextFiled
} from './StyledTextField'
import cls from './TextField.module.css'

interface TextFiledProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  showPassword?: boolean
  textFieldMode: 'outlined' | 'nonOutlined'
  withSaveButton?: boolean
  error?: string
  onEnter?: () => void
  margin?: string
}

type TypeInput = 'text' | 'password'

export const TextField = memo(
  forwardRef<HTMLInputElement, TextFiledProps>((props, ref) => {
    const {
      error,
      onEnter,
      withSaveButton,
      showPassword,
      title,
      textFieldMode,
      onChange,
      value,
      ...restProps
    } = props

    const [typeInput, setTypeInput] = useState<TypeInput>(
      showPassword ? 'password' : 'text'
    )

    const fieldMode = textFieldMode === 'nonOutlined'

    const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
    }

    const toggleTypeHandler = () => {
      setTypeInput(prev => (prev === 'text' ? 'password' : 'text'))
    }

    const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if ((e.key = 'Enter')) {
        onEnter && onEnter()
      }
    }

    return (
      <div className={cls.wrapperWrapper}>
        <div className={cls.wrapper}>
          <Span
            className={cn(cls.span, {
              [cls.show]: (value as string) && fieldMode
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
              {typeInput === 'password' ? (
                <StyledShowPasswordIcon />
              ) : (
                <StyledShowPasswordSlashIcon />
              )}
            </StyledShowPasswordWrapper>
          ) : null}
          <label className={cls.label}>
            <StyledTextFiled
              value={value}
              ref={ref}
              onKeyDown={onEnterHandler}
              error={!!error}
              withSaveButton={!!withSaveButton}
              type={typeInput}
              showPassword={!!showPassword}
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
      </div>
    )
  })
)
