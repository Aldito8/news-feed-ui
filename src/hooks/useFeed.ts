import { useEffect, useState } from "react"
import type { FeedItem } from "@/types/feed"
import { fetchFeed } from "@/services/feed"

export const useFeed = (limit = 10) => {
    const [data, setData] = useState<FeedItem[]>([])
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [loading, setLoading] = useState(false)

    const loadFeed = async (currentPage = 1) => {
        try {
            setLoading(true)
            const newData = await fetchFeed(currentPage, limit)
            setData((prev) => (currentPage === 1 ? newData : [...prev, ...newData]))
            setHasMore(newData.length === limit)
        } catch {
            setHasMore(false)
        } finally {
            setLoading(false)
        }
    }

    const fetchMore = async () => {
        const next = page + 1
        await loadFeed(next)
        setPage(next)
    }

    useEffect(() => {
        loadFeed(1)
    }, [])

    return { data, hasMore, loading, fetchMore }
}
