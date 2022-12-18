import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from './app/providers/StoreProvider/StoreProvider'
import { AppRouter } from './app/providers/AppRouter/AppRouter'
import './app/styles/index.css'
import { AppLoader } from './app/providers/AppLoader/AppLoader'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <AppLoader>
      <AppRouter />
    </AppLoader>
  </StoreProvider>
)
