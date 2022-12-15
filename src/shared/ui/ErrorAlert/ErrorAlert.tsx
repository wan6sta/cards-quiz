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
        position: 'bottom-left',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
  }, [errorMessage])

  return (
    <ToastContainer
      position='bottom-left'
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      limit={1}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      theme='light'
    />
  )
}
