import { Button } from "@/components/ui/button"
import type { Follower, Followee } from "@/types/follow"

interface Props {
    user: Follower | Followee
    isFollowerTab: boolean
    onFollow: (userId: number) => void
    onUnfollow: (userId: number) => void
}

export default function FollowItem({ user, isFollowerTab, onFollow, onUnfollow }: Props) {
    if (isFollowerTab) {
        const f = user as Follower
        return (
            <div
                key={f.follower.id}
                className="flex justify-between p-3 shadow-md border rounded-md transition-all duration-200 hover:shadow-xl"
            >
                <span className="text-lg">{f.follower.username}</span>
                {f.isFollowingBack ? (
                    <Button variant="destructive" onClick={() => onUnfollow(f.follower.id)}>
                        Unfollow
                    </Button>
                ) : (
                    <Button onClick={() => onFollow(f.follower.id)}>Follow back</Button>
                )}
            </div>
        )
    } else {
        const fe = user as Followee
        return (
            <div
                key={fe.followee.id}
                className="flex justify-between p-3 shadow-md border rounded-md transition-all duration-200 hover:shadow-xl"
            >
                <span className="text-lg">{fe.followee.username}</span>
                <Button variant="destructive" onClick={() => onUnfollow(fe.followee.id)}>
                    Unfollow
                </Button>
            </div>
        )
    }
}
