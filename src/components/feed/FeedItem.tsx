import type { FeedItem as FeedItemType } from "@/types/feed"
import { formatDistanceToNow } from "date-fns"

interface Props {
    item: FeedItemType
}

export default function FeedItem({ item }: Props) {
    return (
        <div className="bg-gray-50 hover:bg-gray-100 transition-colors shadow-sm rounded-2xl p-4 border border-gray-200">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">
                    👤 User ID: {item.user_id}
                </span>
                <span className="text-xs text-gray-400">
                    {formatDistanceToNow(new Date(item.created_at), { addSuffix: true })}
                </span>
            </div>
            <p className="text-gray-800 wrap-break-word">
                {item.content}
            </p>
        </div>
    )
}
