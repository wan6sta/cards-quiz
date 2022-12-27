import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from '@/app/providers/StoreProvider/config/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
