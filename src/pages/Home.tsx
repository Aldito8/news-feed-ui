import { api } from "@/utils/axios"
import { useEffect, useState } from "react"

interface FeedItem {
    id: number
    user_id: number
    content: string
    created_at: string
}

export default function HomePage() {
    const [data, setData] = useState<FeedItem[]>([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [loading, setLoading] = useState(false)
    async function fecthData() {
        const res = await api.get(`/api/feed?page=${page}&limit=${limit}`)
        setData(res.data.data)
    }
    useEffect(() => {
        setTimeout(() => (
            setLoading(true)
        ), 10000)
        fecthData()
        setLoading(false)
    }, [page, limit])

    console.log(data)
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Feed</h1>

            {loading ? (
                <p className="text-center text-gray-500">Loading...</p>
            ) : data.length === 0 ? (
                <p className="text-center text-gray-500">Belum ada postingan.</p>
            ) : (
                <div className="space-y-4">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-gray-600">
                                    User ID: {item.user_id}
                                </span>
                                <span className="text-xs text-gray-400">
                                    {new Date(item.created_at).toLocaleString()}
                                </span>
                            </div>
                            <p className="text-gray-800">{item.content}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}