import { apiDevtool } from '@/api/config'
import { AuthForm, User } from '../interfaces/auth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Status } from '../constants'

const USERNAME = {username: 'Prueba', name:'Name de Prueba'} 

export const useAuth = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState<Status>(Status.CHECKING)

  // Manejar el login del usuario
  const loginUser = async (form: AuthForm) => {
    setIsAuthenticated(Status.CHECKING)

    try {
      console.log(form)
      const { data } = await apiDevtool.post('/auth/login', form)
      // const { user, access_token } = data

      // Guardar el token en localStorage
      localStorage.setItem('token', data.access_token)
      apiDevtool.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`

      setUser(data?.user || USERNAME )
      setIsAuthenticated(Status.AUTHENTICATED)
      navigate('/')
    } catch (error) {
      console.error('Error logging in:', error)
      logoutUser()
    }
  }

  // Verificar si el usuario tiene un token válido
  const checkToken = async () => {
    const token = localStorage.getItem('token')
    if (!token) return setIsAuthenticated(Status.NOT_AUTHENTICATED)

    setIsAuthenticated(Status.CHECKING)
    
    try {
      const { data } = await apiDevtool.post('/auth/refresh', {token})

      // Guardar el token en localStorage
      localStorage.setItem('token', data.access_token)
      apiDevtool.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`

      setUser(data?.user || USERNAME)
      setIsAuthenticated(Status.AUTHENTICATED)
    } catch (error) {
      console.error('Error validating token:', error)
      logoutUser()
    }
  }

  // Cerrar sesión del usuario
  const logoutUser = () => {
    localStorage.removeItem('token')
    setUser(null)
    setIsAuthenticated(Status.NOT_AUTHENTICATED)
    navigate('/')
  }

  return {
    user,
    isAuthenticated,
    loginUser,
    checkToken,
    logoutUser
  }
}
