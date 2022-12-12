import styled from 'styled-components'
import { Button } from '../../shared/ui/Button/Button'
import { Title } from '../../shared/ui/Title/Title'

const StyledErrorPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f9f9fa;
`

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 200px;
  width: 400px;
`

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
