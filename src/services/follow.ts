import { api } from "@/utils/axios"
import type { Follower, Followee } from "@/types/follow"

export const getFollowers = async (): Promise<Follower[]> => {
    const res = await api.get("/api/follower")
    return res.data.data
}

export const getFollowees = async (): Promise<Followee[]> => {
    const res = await api.get("/api/followee")
    return res.data.data
}

export const followUser = async (userId: number) => {
    await api.post(`/api/follow/${userId}`)
}

export const unfollowUser = async (userId: number) => {
    await api.delete(`/api/follow/${userId}`)
}
