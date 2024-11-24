export interface AuthForm {
    username: string
    password: string
}

export interface User {
    id: number
    username: string
    name: string
    password: string
}

export interface AuthResponse {
    access_token: string
    user: User
}