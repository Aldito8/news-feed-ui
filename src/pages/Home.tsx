import { formatDistanceToNow } from "date-fns"
import { api } from "@/utils/axios"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

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
    const [hasMore, setHasMore] = useState(true)

    async function fetchData(reset = false) {
        try {
            setLoading(true)
            const res = await api.get(`/api/feed?page=${page}&limit=${limit}`)
            const newData = res.data.data

            if (reset) {
                setData(newData)
            } else {
                setData((prev) => [...prev, ...newData])
            }

            setHasMore(newData.length === limit)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [page])

    useEffect(() => {
        setPage(1)
        fetchData(true)
    }, [limit])

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-2xl p-4">
                <h1 className="text-2xl font-bold mb-4 text-center">Feed</h1>

                <div className="flex justify-end mb-4">
                    <select
                        value={limit}
                        onChange={(e) => setLimit(Number(e.target.value))}
                        className="border rounded-lg px-2 py-1 text-sm"
                    >
                        <option value={5}>5 / page</option>
                        <option value={10}>10 / page</option>
                        <option value={20}>20 / page</option>
                    </select>
                </div>

                <div className="space-y-4">
                    {data.length > 0 ? (
                        data.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white shadow-md rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-gray-600">
                                        User ID: {item.user_id}
                                    </span>
                                    <span className="text-xs text-gray-400">
                                        {formatDistanceToNow(new Date(item.created_at), { addSuffix: true })}
                                    </span>
                                </div>
                                <p className="text-gray-800 break-words">{item.content}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">
                            Looks like your feed is quiet. Follow more people to liven it up!
                        </p>
                    )}
                </div>

                {hasMore && (
                    <div className="flex justify-center mt-6">
                        <Button
                            onClick={() => setPage((prev) => prev + 1)}
                            disabled={loading}
                        >
                            {loading ? "Loading..." : "Load More"}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
