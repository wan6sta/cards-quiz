import { Menu } from '@headlessui/react'
import { FC, PropsWithChildren, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as UserIcon } from '@/shared/assets/icons/MiniUser.svg'
import { ReactComponent as LogoutIcon } from '@/shared/assets/icons/Logout.svg'
import { ReactComponent as EditIcon } from '@/shared/assets/icons/EditIcon.svg'
import { ReactComponent as TrashIcon } from '@/shared/assets/icons/Trash.svg'
import { ReactComponent as LearnIcon } from '@/shared/assets/icons/TeacherIcon.svg'
import { ReactComponent as DotsIcon } from '@/shared/assets/icons/Dots.svg'
import { useAppDispatch } from '@/app/providers/StoreProvider/hooks/useAppDispatch'
import { useDeleteMeMutation } from '@/shared/api/authMeApiSlice'
import {
  useDeleteCardPackMutation,
  useUpdateCardsPackMutation
} from '@/features/PacksList/api/packsApiSlice'
import { AppPaths } from '@/app/providers/AppRouter/routerConfig'
import { setPackName } from '@/features/CardList/slice/cardsSlice'
import { errorMessageHandler } from '@/shared/lib/errorMessageHandler/errorMessageHandler'
import { FetchError } from '@/shared/models/ErrorModel'
import { LinearPageLoader } from '@/shared/ui/LinearPageLoader/LinearPageLoader'
import { cn } from '@/shared/lib/cn/cn'
import { ErrorAlert } from '@/shared/ui/ErrorAlert/ErrorAlert'
import cls from './Dropdown.module.css'

interface Props {
  nav?: boolean
}

export const Dropdown: FC<PropsWithChildren<Props>> = props => {
  const { children, nav } = props
  const { packId } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [deleteAcc, { isLoading: deleteIsLoading, error: deleteMeError }] =
    useDeleteMeMutation()

  const [
    removePack,
    {
      isLoading: isDeletePackLoading,
      error: removePackError,
      isSuccess: isDeleteSuccess
    }
  ] = useDeleteCardPackMutation()

  const [
    updatePack,
    {
      isLoading: isUpdatePackLoading,
      error: updatePackError,
      isSuccess: isUpdateSuccess,
      data: updatedPackData
    }
  ] = useUpdateCardsPackMutation()

  useEffect(() => {
    if (isDeleteSuccess) {
      navigate(AppPaths.packsListPage)
    }
  }, [isDeleteSuccess])

  useEffect(() => {
    if (updatedPackData) {
      dispatch(setPackName(updatedPackData.name))
    }
  }, [isUpdateSuccess])

  const logOutHandler = async () => {
    if (deleteIsLoading) return
    await deleteAcc({})
  }

  const properDeleteErrorMessage = errorMessageHandler(
    (deleteMeError as FetchError)?.data?.error
  )

  const deletePackHandler = async () => {
    if (isDeletePackLoading) return
    await removePack(String(packId))
  }

  const editPackHandler = async () => {
    if (isUpdatePackLoading) return
    if (packId)
      await updatePack({ cardsPack: { name: 'edit packName', _id: packId } })
  }

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
          {isDeletePackLoading || isUpdatePackLoading ? (
            <LinearPageLoader />
          ) : null}
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
                <li
                  onClick={editPackHandler}
                  className={cn(cls.li, { [cls.active]: active })}
                >
                  <EditIcon className={cls.icon} />
                  Edit
                </li>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <li
                  onClick={deletePackHandler}
                  className={cn(cls.li, { [cls.active]: active })}
                >
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
