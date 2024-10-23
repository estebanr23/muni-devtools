import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes/Routes'
import { ThemeProvider } from './components/theme-provider'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
