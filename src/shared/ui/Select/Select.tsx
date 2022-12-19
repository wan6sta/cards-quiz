import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import cls from './Select.module.css'
import { ReactComponent as ArrowDown } from '../../assets/icons/ArrowDown.svg'
import { cn } from '../../lib/cn/cn'

const people = [
  { id: 1, name: '0', unavailable: false },
  { id: 2, name: '1', unavailable: false },
  { id: 3, name: '2', unavailable: false },
  { id: 4, name: '3', unavailable: false },
  { id: 5, name: '4', unavailable: false }
]

export const Select = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <div className={cls.select}>
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className={cls.button}>
          {selectedPerson.name}
          <ArrowDown />
        </Listbox.Button>
        <Listbox.Options className={cls.list}>
          {people.map(person => (
            <Listbox.Option
              key={person.id}
              value={person}
              disabled={person.unavailable}
              className={cls.family}
            >
              {({ active, selected }) => (
                <span className={cn(cls.li, { [cls.active]: active })}>
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
