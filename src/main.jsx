import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Challenge01 from './pages/Challenge-01'
import {BrowserRouter} from 'react-router-dom';
import RoutesComponent from './routes';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <RoutesComponent />
    </StrictMode>
  </BrowserRouter>
)
