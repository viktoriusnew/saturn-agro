"use client";

import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useGsap";
import SectionHeading from "@/components/ui/SectionHeading";

const CROPS_PLAN = [
  "пшеница",
  "подсолнечник",
  "соя",
  "рапс",
  "кукуруза",
  "ячмень",
  "горох",
  "нут",
  "чечевица",
  "сорго",
  "бахчевые культуры",
  "чеснок",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { y: 16 },
  visible: { y: 0, transition: { duration: 0.4 } },
};

export default function Section04Crops() {
  const ref = useScrollFadeIn();

  return (
    <section id="section-4" className="py-24 md:py-32 section-padding bg-white">
      <SectionHeading
        label="Раздел 4"
        title="Производственный профиль"
        subtitle=""
        center
      />

      <div ref={ref} className="max-w-6xl mx-auto px-4">
        <p className="text-graphite text-lg leading-relaxed mb-6 text-center">
          Диверсифицированный портфель культур:
        </p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {CROPS_PLAN.map((name) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-cream rounded-sm border border-gray-200/60 py-4 px-4 text-center capitalize hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-medium text-graphite">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-graphite text-lg leading-relaxed text-center">
          Диверсификация снижает рыночные и климатические риски и обеспечивает экспортный потенциал.
        </p>
      </div>
    </section>
  );
}
