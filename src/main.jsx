import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './router/Router.jsx'
import { Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider.jsx'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <Toaster />
      <RouterProvider router={router} />
      </QueryClientProvider>
     </AuthProvider>
  </React.StrictMode>,
)
