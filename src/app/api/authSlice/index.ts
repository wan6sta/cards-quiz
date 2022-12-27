export {
  useMeMutation,
  useDeleteMeMutation,
  authMeApiSlice
} from './api/authMeApiSlice'

export { setUserData, removeUserData, authSlice } from './slice/authSlice'

export { getIsAuth } from './selectors/getIsAuth'
export { getAuthId } from './selectors/getAuthId'
export { authUserData } from './selectors/authUserData'
