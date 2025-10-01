import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CommunityPage from './pages/CommunityPage.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App /> 
      {/* <CommunityPage/> */}
    </ThemeProvider>
  </StrictMode>,
)