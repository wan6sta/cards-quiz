import React from 'react'
import { BoxCard } from '../../../shared/ui/BoxCard/BoxCard'
import { Title } from '../../../shared/ui/Title/Title'
import { Span } from '../../../shared/ui/Span/Span'
import { Button } from '../../../shared/ui/Button/Button'
import { useNavigate } from 'react-router-dom'
import { ImgWrapper } from '../../../shared/ui/ImgWrapper/ImgWrapper'
import { ReactComponent as SuccessIcon } from '../../../shared/assets/icons/successIcon.svg'
import { Flex } from '../../../shared/ui/Flex/Flex'
import { AppPaths } from '../../../app/providers/AppRouter/routerConfig'

export const RegistrationSuccessPage = () => {
  const navigate = useNavigate()
  const onClickHandler = () => {
    navigate(AppPaths.loginPage)
  }
  return (
    <Flex margin={'36px 0 0 0'} justifyContent='center'>
      <BoxCard>
        <Title>Congratulations!</Title>
        <ImgWrapper>
          <SuccessIcon />
        </ImgWrapper>
        <Span marginBottom='30px' bold>
          Account has been created
        </Span>
        <Button onClick={onClickHandler} type={'button'}>
          Sign in
        </Button>
      </BoxCard>
    </Flex>
  )
}
