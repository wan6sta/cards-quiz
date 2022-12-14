export interface userloggedInResponse {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: Date
  updated: Date
  __v: number
  token: string
  tokenDeathTime: number
  avatar: string
}

export interface ErrorResponse {
  data: { error: string, email: string, in: string }
  status: number
}
