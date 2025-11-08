import { createContext, useState, useEffect, type ReactNode } from "react"
import { api } from "@/utils/axios"
import { login, register } from "@/services/auth"

interface AuthContextType {
    error: string,
    user: any
    loading: boolean
    isAuthenticated: boolean
    handleLogin: (username: string, password: string) => Promise<void>
    handleRegister: (username: string, password: string) => Promise<void>
}

export const AuthContext = createContext<AuthContextType>({
    error: "",
    user: null,
    loading: true,
    isAuthenticated: false,
    handleLogin: async () => { },
    handleRegister: async () => { },
})

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const handleLogin = async (username: string, password: string) => {
        try {
            setLoading(true)
            setError("")
            await login({ username, password })
            const res = await api.get("/api/me") // ambil data user dari cookie
            setUser(res.data.user)
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed")
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    const handleRegister = async (username: string, password: string) => {
        try {
            setLoading(true)
            setError("")
            await register({ username, password })
            alert("Registrasi berhasil! Silakan login.")
        } catch (err: any) {
            setError(err.response?.data?.error)
            console.log(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await api.get("/api/me")
                setUser(res.data.user)
            } catch {
                setUser(null)
            } finally {
                setLoading(false)
            }
        }
        checkAuth()
    }, [])

    return (
        <AuthContext.Provider
            value={{
                error,
                user,
                loading,
                isAuthenticated: !!user,
                handleLogin,
                handleRegister,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}
