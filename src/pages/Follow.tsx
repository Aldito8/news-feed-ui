import { useState, useEffect } from "react"
import { api } from "@/utils/axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FollowPage() {
    const [activeTab, setActiveTab] = useState<"followers" | "followees">("followers")
    const [followers, setFollowers] = useState<any[]>([])
    const [followees, setFollowees] = useState<any[]>([])

    const fetchData = async () => {
        try {
            const [resFollower, resFollowee] = await Promise.all([
                api.get("/api/follower"),
                api.get("/api/followee"),
            ])
            const followerData = resFollower.data.data
            const followeeData = resFollowee.data.data

            const followersWithCheck = followerData.map((f: any) => {
                const isFollowingBack = followeeData.some(
                    (fe: any) => fe.followee.id === f.follower.id
                )
                return {
                    ...f,
                    isFollowingBack,
                }
            })

            setFollowers(followersWithCheck)
            setFollowees(followeeData)

        } catch (err: any) {
            alert(err.message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    console.log(followers)
    console.log(followees)

    const handleFollow = async (userId: number) => {
        try {
            await api.post(`/api/follow/${userId}`)
            fetchData()
        } catch (err: any) {
            alert(err.message)
        }
    }

    const handleUnfollow = async (userId: number) => {
        try {
            await api.delete(`/api/follow/${userId}`)
            fetchData()
        } catch (err) {
            console.error(err)
        }
    }

    const dataToRender = activeTab === "followers" ? followers : followees

    return (
        <div className="max-w-2xl mx-auto p-4">
            <div className="flex gap-3 mb-4">
                <Button
                    variant={activeTab === "followers" ? "default" : "outline"}
                    onClick={() => setActiveTab("followers")}
                    className={`flex-1`}
                >
                    Followers
                </Button>
                <Button
                    variant={activeTab === "followees" ? "default" : "outline"}
                    onClick={() => setActiveTab("followees")}
                    className="flex-1"
                >
                    Followees
                </Button>
            </div>

            {dataToRender.length === 0 ? (
                <p className="text-center text-gray-500">No users found.</p>
            ) : (
                <div className="grid gap-3">
                    {dataToRender.map((user) => (
                        activeTab === "followers" ? (
                            <div key={user.follower.id} className="flex justify-between p-3 shadow-md border rounded-md transition-all duration-200 hover:shadow-xl">
                                <span className="text-lg">{user.follower.username}</span>
                                {user.isFollowingBack ? (
                                    <Button variant="destructive" onClick={() => handleUnfollow(user.follower.id)}>
                                        Unfollow
                                    </Button>
                                ) : (
                                    <Button onClick={() => handleFollow(user.follower.id)}>
                                        Follow back
                                    </Button>
                                )}
                            </div>

                        ) : (
                            <div key={user.followee.id} className="flex justify-between p-3 shadow-md border rounded-md transition-all duration-200 hover:shadow-xl">
                                <span className="text-lg">{user.followee.username}</span>
                                <Button variant="destructive" onClick={() => handleUnfollow(user.followee.id)}>
                                    Unfollow
                                </Button>
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
    )
}
