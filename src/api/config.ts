import axios from 'axios'

const apiDevtool = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
})

// Interceptor de respuesta para manejar el token de respuesta
apiDevtool.interceptors.request.use(
  (config) => {
    // Si la respuesta (config) es exitosa, agregamos el token
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  },
  (error) => {
    console.log('Request Error:', error)
    return Promise.reject(error)
  }
)

// apiJuzgado.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
export {apiDevtool}