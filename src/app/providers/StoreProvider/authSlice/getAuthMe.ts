import { createAsyncThunk } from '@reduxjs/toolkit'
import { authMeApi } from '../../../../shared/api/authMeApi/authMeApi'
import { setError, setIsLoading, setUserData } from './authSlice'

export const getAuthMe = createAsyncThunk(
  'auth/getAuthMe',
  async (arg, thunkAPI) => {
    try {
      thunkAPI.dispatch(setIsLoading(true))
      const response = await authMeApi.getAuthMe()
      thunkAPI.dispatch(setUserData(response.data))
      thunkAPI.dispatch(setIsLoading(false))
    } catch (e: Error) {
      thunkAPI.dispatch(setError(e.message))
    }
  }
)
