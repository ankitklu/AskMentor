import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App2 from './components/App2.jsx'
import Home from './components/CRUD/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <App2/> */}
    {/* <Home/> */}
  </StrictMode>,
)
