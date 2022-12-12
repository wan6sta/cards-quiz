import styled, { css } from 'styled-components'

interface StyledAppLinkProps {
  primary?: boolean
  secondary?: boolean
  justifyContent?: string
}

export const StyledAppLink = styled.div<StyledAppLinkProps>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  
  & > a {
    color: inherit;

    ${props => props.primary && css`
      text-decoration-line: underline;
      color: #366EFF;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.01em;
    `}

    ${props => props.secondary && css`
      text-decoration: none;
      color: #000;
      font-weight: 500;
      font-size: 14px;
      line-height: 22px;
    `}
  }
`
