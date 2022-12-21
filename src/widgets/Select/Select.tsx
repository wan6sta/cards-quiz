import { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import cls from './Select.module.css'
import { ReactComponent as ArrowDown } from '../../shared/assets/icons/ArrowDown.svg'
import { cn } from '../../shared/lib/cn/cn'
import { useSearchParams } from 'react-router-dom'
import { AppFilters } from '../../features/PacksList/models/FiltersModel'
import { useUlrParams } from '../../features/PacksList/hooks/useUrlParams'
import { identity, pickBy } from 'lodash-es'

const cardsCount = [
  { id: 1, name: '10', unavailable: false },
  { id: 2, name: '15', unavailable: false },
  { id: 3, name: '20', unavailable: false },
  { id: 4, name: '25', unavailable: false }
]

export const Select = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlSelectedValue = searchParams.get(AppFilters.perPage)
  const [selectedPerson, setSelectedPerson] = useState(cardsCount[0])
  const urlParams = useUlrParams()

  useEffect(() => {
    if (urlSelectedValue) {
      const el = cardsCount.find(
        (el, index, arr) => el.name === urlSelectedValue
      )
      setSelectedPerson(el ? el : cardsCount[0])
    }
  }, [urlSelectedValue])

  const changeCountPageHandler = (str: string) => {
    setSearchParams(
      pickBy(
        {
          ...urlParams,
          [AppFilters.perPage]: str,
          [AppFilters.page]: ''
        },
        identity
      )
    )
  }

  return (
    <div className={cls.select}>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className={cls.button}>
          {selectedPerson?.name}
          <ArrowDown />
        </Listbox.Button>
        <Listbox.Options className={cls.list}>
          {cardsCount.map(person => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
              className={cls.family}
            >
              {({ active, selected }) => (
                <span
                  onClick={() => changeCountPageHandler(person.name)}
                  className={cn(cls.li, { [cls.active]: active })}
                >
                  {person.name}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
