import { Fragment, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { Span } from '@/shared/ui/Span/Span'
import { Flex } from '@/shared/ui/Flex/Flex'
import cls from './MyListBox.module.css'
import { ReactComponent as ArrowDown } from '@/shared/assets/icons/ArrowDown.svg'
import { cn } from '@/shared/lib/cn/cn'

const options = [
  { id: 1, name: 'Text', unavailable: false },
  { id: 2, name: 'Picture', unavailable: false },
  { id: 3, name: 'Video', unavailable: false }
]
export const MyListBox = () => {
  const [selected, setSelected] = useState(options[0])

  return (
    <Flex flexDirection={'column'}>
      <Span light marginBottom={'8px'}>
        Choose a question format
      </Span>
      <Listbox
        className={cls.listBox}
        as={'div'}
        by={'id'}
        value={selected}
        onChange={setSelected}
      >
        <Listbox.Button className={cls.button}>
          {selected.name}
          <ArrowDown />
        </Listbox.Button>
        <Listbox.Options className={cls.options}>
          {options.map(option => (
            <Listbox.Option
              key={option.id}
              value={option}
              disabled={option.unavailable}
              className={cls.default}
            >
              {({ active }) => (
                <>
                  <span className={cn(cls.default, { [cls.active]: active })}>
                    {option.name}
                  </span>
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </Flex>
  )
}
