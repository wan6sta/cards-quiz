import { FC } from 'react'
import { ImgWrapper } from '../../shared/ui/ImgWrapper/ImgWrapper'
import GithubIcon from '../../shared/assets/icons/GithubIcon.png'
import { useAppSelector } from '../../app/providers/StoreProvider/hooks/useAppSelector'
import { StyledButtonWrapper } from '../Navbar/StyledNavbar'
import cls from './PageInfo.module.css'
import { Link } from 'react-router-dom'
import { AppPaths } from '../../app/providers/AppRouter/routerConfig'

export const ProfileInfo: FC = props => {
  const { userData } = useAppSelector(state => state.auth)

  return (
    <Link to={AppPaths.profilePage}>
      <div className={cls.wrapper}>
        <StyledButtonWrapper>
          <span className={cls.span}>{userData?.name}</span>
        </StyledButtonWrapper>
        <ImgWrapper cursorPointer width={'36px'} height={'36px'}>
          <img src={GithubIcon} alt='Icon' />
        </ImgWrapper>
      </div>
    </Link>
  )
}
