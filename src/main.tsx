import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './style.ts'
import { RouterProvider } from 'react-router-dom'
import RouterConfig from './routes/RouterConfig.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={RouterConfig} />
  </React.StrictMode>,
)
