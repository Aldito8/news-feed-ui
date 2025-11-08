import { api } from "@/utils/axios"
import type { FeedItem } from "@/types/feed"

export const fetchFeed = async (page: number, limit: number): Promise<FeedItem[]> => {
    const res = await api.get(`/api/feed?page=${page}&limit=${limit}`)
    return res.data?.data ?? []
}
