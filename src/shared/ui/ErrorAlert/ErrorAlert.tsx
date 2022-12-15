import { toast, ToastContainer } from 'react-toastify'
import { FC } from 'react'

interface ErrorProps {
  errorMessage?: string
}

export const ErrorAlert: FC<ErrorProps> = props => {
  const { errorMessage } = props

  errorMessage &&
    toast.error(`${errorMessage}`, {
      position: 'bottom-left',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light'
    })

  return (
    <ToastContainer
      position='bottom-left'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      limit={1}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
  )
}
