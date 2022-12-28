import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { Span } from '@/shared/ui/Span/Span'
import { Flex } from '@/shared/ui/Flex/Flex'

const options = [
  { id: 1, name: 'Text', unavailable: false },
  { id: 2, name: 'Picture', unavailable: false },
  { id: 3, name: 'Video', unavailable: false }
]
export const MyListBox = () => {
  const [selectedPerson, setSelectedPerson] = useState(options[0])

  return (
    <label>
      <Flex flexDirection={'column'}>
        <Span light marginBottom={'8px'}>
          Choose a question format
        </Span>
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
      </Flex>
    </label>
  )
}
