import { useState, useEffect } from "react"
import type { Follower, Followee } from "@/types/follow"
import { followUser, getFollowees, getFollowers, unfollowUser } from "@/services/follow"

export const useFollow = () => {
    const [activeTab, setActiveTab] = useState<"followers" | "followees">("followers")
    const [followers, setFollowers] = useState<Follower[]>([])
    const [followees, setFollowees] = useState<Followee[]>([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)
            const [followerData, followeeData] = await Promise.all([
                getFollowers(),
                getFollowees(),
            ])

            const followersWithCheck = followerData.map((f: Follower) => ({
                ...f,
                isFollowingBack: followeeData.some(
                    (fe) => fe.followee.id === f.follower.id
                ),
            }))

            setFollowers(followersWithCheck)
            setFollowees(followeeData)
        } finally {
            setLoading(false)
        }
    }

    const handleFollow = async (userId: number) => {
        await followUser(userId)
        fetchData()
    }

    const handleUnfollow = async (userId: number) => {
        await unfollowUser(userId)
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])

    const dataToRender = activeTab === "followers" ? followers : followees

    return {
        activeTab,
        setActiveTab,
        dataToRender,
        handleFollow,
        handleUnfollow,
        loading,
    }
}
