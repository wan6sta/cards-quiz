import { TextField } from '../../shared/ui/TextField/TextField'
import { useLocation, useSearchParams } from 'react-router-dom'
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState
} from 'react'
import { debounce } from 'lodash-es'
import { useUlrParams } from '../../features/PacksList/hooks/useUrlParams'
import { AppFilters } from '../../features/PacksList/models/FiltersModel'

export const DeboucedTableInput = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const [inputValue, setInputValue] = useState('')
  const inputUrlValue = searchParams.get(AppFilters.search)
  useLayoutEffect(() => {
    if (inputUrlValue === null) {
      setInputValue('')
      return
    }
    setInputValue(searchParams.get(AppFilters.search) as string)
  }, [])
  const urlParams = useUlrParams()
  const debounced = useCallback(
    debounce((inputValue: string) => {
      inputValue.length > 1
        ? setSearchParams({ ...urlParams, [AppFilters.search]: inputValue })
        : searchParams.delete(AppFilters.search) //fix
    }, 250),
    [setSearchParams, inputValue]
  )

  const ree = useLocation()
  console.log(ree)
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
