"use client";

import { motion } from "framer-motion";

export default function PageWrapper({ children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Départ : invisible et 20px plus bas
      animate={{ opacity: 1, y: 0 }}  // Arrivée : visible et à sa place
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }} // Durée 0.4s
      className={className}
    >
      {children}
    </motion.div>
  );
}