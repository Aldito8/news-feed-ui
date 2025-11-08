import FollowTabs from "@/components/follow/FollowTabs"
import FollowList from "@/components/follow/FollowList"
import { useFollow } from "@/hooks/useFollow"

export default function FollowPage() {
    const {
        activeTab,
        setActiveTab,
        dataToRender,
        handleFollow,
        handleUnfollow,
    } = useFollow()

    return (
        <div className="max-w-2xl mx-auto p-4">
            <FollowTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <FollowList
                data={dataToRender}
                isFollowerTab={activeTab === "followers"}
                onFollow={handleFollow}
                onUnfollow={handleUnfollow}
            />
        </div>
    )
}
