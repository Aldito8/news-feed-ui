import { createBrowserRouter, Navigate } from "react-router-dom"
import MainLayout from "@/pages/AppLayout"
import HomePage from "@/pages/Home"
import FollowPage from "@/pages/Follow"
import AuthPage from "@/pages/Auth"
import PrivateRoute from "./PrivateRoute"

export const router = createBrowserRouter([
    {
        element: <PrivateRoute />,
        children: [
            {
                path: "/",
                element: <MainLayout />,
                children: [
                    { index: true, element: <Navigate to="/home" replace /> },
                    { path: "/home", element: <HomePage /> },
                    { path: "/follow", element: <FollowPage /> },
                ],
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthPage />,
    },
])
