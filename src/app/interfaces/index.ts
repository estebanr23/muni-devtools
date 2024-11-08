export interface ICard {
    id: string
    title: string
    url: string
    description: string
    image: string
}

export interface IResourceForm {
    title: string
    url: string
    description: string
    image: string
    tags?: string
    category_id: number | null
}

export interface IResource {
    title: string
    description: string
    image: string
    url: string
    error?: string
}