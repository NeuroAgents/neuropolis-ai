"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import WorkflowAutomationHero from "./WorkflowAutomationHero";
import WorkflowAutomationProblems from "./WorkflowAutomationProblems";
import WorkflowAutomationSolution from "./WorkflowAutomationSolution";
import WorkflowAutomationUseCases from "./WorkflowAutomationUseCases";
import WorkflowAutomationProcess from "./WorkflowAutomationProcess";
import WorkflowAutomationWhyUs from "./WorkflowAutomationWhyUs";
import WorkflowAutomationFAQ from "./WorkflowAutomationFAQ";
import WorkflowAutomationContactForm from "./WorkflowAutomationContactForm";

export default function WorkflowAutomationPage() {
  // Анимация для плавного появления страницы
  const pageFadeIn = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Эффект для плавного скролла к якорным ссылкам
  useEffect(() => {
    const handleScroll = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isAnchor =
        target.tagName === "A" && target.getAttribute("href")?.startsWith("#");

      if (isAnchor) {
        event.preventDefault();
        const targetId = target.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Отступ для учета фиксированной шапки
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleScroll);

    return () => {
      document.removeEventListener("click", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 to-white text-gray-800 font-sans dark:from-blue-950/10 dark:to-gray-950 dark:text-white"
      variants={pageFadeIn}
      initial="hidden"
      animate="show"
    >
      {/* Декоративный элемент - волнистая линия сверху */}
      <div className="absolute top-0 left-0 right-0 h-3 z-10 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-6 text-blue-500/10 dark:text-blue-700/10"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Главный контент */}
      <WorkflowAutomationHero />
      <WorkflowAutomationProblems />
      <WorkflowAutomationSolution />
      <WorkflowAutomationUseCases />
      <WorkflowAutomationProcess />
      <WorkflowAutomationWhyUs />
      <WorkflowAutomationFAQ />
      <WorkflowAutomationContactForm />

      {/* Декоративный элемент - волнистая линия снизу */}
      <div className="relative h-12 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-12 text-blue-50/50 dark:text-blue-950/10"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="currentColor"
          />
        </svg>

        <div className="container mx-auto text-center text-white text-xs py-2 z-10 relative">
          <p>© 2025 Нейрополис. Все права защищены.</p>
        </div>
      </div>
    </motion.div>
  );
}
