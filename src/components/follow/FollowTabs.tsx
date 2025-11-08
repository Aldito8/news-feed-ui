import { Button } from "@/components/ui/button"

interface Props {
    activeTab: "followers" | "followees"
    setActiveTab: (tab: "followers" | "followees") => void
}

export default function FollowTabs({ activeTab, setActiveTab }: Props) {
    return (
        <div className="flex gap-3 mb-4">
            <Button
                variant={activeTab === "followers" ? "default" : "outline"}
                onClick={() => setActiveTab("followers")}
                className="flex-1"
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
    )
}
