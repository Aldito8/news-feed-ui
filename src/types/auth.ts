export interface AuthPayload {
    username: string
    password: string
}

export interface AuthContextType {
    isAuthenticated: boolean
    loading: boolean
    error: string
    login: (username: string, password: string) => Promise<void>
    register: (username: string, password: string) => Promise<void>
    logout: () => void
}
