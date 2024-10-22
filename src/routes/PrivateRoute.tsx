import { Navigate } from 'react-router-dom'
import { Layout } from '@/layout/Layout'
import { Blog, Error404, Home } from '@/app/pages'

export const PrivateRoute = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/home' />
      },

      {
        path: '/home',
        element: <Home />
      },

      {
        path: '/blog',
        element: <Blog />
      },

      {
        path: '/*',
        element: <Error404 />
      }
    ]
  }
]