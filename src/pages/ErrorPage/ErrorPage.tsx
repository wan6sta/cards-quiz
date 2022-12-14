import { Button } from '../../shared/ui/Button/Button'
import { Title } from '../../shared/ui/Title/Title'
import { StyledErrorPage, StyledWrapper } from './StyledErrorPage'

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
