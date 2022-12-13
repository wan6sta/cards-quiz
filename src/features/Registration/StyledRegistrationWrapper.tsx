import styled, { css } from 'styled-components'

interface StyledRegistrationProps {
  flexDirection?: string
}

export const StyledRegistrationWrapper = styled.div<StyledRegistrationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : 'row'};
  width: 100vw;
  min-height: 100vh;
  ${props => props && css``}
`
