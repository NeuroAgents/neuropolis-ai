"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import StrategicConsultingHero from "./StrategicConsultingHero";
import StrategicConsultingProblems from "./StrategicConsultingProblems";
import StrategicConsultingSolution from "./StrategicConsultingSolution";
import StrategicConsultingUseCases from "./StrategicConsultingUseCases";
import StrategicConsultingWhyUs from "./StrategicConsultingWhyUs";
import StrategicConsultingProcess from "./StrategicConsultingProcess";
import StrategicConsultingFAQ from "./StrategicConsultingFAQ";
import StrategicConsultingContactForm from "./StrategicConsultingContactForm";

export default function StrategicConsultingPage() {
  // Вариант для плавной анимации появления всей страницы
  const pageFadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    // Оборачиваем все в motion.div для общей анимации
    <motion.div
      className="bg-gray-50 text-gray-800 font-sans dark:bg-black dark:text-white"
      variants={pageFadeIn}
      initial="hidden"
      animate="show"
    >
      <StrategicConsultingHero />
      <StrategicConsultingProblems />
      <StrategicConsultingSolution />
      <StrategicConsultingUseCases />
      <StrategicConsultingProcess />
      <StrategicConsultingWhyUs />
      <StrategicConsultingFAQ />
      <StrategicConsultingContactForm />
    </motion.div>
  );
}
