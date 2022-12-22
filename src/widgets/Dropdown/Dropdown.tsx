import { Menu } from '@headlessui/react'
import { FC, PropsWithChildren } from 'react'
import cls from './Dropdown.module.css'
import { Link } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'
import { ReactComponent as UserIcon } from '../../shared/assets/icons/MiniUser.svg'
import { ReactComponent as LogoutIcon } from '../../shared/assets/icons/Logout.svg'
import { ReactComponent as EditIcon } from '../../shared/assets/icons/EditIcon.svg'
import { ReactComponent as TrashIcon } from '../../shared/assets/icons/Trash.svg'
import { ReactComponent as LearnIcon } from '../../shared/assets/icons/TeacherIcon.svg'
import { ReactComponent as DotsIcon } from '../../shared/assets/icons/Dots.svg'
import { cn } from '../../shared/lib/cn/cn'
import { useDeleteMeMutation } from '../../shared/api/authMeApiSlice'
import { ErrorAlert } from '../../shared/ui/ErrorAlert/ErrorAlert'
import { errorMessageHandler } from '../../shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '../../shared/models/ErrorModel'
import { LinearPageLoader } from '../../shared/ui/LinearPageLoader/LinearPageLoader'
import { Portal } from '../../shared/ui/Portal/Portal'

interface Props {
  nav?: boolean
}

// При использовании в навбаре использовать вместе с чилдрен!

export const Dropdown: FC<PropsWithChildren<Props>> = props => {
  const { children, nav } = props

  const [deleteAcc, { isLoading: deleteIsLoading, error: deleteMeError }] =
    useDeleteMeMutation()

  const logOutHandler = async () => {
    await deleteAcc({})
  }

  const properDeleteErrorMessage = errorMessageHandler(
    (deleteMeError as FetchError)?.data?.error
  )

  const isBundleLoading = deleteIsLoading

  return (
    <Menu
      as={'div'}
      className={cn(cls.dropdownWrapper, { [cls.dropdownCardWrapper]: !nav })}
    >
      {isBundleLoading ? <LinearPageLoader /> : null}
      {nav && (
        <>
          <Menu.Button className={cls.dropdownBtn}>{children}</Menu.Button>
          <Menu.Items className={cls.dropdownItems}>
            <div className={cls.tr}></div>
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
                <li
                  onClick={logOutHandler}
                  className={cn(cls.li, { [cls.active]: active })}
                >
                  <LogoutIcon className={cls.icon} /> Log out
                </li>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
      {!nav && (
        <>
          <Menu.Button
            className={cn(cls.dropdownBtn, { [cls.dropdownCardBtn]: !nav })}
          >
            <DotsIcon />
          </Menu.Button>
          <Menu.Items
            className={cn(cls.dropdownItems, { [cls.dropdownPacks]: !nav })}
          >
            <div className={cls.tr}></div>
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
      <ErrorAlert errorMessage={properDeleteErrorMessage} />
    </Menu>
  )
}
