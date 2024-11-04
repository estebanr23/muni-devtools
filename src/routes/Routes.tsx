import { useRoutes } from 'react-router-dom'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

enum Status {
    CHECKING = 'CHECKING',
    AUTHENTICATED = 'AUTHENTICATED',
    NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'
}

export const Routes = () => {
  const isAuthenticated = Status.AUTHENTICATED

  const routes = useRoutes(Status.AUTHENTICATED !== isAuthenticated ? PrivateRoute : PublicRoute)

  return (
    <>
      {/* { isAuthenticated === Status.CHECKING ? <div>Loading...</div> : routes } */}
      { routes }
    </>
  )
}