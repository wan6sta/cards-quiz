import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '../../app/providers/StoreProvider/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
