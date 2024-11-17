import { apiDevtool } from '@/api/config'
import type { IResourceForm } from '../interfaces'

export const getAllResource = async () => {
  const response = await apiDevtool.get('/resource')
  console.log(response)
}
  
export const createResource = async (form: IResourceForm) => {
  const response = await apiDevtool.post('/resource', form)
  console.log(response)
}

export const updateResource = async (id: number, form: IResourceForm) => {
  const response = await apiDevtool.patch(`/resource/${id}`, form)
  console.log(response)
}

export const deleteResource = async (id: number) => {
  return console.log(id)
  const response = await apiDevtool.delete(`/resource/${id}`)
  console.log(response)
}