import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/utils/axios"
import { useState } from "react"

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const { data } = await api.post("/api/register", { username, password })
            console.log("Register success:", data)
        } catch (err: any) {
            setError(err.response.data.error)
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

                    {error && <p>{error}</p>}

                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                        Register
                    </Button>
                </form>

                <p className="text-sm text-gray-500 text-center mt-4">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    )
}