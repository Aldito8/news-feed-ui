import AuthContainer from "@/components/auth/AuthContainer"
import AuthForm from "@/components/auth/AuthForm"

export default function AuthPage() {
    return (
        <AuthContainer>
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
                Ganapatih Feed
            </h1>
            <AuthForm />
        </AuthContainer>
    )
}
