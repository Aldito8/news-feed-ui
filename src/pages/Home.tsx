import { formatDistanceToNow } from "date-fns"
import { api } from "@/utils/axios"
import { useEffect, useState } from "react"
import { Textarea } from "@/components/ui/textarea"

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

    async function fecthData() {
        const res = await api.get(`/api/feed?page=${page}&limit=${limit}`)
        setData(res.data.data)
    }
    useEffect(() => {
        fecthData()
    }, [page, limit])

    return (
        <div className="flex">
            <div className="w-full flex-col justify-center p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Feed</h1>
                <div className="space-y-4">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span>id: {item.id}</span>
                                <span className="text-sm text-gray-600">
                                    User ID: {item.user_id}
                                </span>
                                <span className="text-xs text-gray-400">
                                    {formatDistanceToNow(new Date(item.created_at), { addSuffix: true })}
                                </span>
                            </div>
                            <p className="text-gray-800 wrap-break-word">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}