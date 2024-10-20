import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TanStackProvider from './plugins/TanStackProvider.tsx'
import { Blog } from '@/app/pages/Blog.tsx'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },

  {
    path: '/blog',
    element: <Blog />,
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanStackProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </TanStackProvider>
  </StrictMode>,
)
