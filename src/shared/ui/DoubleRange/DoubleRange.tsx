import Range from 'rc-slider'
import './index.css'
import { useState } from 'react'
import cls from './DoubleRange.module.css'
import { Span } from '../Span/Span'
import { isArray } from 'lodash-es'
import { useAppSelector } from '../../../app/providers/StoreProvider/hooks/useAppSelector'
import { useSearchParams } from 'react-router-dom'
import { useUlrParams } from '../../../features/PacksList/hooks/useUrlParams'

type Value = number[]

export const DoubleRange = () => {
  const minCount = useAppSelector(state => state.packs.cardsMinCount)
  const mamCount = useAppSelector(state => state.packs.cardsMaxCount)

  const [min, setMin] = useState(0)
  const [max, setMax] = useState(100)
  const [value, setValue] = useState<Value>([0, 100])

  // const minDistance = Math.ceil((max / 100) * 10)
  //
  // const onSliderChange = (value: Value) => {
  //   const distance = Math.ceil(value.at(1) - value.at(0))
  //
  //   if (distance > minDistance) {
  //     setValue(value)
  //   }
  // }
  const urlParams = useUlrParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const onSliderChange = (value: Value) => {
    setValue(value)
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
