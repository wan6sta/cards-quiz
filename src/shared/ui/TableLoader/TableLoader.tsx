import { FC } from 'react'
import { StyledTableLoader } from './StyledTableLoader'
import { PulseLoader } from 'react-spinners'

export const TableLoader: FC = () => {
  return (
    <StyledTableLoader>
      <PulseLoader color={'#366eff'} />
    </StyledTableLoader>
  )
}
