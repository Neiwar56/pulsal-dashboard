"use client";

import { Bell, Search, User, Settings, LogOut, HelpCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * @typedef {Object} HeaderProps
 * @property {string} [title] - The header title
 */

/**
 * @param {HeaderProps} props
 */
const Header = ({ title = "Tableau de Bord" }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);


  const notifications = [
    {
      id: 1,
      type: "urgent",
      message: "Nouveau ticket prioritaire assigné",
      time: "Il y a 2 min",
      unread: true,
    },
    {
      id: 2,
      type: "info",
      message: "Campagne marketing terminée",
      time: "Il y a 15 min",
      unread: true,
    },
    {
      id: 3,
      type: "success",
      message: "Objectif mensuel atteint",
      time: "Il y a 1 h",
      unread: false,
    },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Section gauche - Titre */}
          <div className="flex-shrink-0">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900">
              {title}
            </h1>
          </div>

          {/* Section centrale - Recherche (Desktop uniquement) */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Rechercher tickets, clients, campagnes..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 text-sm transition-all"
              />
            </div>
          </div>

          {/* Section droite - Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Notifications - Desktop et Tablet */}
            <div className="hidden sm:block relative">
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowUserMenu(false);
                }}
                className="p-2.5 relative rounded-xl hover:bg-gray-100 text-gray-600 transition-all"
              >
                <Bell size={20} />
                {unreadCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"
                  />
                )}
              </button>

              {/* Dropdown Notifications */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Notifications</h3>
                      <button className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                        Tout marquer lu
                      </button>
                    </div>
                    
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notif) => (
                        <div
                          key={notif.id}
                          className={`p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors ${
                            notif.unread ? "bg-blue-50/30" : ""
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                                notif.type === "urgent"
                                  ? "bg-red-500"
                                  : notif.type === "success"
                                  ? "bg-green-500"
                                  : "bg-blue-500"
                              }`}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-gray-900 font-medium">
                                {notif.message}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-gray-50 text-center">
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        Voir toutes les notifications
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Séparateur - Desktop uniquement */}
            <div className="hidden md:block w-px h-8 bg-gray-200" />

            {/* Profil utilisateur - Desktop et Tablet */}
            <div className="hidden sm:block relative">
              <button
                onClick={() => {
                  setShowUserMenu(!showUserMenu);
                  setShowNotifications(false);
                }}
                className="flex items-center gap-3 hover:bg-gray-50 px-3 py-2 rounded-xl transition-all"
              >
                <div className="hidden lg:block text-right">
                  <p className="text-sm font-semibold text-gray-900">Nelson H.</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  NH
                </div>
              </button>

              {/* Dropdown Menu Utilisateur */}
              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                          NH
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Nelson H.</p>
                          <p className="text-xs text-gray-500">nelson@pulsai.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-2">
                      
                      <a
                        href="/profile"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                      >
                        <User size={18} />
                        <span className="text-sm font-medium">Mon profil</span>
                      </a>
                      
                      <a
                        href="/settings"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                      >
                        <Settings size={18} />
                        <span className="text-sm font-medium">Paramètres</span>
                      </a>
                      
                      <a
                        href="/help"
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700 transition-colors"
                      >
                        <HelpCircle size={18} />
                        <span className="text-sm font-medium">Centre d'aide</span>
                      </a>
                    </div>

                    <div className="p-2 border-t border-gray-100">
                      <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-50 text-red-600 transition-colors w-full">
                        <LogOut size={18} />
                        <span className="text-sm font-medium">Se déconnecter</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Menu Hamburger - Mobile uniquement */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="sm:hidden p-2 rounded-xl hover:bg-gray-100 text-gray-600 transition-colors"
            >
              {showMobileMenu ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-t border-gray-100 bg-white"
          >
            {/* Recherche Mobile */}
            <div className="p-4 border-b border-gray-50">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-sm"
                />
              </div>
            </div>

            {/* Profil Mobile */}
            <div className="p-4 border-b border-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                  NH
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Nelson H.</p>
                  <p className="text-xs text-gray-500">nelson@pulsai.com</p>
                </div>
              </div>
            </div>

            {/* Menu Mobile */}
            <div className="p-2">
              <button className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700">
                <div className="flex items-center gap-3">
                  <Bell size={18} />
                  <span className="text-sm font-medium">Notifications</span>
                </div>
                {unreadCount > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </button>
              
              <a
                href="/profile"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700"
              >
                <User size={18} />
                <span className="text-sm font-medium">Mon profil</span>
              </a>
              
              <a
                href="/settings"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700"
              >
                <Settings size={18} />
                <span className="text-sm font-medium">Paramètres</span>
              </a>
              
              <a
                href="/help"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-50 text-gray-700"
              >
                <HelpCircle size={18} />
                <span className="text-sm font-medium">Centre d'aide</span>
              </a>
            </div>

            <div className="p-2 border-t border-gray-100">
              <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-50 text-red-600 w-full">
                <LogOut size={18} />
                <span className="text-sm font-medium">Se déconnecter</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay pour fermer les dropdowns */}
      {(showNotifications || showUserMenu) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowNotifications(false);
            setShowUserMenu(false);
          }}
        />
      )}
    </header>
  );
};

export default Header;