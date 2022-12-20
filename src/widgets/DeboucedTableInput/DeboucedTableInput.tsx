import { TextField } from '../../shared/ui/TextField/TextField'
import { useSearchParams } from 'react-router-dom'
import { ChangeEvent, useCallback, useState } from 'react'
import { debounce } from 'lodash-es'

export const DeboucedTableInput = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [inputValue, setInputValue] = useState('')

  const debounced = useCallback(
    debounce((inputValue: string) => {
      inputValue.length > 1
        ? setSearchParams({ search: inputValue })
        : setSearchParams({})
    }, 250),
    [setSearchParams]
  )
  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
    debounced(e.currentTarget.value)
  }

  return (
    <TextField
      value={inputValue}
      onChange={handler}
      title={'Search'}
      textFieldMode='outlined'
    />
  )
}
