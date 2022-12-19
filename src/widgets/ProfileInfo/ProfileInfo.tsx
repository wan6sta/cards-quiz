import { FC } from 'react'
import { ImgWrapper } from '../../shared/ui/ImgWrapper/ImgWrapper'
import GithubIcon from '../../shared/assets/icons/GithubIcon.png'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import cls from './PageInfo.module.css'
import { Dropdown } from '../../shared/ui/Dropdown/Dropdown'

export const ProfileInfo: FC = props => {
  const { userData } = useAppSelector(state => state.auth)

  return (
    <Dropdown nav>
      <div className={cls.wrapper}>
        {userData?.name}
        <ImgWrapper cursorPointer width={'36px'} height={'36px'}>
          <img src={GithubIcon} alt='Icon' />
        </ImgWrapper>
      </div>
    </Dropdown>
  )
}
