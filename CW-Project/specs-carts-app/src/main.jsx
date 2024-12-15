import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from '@/components/ui/provider'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { MyProvider } from './appComponents/contextApi/context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyProvider>
      <Router>
        <Provider>
          <App />
        </Provider>
      </Router>
    </MyProvider>
  </StrictMode>,
)
