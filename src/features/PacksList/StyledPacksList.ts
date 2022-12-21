import styled, { css } from 'styled-components'

interface StyledTrProps {
  body?: boolean
}

export const StyledPacksList = styled.span`
  width: 100%;
  ${props => props && css``}
`

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  box-shadow: 2px 1px 8px 0px rgba(34, 60, 80, 0.2);
`

export const StyledThead = styled.thead`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 16px 54px 16px 36px;
  background: #efefef;
`

export const StyledTh = styled.th`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  user-select: none;
  height: 48px;
  flex-basis: 19%;
  flex-grow: 1;
`

export const StyledTitleWrapper = styled.div`
  display: flex;
  column-gap: 5px;
  align-items: center;
  cursor: pointer;
  height: 48px;
  transition: 0.1s ease-in;

  &:hover {
    color: #366eff;
  }
`

export const StyledTbody = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 51.7vh;
  overflow-y: scroll;
`

export const StyledHeadTr = styled.tr<StyledTrProps>`
  display: flex;
  align-items: center;
  height: 48px;
  justify-content: space-around;
  flex: 1;
`

export const StyledTr = styled.tr<StyledTrProps>`
  display: flex;
  align-items: center;
  height: 48px;
  justify-content: space-around;
  padding: 0 36px;
  border-bottom: 1px solid #d9d9d9;
  font-size: 16px;
`

export const StyledTd = styled.td`
  flex-basis: 19%;
  flex-grow: 1;
`

export const StyledTrDownWrapper = styled.span`
  display: flex;
  align-items: center;
  column-gap: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`

export const StyledIconsWrapper = styled.span`
  display: flex;
  column-gap: 12px;

  & > svg {
    cursor: pointer;
    height: 18px;
    width: 18px;
    transition: 0.1s ease-in;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const StyledTextWrapper = styled.span`
  display: flex;
  align-items: center;
  width: 147px;
  height: 48px;
`

export const StyledSpan = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const StyledErrorTr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const StyledErrorTd = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
`