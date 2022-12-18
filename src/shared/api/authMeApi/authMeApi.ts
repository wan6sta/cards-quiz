import axios, { AxiosResponse } from 'axios'
import { BASE_URL } from '../../assets/constants/BASE_URL'
import { UserLoggedInResponse } from '../../../features/Login/models/loginModels'

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
})

export const authMeApi = {
  async getAuthMe() {
    return await axiosInstance.post<
      '',
      AxiosResponse<UserLoggedInResponse>,
      {}
    >('/auth/me', {})
  }
}
