import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@/shared/ui/Button/Button'

const StyledWrapper = styled.div`
  width: 100px;
  margin-right: 40px;
`

// Test ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false)

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  const newError = () => {
    setError(true)
  }

  return (
    <StyledWrapper>
      <Button danger onClick={newError}>
        ERROR
      </Button>
    </StyledWrapper>
  )
}
