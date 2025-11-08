import AuthInput from "./AuthInput"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AuthForm() {
    const { handleLogin, handleRegister, loading, error } = useAuth()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    return (
        <form className="flex flex-col space-y-4">
            <AuthInput id="username" label="Username" value={username} onChange={setUsername} />
            <AuthInput id="password" label="Password" type="password" value={password} onChange={setPassword} />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex w-full gap-3">
                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        handleLogin(username, password)
                        navigate("/")
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    disabled={loading}
                >
                    Login
                </Button>

                <Button
                    onClick={(e) => {
                        e.preventDefault()
                        handleRegister(username, password)
                    }}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    disabled={loading}
                >
                    Register
                </Button>
            </div>
        </form>
    )
}
