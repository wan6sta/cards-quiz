import React from 'react'
import ReactDOM from 'react-dom/client'
import { StoreProvider } from '@/app/providers/StoreProvider/StoreProvider'
import { AppLoader } from '@/app/providers/AppLoader/AppLoader'
import { AppRouter } from '@/app/providers/AppRouter/AppRouter'
import '@/app/styles/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider>
    <AppLoader>
      <AppRouter />
    </AppLoader>
  </StoreProvider>
)
