import axios from 'axios'

const apiDevtool = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`
})

// apiJuzgado.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
export {apiDevtool}