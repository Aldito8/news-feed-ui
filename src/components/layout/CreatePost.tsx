import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
import { api } from "@/utils/axios"

export default function CreatePostButton({ isOpen }: { isOpen: boolean }) {
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await api.post('/api/posts', {
                content
            })
            setOpen(false)
            setError("")
            setContent("")
        } catch (error: any) {
            console.log(error.response.data.error)
            setError(error.response.data.error)
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button
                    className="flex items-center gap-3 w-full p-3 rounded-lg overflow-hidden whitespace-nowrap"
                >
                    <span><Plus size={20} /></span>
                    {isOpen && (
                        <span className="text-sm font-medium transition-all duration-200">
                            CreatePost
                        </span>
                    )}

                </button>
            </DialogTrigger>

            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Create New Post</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit}>
                    <label className="text-sm font-medium">Content</label>
                    <Textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Write your post here..."
                        className="mt-2"
                        required
                    />

                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex justify-end gap-2 pt-4">
                        <Button type="submit" variant="outline">
                            Cancel
                        </Button>
                        <Button type="submit">Publish</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog >
    )
}
