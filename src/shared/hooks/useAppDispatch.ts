import { AppDispatch } from '../../app/providers/StoreProvider/store'
import { useDispatch } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
