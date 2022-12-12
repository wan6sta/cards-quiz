import { Component, ErrorInfo, ReactNode } from 'react'
import { ErrorPage } from '../../../pages/ErrorPage/ErrorPage'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<
ErrorBoundaryProps,
ErrorBoundaryState
> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error) {
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return <ErrorPage />
    }

    return children
  }
}
