import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Props {
    id: string
    label: string
    type?: string
    value: string
    onChange: (val: string) => void
}

export default function AuthInput({ id, label, type = "text", value, onChange }: Props) {
    return (
        <div className="space-y-2">
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type={type}
                placeholder={`Enter your ${label.toLowerCase()}`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="focus-visible:ring-blue-500 border-blue-200"
            />
        </div>
    )
}
