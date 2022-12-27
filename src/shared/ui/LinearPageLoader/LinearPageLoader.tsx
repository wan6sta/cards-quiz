import { BarLoader } from 'react-spinners'
import { Portal } from '@/shared/ui/Portal/Portal'
import { StyledLinearPageLoader } from './StyledLinearPageLoader'

export const LinearPageLoader = () => {
  return (
    <Portal element={document.getElementById('root')}>
      <StyledLinearPageLoader>
        <BarLoader height='4px' width='100%' color='#1556ff' />
      </StyledLinearPageLoader>
    </Portal>
  )
}
