import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 5px;
  flex-grow: 1;
  width: 100%;
`

export const StyledIconsWrapperWrapper = styled.div`
  display: flex;
  justify-self: flex-end;
  column-gap: 10px;
`

export const StyledCardIconsWrapper = styled.div`
  display: flex;

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
