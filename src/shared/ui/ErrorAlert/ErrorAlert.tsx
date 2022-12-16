import { toast, ToastContainer } from 'react-toastify'
import { FC, useMemo } from 'react'

interface ErrorProps {
  errorMessage?: string
}

export const ErrorAlert: FC<ErrorProps> = props => {
  const { errorMessage } = props

  useMemo(() => {
    errorMessage &&
      toast.error(`${errorMessage}`, {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
  }, [errorMessage])

  return (
    <ToastContainer
      position='top-right'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      limit={1}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme='colored'
    />
  )
}
