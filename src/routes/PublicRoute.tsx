import { Navigate } from 'react-router-dom'

export const PublicRoute = [
  {
    path: '/login',
    element: <div>Login</div>
  },
  {
    path: '/*',
    element: <Navigate to='/login' />
  }
]