"use client";

import Header from "@/components/layout/Header";
import StatCard from "@/components/ui/StatCard";
import { Users, MessageSquare, Send } from "lucide-react"; // J'ai ajouté 'Send' pour les campagnes
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageWrapper from "@/components/ui/PageWrapper";

// Données pour le graphique
const data = [
  { name: 'Lun', tickets: 40, active: 24 },
  { name: 'Mar', tickets: 30, active: 13 },
  { name: 'Mer', tickets: 20, active: 58 },
  { name: 'Jeu', tickets: 27, active: 39 },
  { name: 'Ven', tickets: 18, active: 48 },
  { name: 'Sam', tickets: 23, active: 38 },
  { name: 'Dim', tickets: 34, active: 43 },
];

// animations
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1 
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="p-2">
      <Header title="Vue d'ensemble" />

      {/* 1. Grille des KPIs - Passée à 3 colonnes pour plus de réalisme */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Utilisateurs Actifs" 
          value="2,543" 
          trend={12} 
          icon={Users} 
          color="primary" 
        />
        <StatCard 
          title="Tickets Ouverts" 
          value="45" 
          trend={-5} 
          icon={MessageSquare} 
          color="secondary" 
        />
        {/* On remplace les stats "génériques" par une stat métier "Campagnes" (Marketing) */}
        <StatCard 
          title="Campagnes Email" 
          value="8" 
          trend={0} 
          icon={Send} 
          color="purple" 
        />
      </div>

      {/* 2. Section Graphique & Activité */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Graphique Principal */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-neutral-900">Flux de tickets</h2>
            <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg p-2 outline-none">
              <option>Cette semaine</option>
              <option>Ce mois</option>
            </select>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorTickets" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3590E3" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3590E3" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #E5E7EB', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#1F2937' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="tickets" 
                  stroke="#3590E3" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorTickets)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Liste Rapide simplifiée */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
          <h2 className="text-lg font-bold mb-4 text-neutral-900">En attente</h2>
          <div className="space-y-4 flex-1">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 hover:bg-neutral-50 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                <div className={`w-2 h-2 mt-2 rounded-full ${item === 1 ? 'bg-red-500' : 'bg-primary'}`} />
                <div>
                  <h4 className="font-semibold text-sm text-neutral-900">Erreur synchronisation</h4>
                  <p className="text-xs text-gray-500 line-clamp-1">Le client signale un problème avec l'API...</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 px-4 border border-gray-200 rounded-xl text-neutral-900 font-medium text-sm hover:bg-neutral-50 transition-colors">
            Voir tous les tickets
          </button>
        </div>

      </div>
    </div>
  );
}