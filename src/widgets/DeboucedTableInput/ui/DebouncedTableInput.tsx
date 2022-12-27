import { useSearchParams } from 'react-router-dom'
import { ChangeEvent, FC, useCallback, useLayoutEffect, useState } from 'react'
import { debounce, identity, pickBy } from 'lodash-es'
import { TextField } from '@/shared/ui/TextField/TextField'
import { AppFilters } from '@/features/PacksList/models/FiltersModel'
import { useUlrParams } from '@/features/PacksList/hooks/useUrlParams'

interface Props {
  title: string
}

export const DebouncedTableInput: FC<Props> = props => {
  const { title } = props
  const urlParams = useUlrParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const [inputValue, setInputValue] = useState('')
  const inputUrlValue = searchParams.get(AppFilters.search)

  useLayoutEffect(() => {
    if (inputUrlValue) {
      setInputValue(inputUrlValue)
    } else {
      setInputValue('')
    }
  }, [inputUrlValue])

  const removeQueryParams = () => {
    if (inputUrlValue) {
      searchParams.delete(AppFilters.search)
      setSearchParams(searchParams)
    }
  }

  const debounced = useCallback(
    debounce((inputValue: string) => {
      inputValue.length > 0
        ? setSearchParams(
            pickBy(
              {
                ...urlParams,
                [AppFilters.search]: inputValue,
                [AppFilters.page]: ''
              },
              identity
            )
          )
        : removeQueryParams()
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
      title={title}
      textFieldMode='outlined'
    />
  )
}
