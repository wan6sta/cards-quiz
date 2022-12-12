import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import './App/styles/index.css'
import { ErrorBoundary } from './app/providers/ErrorBoundary/ErrorBoundary'
import { StoreProvider } from './app/providers/StoreProvider/StoreProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StoreProvider>
)
