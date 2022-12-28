import { FC, Fragment } from 'react'
import { RadioGroup } from '@headlessui/react'
import { ReactComponent as CheckIcon } from '@/shared/assets/icons/CheckIcon.svg'
import { ReactComponent as NonCheckIcon } from '@/shared/assets/icons/NonCheckIcon.svg'
import { Option, OptionsWrapper } from './StyledLearnRadioGroup'

interface Props {
  optionsValue: Array<{ id: number; name: string }>
  radioValue: { id: number; name: string }
  setRadioValue: (value: { id: number; name: string }) => void
}

export const LearnRadioGroup: FC<Props> = props => {
  const { radioValue, setRadioValue, optionsValue } = props

  return (
    <RadioGroup value={radioValue} by={'id'} onChange={setRadioValue}>
      <RadioGroup.Label>Rate yourself:</RadioGroup.Label>
      {optionsValue.map(el => (
        /* Use the `active` state to conditionally style the active option. */
        /* Use the `checked` state to conditionally style the checked option. */
        <RadioGroup.Option key={el.id} value={el} as={Fragment}>
          {({ checked }) => (
            <OptionsWrapper>
              {checked ? <CheckIcon /> : <NonCheckIcon />}
              {<Option>{el.name}</Option>}
            </OptionsWrapper>
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  )
}
