import { StyledErrorPage, StyledWrapper } from './StyledErrorPage'
import { Title } from '@/shared/ui/Title/Title'
import { Button } from '@/shared/ui/Button/Button'

export const ErrorPage = () => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <StyledErrorPage>
      <StyledWrapper>
        <Title>Something went wrong!</Title>
        <Button width='300px' onClick={reloadPage}>
          Reload the app
        </Button>
      </StyledWrapper>
    </StyledErrorPage>
  )
}
