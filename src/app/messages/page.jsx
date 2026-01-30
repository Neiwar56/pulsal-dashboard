"use client";

import { useState } from "react";
import { Search, MoreVertical, Paperclip, Send, Phone, Video, CheckCircle, Clock } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"

// Données aléatoires pour les conversations et messages
const conversations = [
  {
    id: 1,
    name: "Freddy ZANNOU",
    avatar: "FZ",
    lastMessage: "Merci pour votre réponse rapide !",
    time: "10:23",
    unread: 0,
    status: "online",
    tag: "Support",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    name: "Karen H",
    avatar: "KH",
    lastMessage: "Je n'arrive pas à valider mon panier...",
    time: "09:45",
    unread: 2,
    status: "offline",
    tag: "Urgent",
    color: "bg-red-100 text-red-600"
  },
  {
    id: 3,
    name: "Entreprise NIX",
    avatar: "EN",
    lastMessage: "La facture est-elle disponible ?",
    time: "Hier",
    unread: 0,
    status: "away",
    tag: "Compta",
    color: "bg-gray-100 text-gray-600"
  },
];

const messages = [
  { id: 1, text: "Bonjour, j'ai un problème avec ma commande #4023.", sender: "user", time: "10:20" },
  { id: 2, text: "Bonjour Freddy ! Je regarde ça tout de suite.", sender: "me", time: "10:21" },
  { id: 3, text: "Je vois que le paiement est passé, mais la confirmation n'a pas été envoyée.", sender: "me", time: "10:22" },
  { id: 4, text: "Ah d'accord, c'est exactement ça. Merci !", sender: "user", time: "10:23" },
];

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState(1);
  const selectedContact = conversations.find((c) => c.id === selectedId);

  return (
    <div className="flex h-[calc(100vh-2rem)] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
      
      <div className="w-80 border-r border-gray-200 flex flex-col bg-gray-50/50">
        {/* Header Liste */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg text-neutral-900">Boîte de réception</h2>
            <button className="text-primary bg-primary/10 p-2 rounded-lg hover:bg-primary/20 transition">
              <PlusIcon />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Chercher une conversation..." 
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Liste Scrollable */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedId(conv.id)}
              className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
                selectedId === conv.id ? "bg-blue-50/60 border-l-4 border-l-primary" : "border-l-4 border-l-transparent"
              }`}
            >
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-neutral-900 text-sm">{conv.name}</span>
                <span className="text-xs text-gray-400">{conv.time}</span>
              </div>
              <p className={`text-sm truncate mb-2 ${conv.unread > 0 ? "text-neutral-900 font-medium" : "text-gray-500"}`}>
                {conv.lastMessage}
              </p>
              <div className="flex items-center gap-2">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${conv.color}`}>
                  {conv.tag}
                </span>
                {conv.unread > 0 && (
                  <span className="bg-red-500 text-white text-[10px] px-1.5 rounded-full ml-auto">
                    {conv.unread}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-primary flex items-center justify-center text-white font-bold">
              {selectedContact?.avatar}
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-sm">{selectedContact?.name}</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-xs text-gray-500">En ligne</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <Phone className="hover:text-primary cursor-pointer" size={20} />
            <Video className="hover:text-primary cursor-pointer" size={20} />
            <MoreVertical className="hover:text-gray-600 cursor-pointer" size={20} />
          </div>
        </div>

        
        <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50">
          <div className="flex justify-center">
            <span className="text-xs text-gray-400 bg-gray-200 px-3 py-1 rounded-full">Aujourd'hui</span>
          </div>

          <AnimatePresence>
                    {messages.map((msg) => (
                    <motion.div 
                    key={msg.id}
                    initial={{ opacity: 0, scale: 0.9, y: 10 }} // Départ un peu petit et bas
                    animate={{ opacity: 1, scale: 1, y: 0 }}    // Arrivée taille normale
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                    >
                <div className={`max-w-[70%] p-4 rounded-2xl shadow-sm ${
                msg.sender === 'me' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white text-neutral-900 border border-gray-100 rounded-bl-none'
            }`}>
          <p className="text-sm leading-relaxed">{msg.text}</p>
          <div className={`text-[10px] mt-2 text-right ${msg.sender === 'me' ? 'text-blue-100' : 'text-gray-400'}`}>
            {msg.time}
          </div>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>

        </div>

        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-2 rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
            <button className="p-2 text-gray-400 hover:text-primary transition">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              placeholder="Écrivez votre message..." 
              className="flex-1 bg-transparent outline-none text-sm text-neutral-900"
            />
            <button className="p-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition shadow-md shadow-blue-200">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-72 border-l border-gray-200 bg-white p-6 hidden xl:block overflow-y-auto">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">Détails du client</h3>
        
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-500 mb-3">
            {selectedContact?.avatar}
          </div>
          <h2 className="font-bold text-neutral-900">{selectedContact?.name}</h2>
          <p className="text-sm text-gray-500">exple@example.com</p>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <CheckCircle size={14} className="text-primary" /> Statut
            </h4>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
              Client Actif
            </span>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Clock size={14} className="text-gray-400" /> Historique
            </h4>
            <ul className="space-y-3">
              <li className="text-xs text-gray-500 border-l-2 border-gray-200 pl-3 py-1">
                <span className="block text-gray-900 font-medium">Commande #4023</span>
                <span>Il y a 2 heures</span>
              </li>
              <li className="text-xs text-gray-500 border-l-2 border-gray-200 pl-3 py-1">
                <span className="block text-gray-900 font-medium">Ticket ouvert</span>
                <span>Hier à 14:00</span>
              </li>
              <li className="text-xs text-gray-500 border-l-2 border-gray-200 pl-3 py-1">
                <span className="block text-gray-900 font-medium">Inscription</span>
                <span>12 Jan 2026</span>
              </li>
            </ul>
          </div>
          
          <div className="pt-4 border-t border-gray-100">
             <button className="w-full py-2 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition">
               Voir le profil complet
             </button>
          </div>
        </div>
      </div>

    </div>
  );
}

// l'icone Plus
const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12h14"/>
  </svg>
);