"use client";

import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useGsap";
import { CROPS } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { y: 20 },
  visible: { y: 0, transition: { duration: 0.5 } },
};

export default function Crops() {
  const ref = useScrollFadeIn();

  return (
    <section id="crops" className="py-24 md:py-32 section-padding bg-white">
      <SectionHeading
        label="Производственный профиль"
        title="Диверсификация культур"
        subtitle="Широкий портфель культур снижает климатические и ценовые риски и поддерживает экспортный потенциал"
        center
      />

      <div ref={ref}>
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CROPS.map((crop) => (
            <motion.div
              key={crop.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -4 }}
              className="bg-cream rounded-sm border border-gray-200/60 p-6 text-center cursor-default transition-shadow hover:shadow-md"
            >
              <span className="text-3xl block mb-3">{crop.icon}</span>
              <span className="text-sm font-medium text-graphite">{crop.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
