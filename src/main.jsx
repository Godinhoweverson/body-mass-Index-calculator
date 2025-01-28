import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Header/header.css'
import './Calculator/calculator.css'
import './Imperial/imperial.css'
import './Result/result.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
