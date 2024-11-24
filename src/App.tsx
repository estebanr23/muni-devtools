import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/Routes'
import { ThemeProvider } from './components/theme-provider'
import { AuthProvider } from './context/auth/AuthProvider'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
