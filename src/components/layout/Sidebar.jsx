"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, MessageSquare, Users, Settings, LogOut } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  //liens de navigation
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Messages", icon: MessageSquare, path: "/messages" }, 
    { name: "Équipe", icon: Users, path: "/team" },
    { name: "Paramètres", icon: Settings, path: "/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-50">
      {/* 1. Logo PulsAl */}
      <div className="p-6 flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-xl">P</span>
        </div>
        <span className="text-xl font-bold text-neutral-900 tracking-tight">
          PulsAl
        </span>
      </div>

      {/* 2. Menu de Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/30"
                  : "text-gray-500 hover:bg-neutral-50 hover:text-primary"
              }`}
            >
              <item.icon
                size={20}
                className={isActive ? "text-white" : "text-gray-400 group-hover:text-primary"}
              />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* 3. Footer Sidebar (Logout) */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-500 hover:bg-red-50 transition-colors">
          <LogOut size={20} />
          <span className="font-medium">Déconnexion</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;