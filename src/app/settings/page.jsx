"use client";

import Header from "@/components/layout/Header";
import PageWrapper from "@/components/ui/PageWrapper"; 
import { Save, Bell, Lock, User, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function SettingsPage() {
  return (
    <PageWrapper className="p-2 max-w-4xl">
      <Header title="Paramètres" />

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 space-y-2">
          {[
            { icon: User, label: "Profil", active: true },
            { icon: Bell, label: "Notifications", active: false },
            { icon: Lock, label: "Sécurité", active: false },
            { icon: Globe, label: "Langue", active: false },
          ].map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }} 
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${
                item.active 
                  ? "bg-white border border-gray-200 text-primary shadow-sm" 
                  : "text-gray-500 hover:bg-white hover:text-neutral-900"
              }`}
            >
              <item.icon size={18} /> {item.label}
            </motion.button>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm"
        >
          <h2 className="text-xl font-bold text-neutral-900 mb-6">Informations du profil</h2>
          
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                NA
            </div>
            <button className="px-4 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition">
              Changer la photo
            </button>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Prénom</label>
                <input type="text" defaultValue="Nelson Harry" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Nom</label>
                <input type="text" defaultValue="AWOUDO" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Email professionnel</label>
              <input type="email" defaultValue="harryawoudo@gmail.com" className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Biographie</label>
              <textarea rows="4" defaultValue="Développeur UX/UI." className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"></textarea>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button" 
                className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl font-medium hover:bg-blue-600 transition shadow-lg shadow-blue-200"
              >
                <Save size={18} />
                Enregistrer les modifications
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </PageWrapper>
  );
}