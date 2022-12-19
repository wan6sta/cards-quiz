import { Menu } from '@headlessui/react'
import { FC, PropsWithChildren } from 'react'
import cls from './Dropdown.module.css'
import { Link } from 'react-router-dom'
import { AppPaths } from '../../../app/providers/AppRouter/routerConfig'
import { ReactComponent as UserIcon } from '../../assets/icons/MiniUser.svg'
import { ReactComponent as LogoutIcon } from '../../assets/icons/Logout.svg'
import { ReactComponent as EditIcon } from '../../assets/icons/EditIcon.svg'
import { ReactComponent as TrashIcon } from '../../assets/icons/Trash.svg'
import { ReactComponent as LearnIcon } from '../../assets/icons/TeacherIcon.svg'
import { ReactComponent as DotsIcon } from '../../assets/icons/Dots.svg'
import { cn } from '../../lib/cn/cn'

interface Props {
  nav?: boolean
}

// При использовании в навбаре использовать вместе с чилдрен!

export const Dropdown: FC<PropsWithChildren<Props>> = props => {
  const { children, nav } = props
  return (
    <div>
      <Menu as={'div'} className={cls.dropdownWrapper}>
        {nav && (
          <>
            <Menu.Button className={cls.dropdownBtn}>{children}</Menu.Button>
            <Menu.Items className={cls.dropdownItems}>
              <Menu.Item>
                {({ active }) => (
                  <Link to={AppPaths.profilePage}>
                    <li className={cn(cls.li, { [cls.active]: active })}>
                      <UserIcon className={cls.icon} />
                      Profile
                    </li>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <li className={cn(cls.li, { [cls.active]: active })}>
                    <LogoutIcon className={cls.icon} /> Log out
                  </li>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
        {!nav && (
          <>
            <Menu.Button className={cls.dropdownBtn}>
              <DotsIcon />
            </Menu.Button>
            <Menu.Items
              className={cn(cls.dropdownItems, { [cls.dropdownPacks]: !nav })}
            >
              <Menu.Item>
                {({ active }) => (
                  <li className={cn(cls.li, { [cls.active]: active })}>
                    <EditIcon className={cls.icon} />
                    Edit
                  </li>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <li className={cn(cls.li, { [cls.active]: active })}>
                    <TrashIcon className={cls.icon} /> Delete
                  </li>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <li className={cn(cls.li, { [cls.active]: active })}>
                    <LearnIcon className={cls.icon} /> Learn
                  </li>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  )
}
