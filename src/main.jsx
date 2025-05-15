import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
// impo/rt { Practices } from './practices.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practices/> */}
  </StrictMode>,
)
