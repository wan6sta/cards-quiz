import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const options = [
  { id: 1, name: 'Text', unavailable: false },
  { id: 2, name: 'Picture', unavailable: false },
  { id: 3, name: 'Video', unavailable: false }
]
export const MyListBox = () => {
  const [selectedPerson, setSelectedPerson] = useState(options[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button>{selectedPerson.name}</Listbox.Button>
      <Listbox.Options>
        {options.map(option => (
          <Listbox.Option
            key={option.id}
            value={option}
            disabled={option.unavailable}
          >
            {option.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}
