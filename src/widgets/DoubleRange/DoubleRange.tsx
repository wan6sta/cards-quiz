import Range from 'rc-slider'
import './index.css'
import { useCallback, useEffect, useState } from 'react'
import cls from './DoubleRange.module.css'
import { Span } from '../../shared/ui/Span/Span'
import { debounce, identity, isArray, pickBy } from 'lodash-es'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { useSearchParams } from 'react-router-dom'
import { useUlrParams } from '../../features/PacksList/hooks/useUrlParams'
import { AppFilters } from '../../features/PacksList/models/FiltersModel'

type Value = number | number[]
export const DoubleRange = () => {
  const urlParams = useUlrParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const minCount = useAppSelector(state => state.packs.cardsMinCount)
  const maxCount = useAppSelector(state => state.packs.cardsMaxCount)
  const [min, setMin] = useState(minCount)
  const [max, setMax] = useState(maxCount)

  const [value, setValue] = useState<Value>([minCount, maxCount])

  const urlMaxCountValue = Number(searchParams.get(AppFilters.max))
  const urlMinCountValue = Number(searchParams.get(AppFilters.min))

  useEffect(() => {
    if (urlMaxCountValue + urlMinCountValue !== 0) {
      setMin(minCount)
      setMax(maxCount)
      setValue([urlMinCountValue, urlMaxCountValue])
    } else {
      setValue([minCount, maxCount])
      setMin(minCount)
      setMax(maxCount)
    }
  }, [minCount, maxCount, urlMaxCountValue, urlMinCountValue])

  const sliderDebounced = useCallback(
    debounce((value: Value) => {
      if (Array.isArray(value)) {
        setSearchParams(
          pickBy(
            {
              ...urlParams,
              [AppFilters.min]: String(value[0]),
              [AppFilters.max]: String(value[1]),
              [AppFilters.page]: ''
            },
            identity
          )
        )
      }
    }, 350),
    [setSearchParams]
  )

  const onSliderChange = (value: Value) => {
    if (Array.isArray(value)) {
      setValue(value)
      sliderDebounced(value)
    }
  }

  return (
    <div className={cls.wrapperWrapper}>
      <Span spanTitle>Number of cards</Span>
      <div className={cls.wrapper}>
        <div className={cls.numWrapper}>
          {isArray(value) ? value.at(0) : null}
        </div>
        <div className={cls.rangeWrapper}>
          <Range
            className={cls.Range}
            range
            value={value}
            defaultValue={[min, max]}
            min={min}
            max={max}
            allowCross={false}
            onChange={onSliderChange}
          />
        </div>
        <div className={cls.numWrapper}>
          {isArray(value) ? value.at(1) : null}
        </div>
      </div>
    </div>
  )
}
