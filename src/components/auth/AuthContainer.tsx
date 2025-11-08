interface Props {
    children: React.ReactNode
}

export default function AuthContainer({ children }: Props) {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-blue-300">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8">
                {children}
            </div>
        </div>
    )
}
