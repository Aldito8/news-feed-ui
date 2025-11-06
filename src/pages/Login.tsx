import { api } from "@/utils/axios"
import { useState } from "react"

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const data = await api.post("/api/login", {
            username,
            password
        })

        console.log(data)
        console.log(username, password)
    }
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} method="post"
                className="flex flex-col items-start bg-blue-200">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}