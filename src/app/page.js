"use client";

import Header from "@/components/layout/Header";
import StatCard from "@/components/ui/StatCard";
import PageWrapper from "@/components/ui/PageWrapper";
import { 
  Users, 
  MessageSquare, 
  Send, 
  Zap, 
  Clock, 
  CheckCircle2,
  AlertCircle,
  Activity
} from "lucide-react";
import {
  Area,
  AreaChart,
  Line,
  LineChart,
  RadialBar,
  RadialBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Données
const ticketActivity = [
  { day: "Lun", total: 40, resolved: 16 },
  { day: "Mar", total: 30, resolved: 17 },
  { day: "Mer", total: 20, resolved: 42 },
  { day: "Jeu", total: 27, resolved: 21 },
  { day: "Ven", total: 18, resolved: 30 },
  { day: "Sam", total: 23, resolved: 15 },
  { day: "Dim", total: 34, resolved: 28 },
];

const hourlyActivity = [
  { hour: "00h", tickets: 12 },
  { hour: "04h", tickets: 8 },
  { hour: "08h", tickets: 45 },
  { hour: "12h", tickets: 68 },
  { hour: "16h", tickets: 52 },
  { hour: "20h", tickets: 28 },
];

const performanceMetrics = [
  { name: "IA Resolution", value: 68, fill: "#10b981" },
  { name: "Satisfaction", value: 92, fill: "#3b82f6" },
  { name: "Réactivité", value: 85, fill: "#8b5cf6" },
];

const ticketStatus = [
  { name: "Résolus", value: 156, color: "#10b981" },
  { name: "En cours", value: 45, color: "#f59e0b" },
  { name: "En attente", value: 23, color: "#ef4444" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", damping: 20, stiffness: 100 }
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", damping: 18, stiffness: 120 }
  },
};

export default function DashboardOverviewAlt() {
  return (
    <>
      {/* Header en dehors du PageWrapper pour occuper toute la largeur */}
      <Header title="Tableau de Bord" />
      
      {/* Contenu principal avec padding */}
      <PageWrapper className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 p-4 md:p-6 lg:p-8 space-y-6">
        {/* Sous-titre avec date */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
              day: 'numeric', 
              month: 'long', 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
        </div>

        {/* Métriques principales - Layout asymétrique 5 colonnes */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {/* Grande carte featured 2x2 */}
          <motion.div variants={scaleIn} className="lg:col-span-2 lg:row-span-2">
            <div className="h-full bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                    <Users className="w-7 h-7" />
                  </div>
                  <span className="text-blue-100 text-sm font-medium">+12% ce mois</span>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h3 className="text-white/80 text-sm font-medium uppercase tracking-wider">
                    Utilisateurs Actifs
                  </h3>
                  <p className="text-5xl font-bold">2,543</p>
                  <p className="text-blue-100 text-sm">847 nouveaux cette semaine</p>
                </div>

                <div className="h-24 mt-8">
                  <ResponsiveContainer>
                    <AreaChart data={hourlyActivity}>
                      <defs>
                        <linearGradient id="miniGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ffffff" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#ffffff" stopOpacity={0.05} />
                        </linearGradient>
                      </defs>
                      <Area 
                        type="monotone" 
                        dataKey="tickets" 
                        stroke="#ffffff" 
                        strokeWidth={2}
                        fill="url(#miniGradient)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4 petites cartes avec gradients */}
          {[
            { 
              title: "Tickets Ouverts", 
              value: "45", 
              change: "-8 vs hier",
              trend: "down",
              icon: MessageSquare, 
              bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
              iconColor: "text-amber-600",
              borderColor: "border-amber-100"
            },
            { 
              title: "Taux Conversion", 
              value: "24.8%", 
              change: "+3.2%",
              trend: "up",
              icon: Send, 
              bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
              iconColor: "text-purple-600",
              borderColor: "border-purple-100"
            },
            { 
              title: "Résolution IA", 
              value: "68%", 
              change: "+15%",
              trend: "up",
              icon: Zap, 
              bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
              iconColor: "text-green-600",
              borderColor: "border-green-100"
            },
            { 
              title: "Temps Moyen", 
              value: "1m 42s", 
              change: "-12%",
              trend: "down",
              icon: Clock, 
              bgColor: "bg-gradient-to-br from-cyan-50 to-blue-50",
              iconColor: "text-cyan-600",
              borderColor: "border-cyan-100"
            },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="lg:col-span-1">
              <div className={cn(
                "h-full p-5 rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300",
                stat.bgColor,
                stat.borderColor
              )}>
                <div className="flex items-start justify-between mb-4">
                  <div className={cn("p-2.5 rounded-lg bg-white/60", stat.iconColor)}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <span className={cn(
                    "text-xs font-semibold px-2 py-1 rounded-full",
                    stat.trend === "up" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                  )}>
                    {stat.change}
                  </span>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-medium mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Graphiques principaux */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Line chart avec Area */}
          <motion.div variants={scaleIn} className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-blue-600" />
                    Évolution des Tickets
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">Activité sur 7 jours</p>
                </div>
                
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                    <span className="text-gray-600">Total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-gray-600">Résolus</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 h-[340px]">
              <ResponsiveContainer>
                <LineChart data={ticketActivity} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "#9ca3af", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "12px",
                      boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                    }}
                  />
                  <Area type="monotone" dataKey="total" stroke="#3b82f6" fill="url(#colorTotal)" strokeWidth={2} />
                  <Line
                    type="monotone"
                    dataKey="resolved"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: "#10b981", r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Radial Bar Chart */}
          <motion.div variants={scaleIn} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Statut des Tickets</h2>
            <p className="text-sm text-gray-500 mb-6">Répartition actuelle</p>

            <div className="h-[260px] flex items-center justify-center">
              <ResponsiveContainer>
                <RadialBarChart 
                  cx="50%" 
                  cy="50%" 
                  innerRadius="30%" 
                  outerRadius="100%" 
                  data={performanceMetrics}
                  startAngle={90}
                  endAngle={-270}
                >
                  <RadialBar background dataKey="value" cornerRadius={10} />
                  <Tooltip contentStyle={{ backgroundColor: "white", borderRadius: "10px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3 mt-4">
              {performanceMetrics.map((metric, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: metric.fill }} />
                    <span className="text-sm text-gray-700">{metric.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{metric.value}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section finale - 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Progress bars animées */}
          <motion.div variants={scaleIn} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Canaux de Support</h2>

            <div className="space-y-4">
              {ticketStatus.map((channel, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 font-medium">{channel.name}</span>
                    <span className="text-gray-900 font-semibold">{channel.value}</span>
                  </div>
                  <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(channel.value / 224) * 100}%` }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ backgroundColor: channel.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Total</span>
                <span className="text-lg font-bold text-gray-900">224</span>
              </div>
            </div>
          </motion.div>

          {/* Alertes avec icônes */}
          <motion.div variants={scaleIn} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Alertes</h2>
              <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full">3 urgent</span>
            </div>

            <div className="space-y-3">
              {[
                { type: "error", message: "Panne API Paiement", time: "2 min" },
                { type: "warning", message: "Pic de charge serveur", time: "8 min" },
                { type: "info", message: "Maintenance planifiée", time: "2 h" },
              ].map((alert, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
                  {alert.type === "error" && <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />}
                  {alert.type === "warning" && <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />}
                  {alert.type === "info" && <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />}
                  
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Il y a {alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Score de performance */}
          <motion.div variants={scaleIn} className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl border border-violet-100 shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Globale</h2>

            <div className="space-y-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-sm mb-3">
                  <span className="text-3xl font-bold text-violet-600">A+</span>
                </div>
                <p className="text-sm text-gray-600">Score d'efficacité</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">94%</p>
                  <p className="text-xs text-gray-600 mt-1">Satisfaction</p>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-gray-900">1.2m</p>
                  <p className="text-xs text-gray-600 mt-1">Temps moyen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </PageWrapper>
    </>
  );
}