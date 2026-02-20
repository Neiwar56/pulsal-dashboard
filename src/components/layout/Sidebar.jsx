"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut, 
  Megaphone, 
  Sparkles, 
  Briefcase 
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  // Menu principal divisé par catégories pour faire plus "Pro"
  const menuCategories = [
    {
      title: "Pilotage",
      items: [
        { name: "Vue d'ensemble", icon: LayoutDashboard, path: "/" },
      ]
    },
    {
      title: "Relation Client (CRM)",
      items: [
        { name: "Messagerie", icon: MessageSquare, path: "/messages", badge: "3" },
        { name: "Base Contacts", icon: Users, path: "/contacts" },
      ]
    },
    {
      title: "Croissance & IA",
      items: [
        { name: "Campagnes", icon: Megaphone, path: "/campaigns" },
        // L'onglet IA avec un design spécial
        { name: "PulsAI Studio", icon: Sparkles, path: "/ai-studio", isSpecial: true },
      ]
    },
    {
      title: "Administration",
      items: [
        { name: "Mon Équipe", icon: Briefcase, path: "/team" },
        { name: "Paramètres", icon: Settings, path: "/settings" },
      ]
    }
  ];

  return (
    <aside className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-50 shadow-sm">
      {/* 1. Logo PulsAl */}
      <div className="h-16 flex items-center gap-3 px-6 border-b border-gray-100">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-md shadow-blue-200">
          <span className="text-white font-bold text-xl leading-none">P</span>
        </div>
        <span className="text-xl font-bold text-gray-900 tracking-tight">
          PulsAl<span className="text-primary">.</span>
        </span>
      </div>

      {/* 2. Menu de Navigation avec scroll si besoin */}
      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-6 custom-scrollbar">
        {menuCategories.map((category, index) => (
          <div key={index}>
            <h3 className="px-3 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
              {category.title}
            </h3>
            <div className="space-y-1">
              {category.items.map((item) => {
                const isActive = pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-200 group relative overflow-hidden ${
                      isActive
                        ? "bg-blue-50/80 text-primary font-semibold"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium"
                    }`}
                  >
                    {/* Indicateur actif vertical */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full" />
                    )}

                    <div className="flex items-center gap-3">
                      <item.icon
                        size={18}
                        className={`transition-colors ${
                          isActive 
                            ? "text-primary" 
                            : item.isSpecial 
                              ? "text-purple-500 group-hover:text-purple-600" 
                              : "text-gray-400 group-hover:text-gray-600"
                        }`}
                      />
                      <span className={item.isSpecial && !isActive ? "bg-gradient-to-r from-purple-600 to-primary bg-clip-text text-transparent font-bold" : ""}>
                        {item.name}
                      </span>
                    </div>

                    {/* Badge optionnel (ex: pour les messages non lus) */}
                    {item.badge && (
                      <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        {item.badge}
                      </span>
                    )}

                    {/* Petit tag "Nouveau" pour l'IA */}
                    {item.isSpecial && !isActive && (
                      <span className="bg-purple-100 text-purple-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
                        Pro
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

    </aside>
  );
};

export default Sidebar;