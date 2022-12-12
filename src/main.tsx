import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/index.css'
import { ErrorBoundary } from './app/providers/ErrorBoundary/ErrorBoundary'
import { StoreProvider } from './app/providers/StoreProvider/StoreProvider'
import { AppRouter } from './app/providers/AppRouter/AppRouter'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </StoreProvider>
)
