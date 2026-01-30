"use client";

import Header from "@/components/layout/Header";
import { Mail, Phone, MapPin, Plus } from "lucide-react";
import { motion } from "framer-motion";
import PageWrapper from "@/components/ui/PageWrapper"; 

const teamMembers = [
  {
    id: 1,
    name: "Nelson Harry AWOUDO",
    role: "Admin Système",
    email: "harryawoudo@gmail.com",
    avatar: "NA",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    name: "Karen HOUEHA",
    role: "Support Lead",
    email: "karen@harnix.bj",
    avatar: "KH",
    color: "bg-purple-100 text-purple-600"
  },
  {
    id: 3,
    name: "Stephane GNACADJA",
    role: "Développeur",
    email: "stephane@harnix.bj",
    avatar: "SG",
    color: "bg-orange-100 text-orange-600"
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function TeamPage() {
  return (
    <div className="p-2">
      <div className="flex justify-between items-start mb-6">
        <Header title="Mon Équipe" />
        <button className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-neutral-800 transition shadow-lg shadow-neutral-900/20">
          <Plus size={18} />
          <span>Ajouter un membre</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-center mb-4">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold ${member.color} group-hover:scale-110 transition-transform`}>
                {member.avatar}
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="font-bold text-neutral-900">{member.name}</h3>
              <p className="text-sm text-primary font-medium">{member.role}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
                <Mail size={16} />
                <span className="truncate">{member.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500 bg-gray-50 p-2 rounded-lg">
                <Phone size={16} />
                <span>+229 01 00 00 00 00</span>
              </div>
            </div>

            <button className="w-full mt-4 py-2 border border-gray-200 text-neutral-900 rounded-xl text-sm font-medium hover:border-primary hover:text-primary transition-colors">
              Voir le profil
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}