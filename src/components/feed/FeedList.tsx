import InfiniteScroll from "react-infinite-scroll-component"
import FeedItem from "./FeedItem"
import type { FeedItem as FeedItemType } from "@/types/feed"
import EmptyFeed from "./FeedEmpty"

interface Props {
    data: FeedItemType[]
    hasMore: boolean
    loading: boolean
    fetchMore: () => void
}

export default function FeedList({ data, hasMore, loading, fetchMore }: Props) {
    return (
        <div id="scrollableDiv" className="h-full overflow-auto px-4 sm:px-6">
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMore}
                hasMore={hasMore}
                loader={
                    <p className="text-center text-gray-500 py-4 animate-pulse">
                        {loading ? "Loading more posts..." : ""}
                    </p>
                }
                endMessage={
                    data.length > 0 && (
                        <p className="text-center text-gray-400 py-6">
                            You’ve reached the end of the feed
                        </p>
                    )
                }
                scrollableTarget="scrollableDiv"
            >
                <div className="space-y-4 pt-4 pb-6">
                    {data.length > 0 ? (
                        data.map((item) => <FeedItem key={item.id} item={item} />)
                    ) : (
                        !loading && <EmptyFeed />
                    )}
                </div>
            </InfiniteScroll>
        </div>
    )
}
