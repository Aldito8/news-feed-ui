import { useState } from "react";
import { Home, User, LogOut, Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import CreatePostButton from "./CreatePost";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);

    const menuItems = [
        { name: "Feed", path: "/home", icon: <Home size={20} /> },
        { name: "Follow", path: "/follow", icon: <User size={20} /> }
    ];

    return (
        <div
            className={`${open ? "w-96" : "w-20"} bg-gray-900 text-gray-100 h-screen transition-all duration-300 flex flex-col justify-between`}
        >
            <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                    {open && (
                        <h1 className="text-2xl font-bold whitespace-nowrap transition-all duration-200">
                            Ganapatih News
                        </h1>
                    )}
                    <button
                        onClick={() => setOpen(!open)}
                        className="p-3 hover:bg-gray-800 rounded-lg"
                    >
                        <Menu size={20} />
                    </button>
                </div>

                <nav className="flex flex-col gap-3">
                    {menuItems.map((item, idx) => (
                        <NavLink key={idx} to={item.path}>
                            <button
                                onClick={() => setActive(idx)}
                                className={`flex items-center gap-3 w-full p-3 rounded-lg overflow-hidden whitespace-nowrap 
                                ${active === idx
                                        ? "bg-blue-600 text-white"
                                        : "hover:bg-gray-800 text-gray-400"
                                    }`
                                }
                            >
                                <span>{item.icon}</span>
                                {open && (
                                    <span className="text-sm font-medium transition-all duration-200">
                                        {item.name}
                                    </span>
                                )}

                            </button>
                        </NavLink>
                    ))}
                    <CreatePostButton isOpen={open} />
                </nav>
            </div>

            <div
                className="p-4 text-xs text-gray-500 text-center mb-4"
            >
                <button
                    className="flex items-center gap-3 w-full p-3 rounded-lg overflow-hidden whitespace-nowrap bg-red-900 hover:bg-red-800 text-white"
                >
                    <span><LogOut size={20} /></span>
                    {open && (
                        <span className="text-sm font-medium transition-all duration-200">
                            logout
                        </span>)
                    }
                </button>
            </div>
        </div>
    );
}