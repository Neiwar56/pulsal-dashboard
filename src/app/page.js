"use client";

import Header from "@/components/layout/Header";
import StatCard from "@/components/ui/StatCard";
import PageWrapper from "@/components/ui/PageWrapper";
import { Users, MessageSquare, Send, Zap, TrendingUp, PieChart as PieIcon, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { motion } from "framer-motion";

// --- DONNÉES ---

// Données Support (Tickets)
const ticketData = [
  { name: 'Lun', tickets: 40, active: 24 },
  { name: 'Mar', tickets: 30, active: 13 },
  { name: 'Mer', tickets: 20, active: 58 },
  { name: 'Jeu', tickets: 27, active: 39 },
  { name: 'Ven', tickets: 18, active: 48 },
  { name: 'Sam', tickets: 23, active: 38 },
  { name: 'Dim', tickets: 34, active: 43 },
];

// Données Marketing (Campagnes)
const marketingData = [
  { name: 'Welcome', sent: 4000, opened: 2400 },
  { name: 'Hiver', sent: 3000, opened: 1398 },
  { name: 'Relance', sent: 2000, opened: 980 },
  { name: 'News', sent: 2780, opened: 1908 },
];

// Données Canaux (Pour le Pie Chart)
const channelData = [
  { name: 'Email', value: 450, color: '#3590E3' }, // Primary Blue
  { name: 'Chat Widget', value: 300, color: '#BAF09D' }, // Secondary Green
  { name: 'WhatsApp', value: 200, color: '#8B5CF6' }, // Purple
];

// --- ANIMATIONS ---
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <PageWrapper className="p-2 space-y-6">
      <Header title="Vue d'ensemble" />

      {/* 1. SECTION KPI (4 colonnes pour faire "Pro") */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        <motion.div variants={item}>
            <StatCard title="Utilisateurs Actifs" value="2,543" trend={12} icon={Users} color="primary" />
        </motion.div>
        <motion.div variants={item}>
            <StatCard title="Tickets Ouverts" value="45" trend={-5} icon={MessageSquare} color="secondary" />
        </motion.div>
        <motion.div variants={item}>
            {/* KPI Marketing : Montre l'aspect "Campagnes" */}
            <StatCard title="Conversion Email" value="24.8%" trend={3.2} icon={Send} color="purple" />
        </motion.div>
        <motion.div variants={item}>
            {/* KPI IA : Montre l'aspect "Intelligence Artificielle" (Critique pour PulsAl) */}
            <StatCard title="Résolu par IA" value="68%" trend={15} icon={Zap} color="orange" />
        </motion.div>
      </motion.div>

      {/* 2. SECTION GRAPHIQUES PRINCIPAUX (Support & Marketing côte à côte) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* A. Support - Flux de tickets (Area Chart) - Prend 2/3 de la largeur */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="text-lg font-bold text-neutral-900">Activité Support</h2>
                <p className="text-xs text-gray-500">Volume de tickets sur les 7 derniers jours</p>
            </div>
            <button className="text-sm text-primary font-medium hover:bg-blue-50 px-3 py-1 rounded-lg transition">
                Voir détails
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ticketData}>
                <defs>
                  <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3590E3" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3590E3" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#1F2937', fontWeight: 'bold' }}
                />
                <Area type="monotone" dataKey="tickets" stroke="#3590E3" strokeWidth={3} fillOpacity={1} fill="url(#colorTickets)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* B. Répartition Canaux (Pie Chart) - Prend 1/3 de la largeur */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <h2 className="text-lg font-bold text-neutral-900 mb-2">Sources des Tickets</h2>
            <p className="text-xs text-gray-500 mb-6">Répartition par canal d'entrée</p>
            
            <div className="flex-1 min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={channelData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {channelData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
                        <Legend verticalAlign="bottom" height={36} iconType="circle" />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>

      {/* 3. SECTION MARKETING & LIVE FEED */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* C. Performance Marketing (Bar Chart) - Pour montrer l'automatisation */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                    <TrendingUp className="text-purple-500" size={20}/> Campagnes Marketing
                </h2>
                <span className="bg-purple-50 text-purple-600 px-2 py-1 rounded-md text-xs font-bold">4 Actives</span>
            </div>
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={marketingData} barGap={8}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 11}} dy={10} />
                        <Tooltip cursor={{fill: '#F9FAFB'}} contentStyle={{ borderRadius: '8px', border: 'none' }} />
                        <Bar dataKey="sent" name="Envoyés" fill="#E5E7EB" radius={[4, 4, 4, 4]} barSize={20} />
                        <Bar dataKey="opened" name="Ouverts" fill="#8B5CF6" radius={[4, 4, 4, 4]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

        {/* D. Live Feed - Tickets Urgents (Liste améliorée) */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-bold text-neutral-900">Urgences à traiter</h2>
                <button className="text-xs text-gray-500 hover:text-primary underline">Tout voir</button>
            </div>
            
            <div className="flex-1 space-y-4">
                {[
                    { id: 1, title: "Panne Serveur API", client: "TechCorp", time: "2m", priority: "high" },
                    { id: 2, title: "Erreur Facturation", client: "Alice M.", time: "15m", priority: "med" },
                    { id: 3, title: "Question RGPD", client: "Consulting & Co", time: "1h", priority: "low" },
                ].map((ticket) => (
                    <div key={ticket.id} className="flex items-center justify-between p-3 rounded-xl border border-gray-50 hover:border-gray-200 hover:bg-gray-50 transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full ${ticket.priority === 'high' ? 'bg-red-500 animate-pulse' : ticket.priority === 'med' ? 'bg-orange-400' : 'bg-blue-400'}`} />
                            <div>
                                <h4 className="text-sm font-semibold text-neutral-900 group-hover:text-primary transition-colors">{ticket.title}</h4>
                                <p className="text-xs text-gray-500">{ticket.client}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                            <span className="text-xs">{ticket.time}</span>
                            <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Temps moyen de réponse</span>
                    <span className="font-bold text-green-600">1m 42s (-12%)</span>
                </div>
            </div>
        </div>

      </div>
    </PageWrapper>
  );
}