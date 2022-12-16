import { ChangeEvent, FC, KeyboardEvent, useState } from 'react'
import { StyledEditableSpan, StyledTextWrapper } from './StyledEditableSpan'
import { Title } from '../../shared/ui/Title/Title'
import { ReactComponent as EditIcon } from '../../shared/assets/icons/EditIcon.svg'
import { TextField } from '../../shared/ui/TextField/TextField'
import { Flex } from '../../shared/ui/Flex/Flex'

interface EditableSpanProps {
  initialValue?: string
  title: string
  marginBottom?: string
  editNameCallback?: (str: string) => void
}

export const EditableSpan: FC<EditableSpanProps> = props => {
  const { editNameCallback, title, initialValue, ...restProps } = props
  const [value, setValue] = useState(initialValue)
  const [inputShow, setInputShow] = useState(false)
  const [error, setError] = useState('')

  const showHandler = () => {
    setInputShow(true)
  }

  const hideHandler = () => {
    if (!value) {
      setError(`${title} must contain characters`)
      return
    }

    if (value.length > 15) {
      setError('Maximum length 15 characters')
      return
    }

    editNameCallback && editNameCallback(value.trim())
    setInputShow(false)
  }

  const onEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      hideHandler()
    }
  }

  const inputValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    error?.length > 0 ? setError('') : null
    setValue(e.currentTarget.value)
  }

  return (
    <StyledEditableSpan {...restProps}>
      {inputShow ? (
        <Flex>
          <TextField
            onKeyDown={onEnterHandler}
            error={error}
            onChange={inputValueHandler}
            value={value}
            autoFocus
            onBlur={hideHandler}
            title={title}
            textFieldMode='nonOutlined'
            withSaveButton
          />
        </Flex>
      ) : (
        <StyledTextWrapper onClick={showHandler}>
          <Title fontSize='20px'>{value}</Title>
          <EditIcon />
        </StyledTextWrapper>
      )}
    </StyledEditableSpan>
  )
}
