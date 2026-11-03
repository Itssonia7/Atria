import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Docs from './Docs.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {window.location.pathname.replace(/\\/+$/, '') === '/docs' ? <Docs /> : <App />}
  </React.StrictMode>,
)