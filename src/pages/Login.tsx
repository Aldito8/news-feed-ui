import { useState } from "react"
import { api } from "@/utils/axios"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function AuthPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await api.post("/api/login", { username, password })
            setError("")
            navigate("/home")
        } catch (err) {
            alert(`login failed: ${err}`)
        }
    }

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await api.post("/api/register", { username, password })
            setError("")
            alert("Success Register Account, please login")
        } catch (err) {
            console.log("Register failed: ", err)
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
                    Ganapatih Feed
                </h1>

                <form
                    className="flex flex-col space-y-4"
                >
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="focus-visible:ring-blue-500 border-blue-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="focus-visible:ring-blue-500 border-blue-200"
                        />
                    </div>

                    <div className="flex w-full gap-3">
                        <Button
                            onClick={handleLogin}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                            Login
                        </Button>

                        <Button
                            onClick={handleRegister}
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        >
                            Register
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
