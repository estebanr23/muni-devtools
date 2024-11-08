import { useState } from 'react'
import { IResource } from '../interfaces'

const params = new URLSearchParams({
  fields: 'image_x, icon_type, locale',
  key: import.meta.env.VITE_LINK_PREVIEW_API_KEY
})


// const defaultResource: IResource = {
//   title: 'Docker Hub',
//   description: 'Docker Hub is a container registry built for developers and open source contributors to find, use, and share their container images and access verified content.',
//   image: 'https://www.docker.com/wp-content/uploads/2023/06/meta-image-what-is-docker-hub-1110x580.png',
//   url: 'https://www.docker.com/products/docker-hub/'
// }

export const useLinkPreview = () => {
  const [url, setUrl] = useState<string>('')
  const [resource, setResource] = useState<IResource | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async (url: string) => {
    if (!url) {
      resetInput()
      return
    }

    setIsLoading(true)
    setUrl(url)
    setError(null)
    params.append('q', url)
    
    try {
      const response = await fetch(`https://api.linkpreview.net?${params}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await response.json()

      if(data?.error === 425) {
        setErrorMessage('No se pudo obtener los datos del enlace.')
        return
      }
      setResource(data)

    } catch (error) {
      console.log(error)
      setErrorMessage('No se pudo obtener los datos del enlace.')

    } finally {
      setIsLoading(false)
    }
  }

  const resetInput = () => {
    setUrl('')
    setResource(null)
    setError(null)
  }

  const setErrorMessage = (message: string) => {
    setError(message)
    setResource(null)
  }

  return { 
    url,
    error,
    resource,
    isLoading,
    fetchData ,
    resetInput
  }
}
