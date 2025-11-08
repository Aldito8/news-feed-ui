import EmptyFollow from "./FollowEmpty"
import FollowItem from "./FollowItem"
import type { Follower, Followee } from "@/types/follow"

interface Props {
    data: (Follower | Followee)[]
    isFollowerTab: boolean
    onFollow: (userId: number) => void
    onUnfollow: (userId: number) => void
}

export default function FollowList({ data, isFollowerTab, onFollow, onUnfollow }: Props) {
    if (data.length === 0) return <EmptyFollow />

    return (
        <div className="grid gap-3">
            {data.map((user) => (
                <FollowItem
                    key={isFollowerTab ? (user as Follower).follower.id : (user as Followee).followee.id}
                    user={user}
                    isFollowerTab={isFollowerTab}
                    onFollow={onFollow}
                    onUnfollow={onUnfollow}
                />
            ))}
        </div>
    )
}
