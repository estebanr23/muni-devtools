import { useRoutes } from 'react-router-dom'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'

enum Status {
    CHECKING = 'CHECKING',
    AUTHENTICATED = 'AUTHENTICATED',
    NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'
}

export const Routes = () => {
  // const isAuthenticated = Status.AUTHENTICATED
  const { isAuthenticated } = useContext(AuthContext)

  const routes = useRoutes(Status.AUTHENTICATED === isAuthenticated ? PrivateRoute : PublicRoute)

  return (
    <>
      { isAuthenticated === Status.CHECKING ? <div>Loading...</div> : routes }
      {/* { routes } */}
    </>
  )
}