import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App/App'
import './App/styles/index.css'
import { ErrorBoundary } from './App/providers/ErrorBoundary/ErrorBoundary'
import { StoreProvider } from './App/providers/StoreProvider/StoreProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StoreProvider>
)
