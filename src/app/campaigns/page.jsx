"use client";

import Header from "@/components/layout/Header";
import PageWrapper from "@/components/ui/PageWrapper";
import { Plus, Send, MousePointerClick, Eye, AlertCircle } from "lucide-react";

const campaigns = [
  { id: 1, name: "Newsletter Février", status: "Active", sent: 12500, openRate: 45.2, clickRate: 12.4, color: "bg-green-500" },
  { id: 2, name: "Promo Black Friday", status: "Terminée", sent: 45000, openRate: 68.9, clickRate: 24.1, color: "bg-gray-400" },
  { id: 3, name: "Relance Panier (Auto)", status: "Active", sent: 840, openRate: 52.1, clickRate: 18.5, color: "bg-green-500" },
  { id: 4, name: "Webinaire IA", status: "Brouillon", sent: 0, openRate: 0, clickRate: 0, color: "bg-orange-400" },
];

export default function CampaignsPage() {
  return (
    <PageWrapper className="p-2 md:p-4">
      <div className="flex justify-between items-start mb-6">
        <Header title="Campagnes Marketing" />
        <button className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-primary text-white text-sm font-medium rounded-xl hover:bg-blue-600 transition shadow-lg shadow-blue-200">
          <Plus size={18} /> Créer une campagne
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {campaigns.map((camp) => (
          <div key={camp.id} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">{camp.name}</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className={`w-2 h-2 rounded-full ${camp.color}`} />
                  <span className="text-xs text-gray-500 font-medium">{camp.status}</span>
                </div>
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition">
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-3 rounded-xl text-center">
                <Send size={16} className="mx-auto text-gray-400 mb-1" />
                <p className="text-lg font-bold text-gray-900">{camp.sent.toLocaleString()}</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold">Envoyés</p>
              </div>
              <div className="bg-blue-50/50 p-3 rounded-xl text-center border border-blue-50">
                <Eye size={16} className="mx-auto text-blue-400 mb-1" />
                <p className="text-lg font-bold text-blue-700">{camp.openRate}%</p>
                <p className="text-[10px] text-blue-500 uppercase font-bold">Ouvertures</p>
              </div>
              <div className="bg-purple-50/50 p-3 rounded-xl text-center border border-purple-50">
                <MousePointerClick size={16} className="mx-auto text-purple-400 mb-1" />
                <p className="text-lg font-bold text-purple-700">{camp.clickRate}%</p>
                <p className="text-[10px] text-purple-500 uppercase font-bold">Clics</p>
              </div>
            </div>

            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mb-4">
               <div className="bg-primary h-full rounded-full" style={{ width: `${camp.openRate}%` }}></div>
            </div>

            <button className="w-full py-2.5 text-sm font-medium text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 hover:text-primary transition">
              Voir les statistiques détaillées
            </button>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}


const MoreHorizontal = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
  </svg>
);