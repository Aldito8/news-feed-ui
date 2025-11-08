import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"

export default function PrivateRoute() {
    const { isAuthenticated, loading } = useAuth()

    if (loading) {
        return <div className="text-center py-10 text-gray-500">Checking authentication...</div>
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />
}
