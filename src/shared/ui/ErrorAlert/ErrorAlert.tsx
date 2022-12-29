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
        position: 'top-center',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'light'
      })
  }, [errorMessage])

  return (
    <ToastContainer
      position='top-center'
      autoClose={1500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      limit={1}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme='light'
    />
  )
}
