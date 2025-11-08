import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
import { api } from "@/utils/axios"

export default function CreatePostButton({ isOpen }: { isOpen: boolean }) {
    const [open, setOpen] = useState(false)
    const [content, setContent] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const data = await api.post('/api/posts', {
            content
        })

        console.log(data)
        setOpen(false)
        setContent("")
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

                    <div className="flex justify-end gap-2 pt-4">
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Publish</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog >
    )
}
