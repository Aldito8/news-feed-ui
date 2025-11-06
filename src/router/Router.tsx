import MainLayout from "@/pages/AppLayout";
import FollowPage from "@/pages/Follow";
import HomePage from "@/pages/Home";
import AuthPage from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/home", element: <HomePage /> },
            { path: "/follow", element: <FollowPage /> }
        ],
    },
    {
        path: "/auth",
        element: <AuthPage />
    }
]);
