import { Login } from '@/auth/pages/Login'
import { Navigate } from 'react-router-dom'

export const PublicRoute = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/*',
    element: <Navigate to='/login' />
  }
]