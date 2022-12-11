import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App/App'
import './App/styles/index.css'
import { ErrorBoundary } from './app/providers/ErrorBoundary/ErrorBoundary'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
