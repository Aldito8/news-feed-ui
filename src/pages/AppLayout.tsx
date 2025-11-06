import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="flex">
            <Sidebar />
            <main className="flex-1 p-6 bg-gray-50 h-screen overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}