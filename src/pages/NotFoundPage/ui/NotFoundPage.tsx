import { Link } from 'react-router-dom'
import {
  StyledImgWrapper,
  StyledNotFoundPage,
  StyledTextWrapper,
  StyledTitleWrapper,
  StyledWrapper
} from './StyledNotFoundPage'
import notFoundImg from '@/shared/assets/icons/404.jpg'
import { Title } from '@/shared/ui/Title/Title'
import { Button } from '@/shared/ui/Button/Button'
import { AppPaths } from '@/app/providers/AppRouter'

export const NotFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <StyledWrapper>
        <StyledTextWrapper>
          <StyledTitleWrapper>
            <Title fontSize='50px'>Ooops!</Title>
            <Title fontSize='16px'>Sorry! Page not found!</Title>
          </StyledTitleWrapper>
          <Link to={AppPaths.app}>
            <Button primary>Back to home page</Button>
          </Link>
        </StyledTextWrapper>
        <StyledImgWrapper>
          <img src={notFoundImg} alt='404' />
        </StyledImgWrapper>
      </StyledWrapper>
    </StyledNotFoundPage>
  )
}
