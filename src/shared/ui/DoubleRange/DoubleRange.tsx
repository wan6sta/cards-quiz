import Range from 'rc-slider'
import './index.css'
import { useState } from 'react'
import cls from './DoubleRange.module.css'
import { Span } from '../Span/Span'

type Value = number | number[]

export const DoubleRange = () => {
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

  const onSliderChange = (value: Value) => {
    setValue(value)
  }

  console.log(value)

  return (
    <div className={cls.wrapperWrapper}>
      <Span title>Number of cards</Span>
      <div className={cls.wrapper}>
        <div className={cls.numWrapper}>{value.at(0)}</div>
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
        <div className={cls.numWrapper}>{value.at(1)}</div>
      </div>
    </div>
  )
}
