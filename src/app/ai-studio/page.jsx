"use client";

import Header from "@/components/layout/Header";
import PageWrapper from "@/components/ui/PageWrapper";
import { Sparkles, Bot, UploadCloud, Settings2, Save, MessageSquare } from "lucide-react";

export default function AIStudioPage() {
  return (
    <PageWrapper className="p-2 md:p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent flex items-center gap-3">
          <Sparkles className="text-purple-500" size={28} /> PulsAI Studio
        </h1>
        <p className="text-gray-500 mt-2">Entraînez et configurez votre assistant virtuel intelligent.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <UploadCloud className="text-primary" size={20} /> Base de connaissances
            </h2>
            <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50 hover:bg-blue-50 hover:border-blue-300 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm group-hover:scale-110 transition-transform">
                <UploadCloud className="text-gray-400 group-hover:text-primary transition-colors" size={24} />
              </div>
              <p className="text-sm font-medium text-gray-900">Glissez-déposez vos documents ici</p>
              <p className="text-xs text-gray-500 mt-1">PDF, DOCX, ou URLs de votre site web (Max 50MB)</p>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg">
                <span className="text-sm text-gray-600 flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> FAQ_2026.pdf</span>
                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Indexé</span>
              </div>
            </div>
          </div>

          {/* Bloc Personnalité */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Settings2 className="text-purple-500" size={20} /> Personnalité & Ton
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Prompt Système (Directives)</label>
                <textarea 
                  rows="4" 
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-none"
                  defaultValue="Tu es PulsAI, l'assistant virtuel de Harnix. Tu dois être professionnel, concis et toujours proposer une solution. Si tu ne connais pas la réponse, dis simplement que tu ne sais pas."
                />
              </div>
              <div className="pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition shadow-lg">
                  <Save size={18} /> Sauvegarder l'IA
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Colonne Test (Playground) */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden flex flex-col h-[600px] sticky top-24">
          <div className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
              <Bot className="text-white" size={20} />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">Simulateur PulsAI</h3>
              <p className="text-xs text-blue-100">Testez votre configuration en direct</p>
            </div>
          </div>
          
          <div className="flex-1 bg-slate-50 p-4 overflow-y-auto space-y-4">
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 text-gray-800 text-sm p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
                Bonjour ! Je viens d'être mis à jour. Posez-moi une question pour tester ma base de connaissances. ✨
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-primary text-white text-sm p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
                Quelle est notre politique de remboursement ?
              </div>
            </div>
          </div>

          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl p-1.5 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
              <input type="text" placeholder="Testez le bot..." className="flex-1 bg-transparent px-3 text-sm outline-none" />
              <button className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                <MessageSquare size={16} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}