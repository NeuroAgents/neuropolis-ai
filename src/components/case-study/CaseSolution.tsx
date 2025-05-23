"use client";

import { useTheme } from "@/context/ThemeContext";
import CaseSection from "./CaseSection";
import { motion } from "framer-motion";
import {
  FiZap,
  FiSettings,
  FiTerminal,
  FiBox,
  FiMessageSquare,
  FiPhoneCall,
  FiMail,
  FiGlobe,
  FiArrowRight,
  FiCode,
  FiServer,
  FiDatabase,
  FiCpu,
} from "react-icons/fi"; // Иконки

interface SolutionFeature {
  title: string;
  items: string[];
  icon: React.ComponentType<{ className?: string }>; // Тип для иконки
}

interface CaseSolutionProps {
  description: string;
  features: SolutionFeature[];
  technicalDetails?: string;
  techPoints?: string[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Вариант анимации для технической секции
const techSectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delayChildren: 0.2,
      staggerChildren: 0.12,
    },
  },
};

// Маппинг для иконок Features
const featureIconMap: {
  [key: string]: React.ComponentType<{ className?: string }>;
} = {
  "Многоканальное присутствие": FiGlobe,
  "Основные функции": FiSettings,
  Default: FiBox, // Иконка по умолчанию
};

// Маппинг для иконок технических особенностей
const techIconMap: React.ComponentType<{ className?: string }>[] = [
  FiServer,
  FiDatabase,
  FiCode,
  FiCpu,
  FiTerminal,
];

export default function CaseSolution({
  description,
  features,
  technicalDetails,
  techPoints,
}: CaseSolutionProps) {
  const { isDark } = useTheme();

  return (
    <CaseSection title="🤖 Предложенное решение">
      <motion.p
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mb-10 text-lg leading-relaxed max-w-4xl"
      >
        {description}
      </motion.p>

      {features.length > 0 && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => {
            const Icon =
              feature.icon ||
              featureIconMap[feature.title] ||
              featureIconMap.Default; // Используем переданную иконку или маппинг
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                  boxShadow: isDark
                    ? "0 15px 30px rgba(0, 0, 0, 0.5)"
                    : "0 15px 30px rgba(0, 0, 0, 0.1)",
                }}
                className={`p-7 rounded-2xl flex flex-col transition-all duration-300 border shadow-md h-full ${
                  isDark
                    ? "bg-gradient-to-br from-gray-800/60 to-gray-900/60 border-gray-700/40 hover:border-blue-600/50"
                    : "bg-gradient-to-br from-white to-gray-50/90 border-gray-200/70 hover:border-blue-300"
                }`}
              >
                <div className="flex items-center mb-5">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4 transform transition-all duration-500 ${
                      isDark
                        ? "bg-gradient-to-br from-blue-800/70 to-blue-900/70 text-blue-300"
                        : "bg-gradient-to-br from-blue-100 to-blue-200/80 text-blue-600"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className={`font-bold text-xl ${
                      isDark ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {feature.title}
                  </h3>
                </div>
                <ul
                  className={`list-none pl-0 space-y-3 text-base flex-grow ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div
                        className={`mr-3 mt-1 text-xs ${
                          isDark ? "text-blue-400" : "text-blue-600"
                        }`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.33333 8L7.33333 10L10.6667 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="8"
                            cy="8"
                            r="7"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {technicalDetails && (
        <motion.div
          variants={techSectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className={`relative mt-20 mb-16 overflow-hidden rounded-3xl shadow-xl border ${
            isDark
              ? "bg-gradient-to-br from-[#121929] to-[#0d1117] border-blue-900/30"
              : "bg-gradient-to-br from-blue-50/90 to-indigo-50/80 border-blue-200/60"
          }`}
        >
          {/* Декоративные элементы фона */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div
              className={`absolute w-96 h-96 rounded-full blur-3xl ${
                isDark ? "bg-blue-800/5" : "bg-blue-200/30"
              } -top-20 -right-20`}
            ></div>
            <div
              className={`absolute w-96 h-96 rounded-full blur-3xl ${
                isDark ? "bg-indigo-800/5" : "bg-indigo-200/30"
              } -bottom-20 -left-20`}
            ></div>
          </div>

          {/* Заголовок с иконкой */}
          <div className="text-center pt-10 pb-6">
            <div className="flex items-center justify-center gap-3">
              <div
                className={`inline-flex w-14 h-14 rounded-xl items-center justify-center ${
                  isDark
                    ? "bg-gradient-to-br from-blue-600/20 to-blue-800/20 text-blue-400"
                    : "bg-gradient-to-br from-blue-400/15 to-blue-600/15 text-blue-600"
                }`}
              >
                <FiServer className="w-7 h-7" />
              </div>
              <h3
                className={`text-3xl font-bold ${
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300"
                    : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                }`}
              >
                Ключевые технические особенности
              </h3>
            </div>

            {/* Основное описание */}
            <motion.p
              variants={itemVariants}
              className={`mt-4 mb-10 text-lg max-w-3xl mx-auto px-6 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {technicalDetails}
            </motion.p>
          </div>

          {/* Технические пункты */}
          {techPoints && techPoints.length > 0 && (
            <div className="px-8 pb-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {techPoints.map((point, index) => {
                  const IconComponent = techIconMap[index % techIconMap.length];
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{
                        y: -5,
                        x: 0,
                        transition: { duration: 0.2 },
                        boxShadow: isDark
                          ? "0 12px 24px rgba(0, 0, 0, 0.4)"
                          : "0 12px 24px rgba(0, 0, 0, 0.08)",
                      }}
                      className={`flex items-center p-5 rounded-xl transform transition-all duration-300 ${
                        isDark
                          ? "bg-gray-800/40 border border-blue-800/20 hover:border-blue-700/40"
                          : "bg-white/50 border border-blue-200/50 hover:border-blue-300/70"
                      }`}
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                            isDark
                              ? "bg-gradient-to-br from-blue-800/40 to-blue-900/40 text-blue-300"
                              : "bg-gradient-to-br from-blue-100 to-blue-200/80 text-blue-600"
                          }`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span
                          className={`block ${
                            isDark ? "text-gray-200" : "text-gray-700"
                          } text-base`}
                          dangerouslySetInnerHTML={{ __html: point }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </CaseSection>
  );
}
