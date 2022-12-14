export interface ErrorResponse {
  error: string
  email: string
  in: string
}

export interface FetchError {
  status: number
  data: ErrorResponse
}
