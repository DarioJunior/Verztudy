import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes'

import { GlobalStyle } from './styles/global'

GlobalStyle()
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <AppRouter />
  // </React.StrictMode>
)
