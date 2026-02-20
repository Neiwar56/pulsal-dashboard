"use client";

import Header from "@/components/layout/Header";
import PageWrapper from "@/components/ui/PageWrapper";
import { Search, Filter, Download, MoreHorizontal, Mail, Phone } from "lucide-react";

const contacts = [
  { id: 1, name: "Marc TOGNON", email: "mtognon@techcorp.fr", company: "TechCorp", status: "Client", score: 98, lastActive: "Il y a 2h" },
  { id: 2, name: "Célio DeCHACUS", email: "cdechacus@meta.com", company: "Meta", status: "Prospect", score: 65, lastActive: "Hier" },
  { id: 3, name: "Jean ESSOU", email: "jessou@design.co", company: "DesignCo", status: "Lead Chaud", score: 85, lastActive: "Aujourd'hui" },
  { id: 4, name: "Peter Kata", email: "peter@boulangerie.fr", company: "Boulangerie", status: "Inactif", score: 12, lastActive: "Il y a 2 mois" },
  { id: 5, name: "Pollo", email: "pollo@gmail.com.com", company: "SpaceX", status: "Prospect", score: 45, lastActive: "Il y a 3j" },
];

export default function ContactsPage() {
  return (
    <PageWrapper className="p-2 md:p-4">
      <Header title="Base Contacts" />

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50/50">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            <input 
              type="text" 
              placeholder="Chercher un contact..." 
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 outline-none"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <Filter size={16} /> Filtres
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <Download size={16} /> Exporter
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-blue-600 transition shadow-sm">
              + Nouveau Contact
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Entreprise</th>
                <th className="px-6 py-4 font-medium">Statut</th>
                <th className="px-6 py-4 font-medium">Score IA</th>
                <th className="px-6 py-4 font-medium">Dernière act.</th>
                <th className="px-6 py-4 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact.id} className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs">
                        {contact.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{contact.name}</div>
                        <div className="text-gray-500 text-xs">{contact.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">{contact.company}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      contact.status === 'Client' ? 'bg-green-100 text-green-700' :
                      contact.status === 'Lead Chaud' ? 'bg-orange-100 text-orange-700' :
                      contact.status === 'Prospect' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${contact.score > 80 ? 'bg-green-500' : contact.score > 40 ? 'bg-orange-400' : 'bg-red-400'}`}
                          style={{ width: `${contact.score}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-gray-700">{contact.score}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-xs">{contact.lastActive}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 text-gray-400">
                      <button className="p-1.5 hover:text-primary hover:bg-blue-50 rounded-md transition"><Mail size={16} /></button>
                      <button className="p-1.5 hover:text-primary hover:bg-blue-50 rounded-md transition"><Phone size={16} /></button>
                      <button className="p-1.5 hover:text-gray-900 hover:bg-gray-100 rounded-md transition"><MoreHorizontal size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageWrapper>
  );
}