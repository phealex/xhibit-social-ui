import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import client from './apollo/client.ts'
import App from './App.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    <Toaster />
  </React.StrictMode>,
)
