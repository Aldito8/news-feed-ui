import FeedList from "@/components/feed/FeedList"
import { useFeed } from "@/hooks/useFeed"

export default function HomePage() {
    const { data, hasMore, loading, fetchMore } = useFeed()

    return (
        <div className="flex justify-center bg-gray-50 px-3">
            <div className="w-full h-[90vh] max-w-2xl bg-white rounded-2xl shadow-md border overflow-hidden border-gray-200 flex flex-col">
                <div className="bg-white border-b border-gray-100 p-4 sm:p-6 shrink-0">
                    <h1 className="text-2xl font-bold text-center text-gray-800">Feed</h1>
                </div>
                <FeedList data={data} hasMore={hasMore} loading={loading} fetchMore={fetchMore} />
            </div>
        </div>
    )
}
