"use client";

import { useState, useEffect, useRef } from "react";
import { Search, MoreVertical, Paperclip, Send, Phone, Video, CheckCircle, Clock, Sparkles, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ... (Gardons les mêmes données conversations, mais ajoutons des détails pour le profil) ...
const conversations = [
  { id: 1, name: "Thomas Dubois", avatar: "TD", lastMessage: "Merci pour votre réponse rapide !", time: "10:23", unread: 0, status: "online", tag: "Support", color: "bg-blue-100 text-blue-600", email: "thomas.d@gmail.com", phone: "+33 6 12 34 56 78", company: "Tech Solutions", role: "CTO" },
  { id: 2, name: "Sarah Connors", avatar: "SC", lastMessage: "Je n'arrive pas à valider mon panier...", time: "09:45", unread: 2, status: "offline", tag: "Urgent", color: "bg-red-100 text-red-600", email: "s.connors@skynet.com", phone: "+33 6 98 76 54 32", company: "Cyberdyne", role: "Lead Dev" },
  { id: 3, name: "Entreprise XYZ", avatar: "EX", lastMessage: "La facture est-elle disponible ?", time: "Hier", unread: 0, status: "away", tag: "Compta", color: "bg-gray-100 text-gray-600", email: "compta@xyz.com", phone: "+33 1 23 45 67 89", company: "XYZ Corp", role: "Comptable" },
];

const initialMessages = [
  { id: 1, text: "Bonjour, j'ai un problème avec ma commande #4023.", sender: "user", time: "10:20" },
  { id: 2, text: "Bonjour Thomas ! Je regarde ça tout de suite.", sender: "me", time: "10:21" },
  { id: 3, text: "Je vois que le paiement est passé, mais la confirmation n'a pas été envoyée.", sender: "me", time: "10:22" },
  { id: 4, text: "Ah d'accord, c'est exactement ça. Merci !", sender: "user", time: "10:23" },
];

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState(1);
  const [msgList, setMsgList] = useState(initialMessages);
  const [inputText, setInputText] = useState("");
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [showProfile, setShowProfile] = useState(false); // État pour le volet profil
  const selectedContact = conversations.find((c) => c.id === selectedId);
  const messagesEndRef = useRef(null);

  // Auto-scroll vers le bas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgList, isAiTyping]);

  // Fonction simulation IA
  const handleGenerateAI = () => {
    setIsAiTyping(true);
    setTimeout(() => {
      setInputText("Bonjour Thomas, après analyse de votre dossier, je confirme que le remboursement a été initié ce matin. Vous devriez le recevoir sous 48h.");
      setIsAiTyping(false);
    }, 1500);
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    setMsgList([...msgList, { id: Date.now(), text: inputText, sender: "me", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setInputText("");
  };

  return (
    <div className="flex h-[calc(100vh-2rem)] bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl relative">
      
      {/* 1. LISTE CONVERSATIONS (Reste similaire mais plus propre) */}
      <div className="w-80 border-r border-gray-200 flex flex-col bg-gray-50/50">
        <div className="p-4 border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <h2 className="font-bold text-lg text-neutral-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input type="text" placeholder="Rechercher..." className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conv) => (
            <div key={conv.id} onClick={() => setSelectedId(conv.id)} className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-white transition-all ${selectedId === conv.id ? "bg-white border-l-4 border-l-primary shadow-sm" : "border-l-4 border-l-transparent"}`}>
              <div className="flex justify-between mb-1">
                <span className={`font-semibold text-sm ${selectedId === conv.id ? "text-primary" : "text-neutral-900"}`}>{conv.name}</span>
                <span className="text-xs text-gray-400">{conv.time}</span>
              </div>
              <p className="text-sm truncate text-gray-500 mb-2">{conv.lastMessage}</p>
              <div className="flex gap-2">
                 <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${conv.color}`}>{conv.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. ZONE DE CHAT */}
      <div className="flex-1 flex flex-col bg-slate-50 relative">
        {/* Header Chat */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white shadow-sm z-10">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setShowProfile(!showProfile)}>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-primary flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
              {selectedContact?.avatar}
            </div>
            <div>
              <h3 className="font-bold text-neutral-900 text-sm hover:text-primary transition">{selectedContact?.name}</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-500">En ligne • IA Active</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <button onClick={() => setShowProfile(true)} className="text-sm text-primary font-medium hover:bg-blue-50 px-3 py-1 rounded-lg transition">
              Voir Profil
            </button>
            <MoreVertical className="hover:text-neutral-900 cursor-pointer" size={20} />
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6">
          <AnimatePresence>
            {msgList.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[70%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                  msg.sender === 'me' ? 'bg-primary text-white rounded-br-none' : 'bg-white text-neutral-900 rounded-bl-none border border-gray-100'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isAiTyping && (
             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-gray-400 text-xs ml-4">
               <Sparkles size={14} className="text-primary animate-spin" /> PulsAl génère une réponse...
             </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Zone - C'est ici que l'IA intervient */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex flex-col gap-3">
             {/* Bouton Magique IA */}
            {!inputText && (
              <motion.button 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                onClick={handleGenerateAI}
                className="self-start flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-purple-500 to-primary px-3 py-1.5 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                <Sparkles size={12} /> Suggestion IA
              </motion.button>
            )}
            
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 p-2 rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all shadow-inner">
              <button className="p-2 text-gray-400 hover:text-primary transition"><Paperclip size={20} /></button>
              <input 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                type="text" 
                placeholder="Écrivez votre message ou utilisez l'IA..." 
                className="flex-1 bg-transparent outline-none text-sm text-neutral-900"
              />
              <button onClick={handleSend} className="p-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition shadow-md shadow-blue-200"><Send size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SLIDE-OVER PROFIL (Le détail qui tue) */}
      <AnimatePresence>
        {showProfile && (
          <>
            {/* Overlay sombre */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }}
              onClick={() => setShowProfile(false)}
              className="absolute inset-0 bg-black z-20"
            />
            {/* Panneau glissant */}
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white border-l border-gray-200 z-30 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h3 className="font-bold text-lg">Détails Contact</h3>
                <button onClick={() => setShowProfile(false)} className="p-1 hover:bg-gray-100 rounded-full"><X size={20} /></button>
              </div>
              
              <div className="p-6 overflow-y-auto flex-1">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-3xl font-bold text-gray-500 mb-4 border-4 border-white shadow-lg">
                    {selectedContact?.avatar}
                  </div>
                  <h2 className="font-bold text-xl text-neutral-900">{selectedContact?.name}</h2>
                  <p className="text-sm text-primary font-medium">{selectedContact?.role} chez {selectedContact?.company}</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                    <h4 className="text-xs font-bold text-blue-800 uppercase mb-2 flex items-center gap-2"><Sparkles size={12}/> Score IA PulsAl</h4>
                    <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full w-[85%]"></div>
                    </div>
                    <p className="text-xs text-blue-600 mt-2 font-medium">Client à haut potentiel (85%)</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-900">Coordonnées</h4>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition"><span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">@</span> {selectedContact?.email}</li>
                      <li className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition"><span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"><Phone size={14}/></span> {selectedContact?.phone}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-gray-900">Dernières Actions</h4>
                    <div className="border-l-2 border-gray-200 pl-4 space-y-4">
                      <div className="relative">
                        <span className="absolute -left-[21px] top-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                        <p className="text-sm font-medium text-gray-900">Ticket résolu</p>
                        <p className="text-xs text-gray-500">Il y a 2 heures</p>
                      </div>
                      <div className="relative">
                        <span className="absolute -left-[21px] top-1 w-3 h-3 bg-gray-300 rounded-full border-2 border-white"></span>
                        <p className="text-sm font-medium text-gray-900">Visite page "Prix"</p>
                        <p className="text-xs text-gray-500">Hier à 14:30</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                 <button className="w-full py-3 bg-neutral-900 text-white rounded-xl font-bold text-sm shadow-lg hover:bg-neutral-800 hover:shadow-xl transition-all transform hover:-translate-y-1">
                   Gérer le dossier complet
                 </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}