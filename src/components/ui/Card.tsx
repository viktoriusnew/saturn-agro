"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-white rounded-sm border border-gray-200/60 p-8 ${className}`}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: "0 12px 40px rgba(26, 26, 46, 0.08)",
              borderColor: "rgba(196, 163, 90, 0.3)",
            }
          : undefined
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
