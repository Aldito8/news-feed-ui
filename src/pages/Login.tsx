import { useState } from "react"
import { api } from "@/utils/axios"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const { data } = await api.post("/api/login", { username, password })
            console.log("Login success:", data)
        } catch (err) {
            console.error("Login failed:", err)
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
                    Ganapatih Feed
                </h1>

                <form
                    onSubmit={handleSubmit}
                    method="post"
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

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                        Login
                    </Button>
                </form>

                <p className="text-sm text-gray-500 text-center mt-4">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Register here
                    </a>
                </p>
            </div>
        </div>
    )
}
