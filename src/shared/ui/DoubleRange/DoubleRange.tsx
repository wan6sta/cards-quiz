import Range from 'rc-slider'
import './index.css'
import { useCallback, useEffect, useState } from 'react'
import cls from './DoubleRange.module.css'
import { Span } from '../Span/Span'
import { debounce, isArray } from 'lodash-es'
import { useAppSelector } from '../../../app/providers/StoreProvider/hooks/useAppSelector'
import { useSearchParams } from 'react-router-dom'
import { useUlrParams } from '../../../features/PacksList/hooks/useUrlParams'
import { AppFilters } from '../../../features/PacksList/models/FiltersModel'

type Value = number | number[]
export const DoubleRange = () => {
  const urlParams = useUlrParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const [value, setValue] = useState<Value>([0, 100])

  const minCount = useAppSelector(state => state.packs.cardsMinCount)
  const maxCount = useAppSelector(state => state.packs.cardsMaxCount)
  const urlMinValue = searchParams.get(AppFilters.min)
  const urlMaxValue = searchParams.get(AppFilters.max)

  useEffect(() => {
    if (searchParams.get(AppFilters.min) && searchParams.get(AppFilters.max)) {
      setMax(Number(urlMaxValue))
      setValue([Number(urlMinValue), Number(urlMaxValue)])
    } else {
      setMin(minCount)
      setMax(maxCount)
      setValue([minCount, maxCount])
    }
  }, [])

  const sliderDebounced = useCallback(
    debounce((value: Value) => {
      if (Array.isArray(value)) {
        setSearchParams({
          ...urlParams,
          [AppFilters.min]: String(value[0]),
          [AppFilters.max]: String(value[1])
        })
      }
    }, 250),
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
