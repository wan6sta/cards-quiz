import styled from 'styled-components'
import { Button } from '../../shared/ui/Button/Button'

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
  row-gap: 50px;
  width: 400px;
`

export const ErrorPage = () => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <StyledErrorPage>
      <StyledWrapper>
        <h1>Произошла непредвиденная ошибка!</h1>
        <Button width='300px' onClick={reloadPage}>
          Обновить приложение
        </Button>
      </StyledWrapper>
    </StyledErrorPage>
  )
}
