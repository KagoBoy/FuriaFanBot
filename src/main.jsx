import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Challenge01 from './pages/Challenge-01'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Challenge01 />
  </StrictMode>,
)
