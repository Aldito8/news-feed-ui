import { useState } from "react"

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
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