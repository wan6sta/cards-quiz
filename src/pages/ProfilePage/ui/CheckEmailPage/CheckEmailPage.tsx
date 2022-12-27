import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import EmailIcon from '@/shared/assets/icons/EmailIcon.png'
import { RESTORE_USER_EMAIL_KEY } from '@/shared/assets/constants/RESTORE_USER_EMAIL_KEY'
import { BoxCard } from '@/shared/ui/BoxCard/BoxCard'
import { Title } from '@/shared/ui/Title/Title'
import { ImgWrapper } from '@/shared/ui/ImgWrapper/ImgWrapper'
import { Span } from '@/shared/ui/Span/Span'
import { Button } from '@/shared/ui/Button/Button'
import { AppPaths } from '@/app/providers/AppRouter'
import { StyledCheckEmailPage } from './StyledCheckEmailPage'

export const CheckEmailPage: FC = props => {
  const { ...restProps } = props
  const email = sessionStorage.getItem(RESTORE_USER_EMAIL_KEY)
  return (
    <StyledCheckEmailPage {...restProps}>
      <BoxCard>
        <Title>Check Email</Title>
        <ImgWrapper width='108px' height='108px' borderRadius='50%'>
          <img src={EmailIcon} alt='Email' />
        </ImgWrapper>
        <Span marginBottom='41px' textCenter>
          We’ve sent an Email with instructions to <b>{email}</b>
        </Span>
        <Link style={{ width: '100%' }} to={AppPaths.loginPage}>
          <Button primary>Back to login</Button>
        </Link>
      </BoxCard>
    </StyledCheckEmailPage>
  )
}
