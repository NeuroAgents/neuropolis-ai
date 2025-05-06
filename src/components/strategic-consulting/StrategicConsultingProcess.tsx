"use client";

import { motion } from "framer-motion";

export default function StrategicConsultingProcess() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const steps = [
    {
      id: 1,
      title: "Диагностика и анализ",
      description:
        "Проводим комплексный анализ вашего бизнеса, оцениваем текущую готовность к внедрению ИИ, изучаем существующие процессы, инфраструктуру и компетенции персонала.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 9a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
          <path d="M12 12a8 8 0 0 0 -8 8h16a8 8 0 0 0 -8 -8"></path>
          <path d="M10 3h.01"></path>
          <path d="M3 10h.01"></path>
          <path d="M3 14h.01"></path>
          <path d="M21 10h.01"></path>
          <path d="M21 14h.01"></path>
          <path d="M14 3h.01"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Стратегическое планирование",
      description:
        "Разрабатываем детальную ИИ-стратегию, согласованную с вашими бизнес-целями, определяем приоритетные направления внедрения и формируем инвестиционный план.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 7m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M16 15m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M6 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M16 8l-11 4"></path>
          <path d="M7 16l9 -4"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Формирование дорожной карты",
      description:
        "Создаем детальную дорожную карту внедрения ИИ с конкретными этапами, сроками, необходимыми ресурсами и ключевыми показателями эффективности для каждого этапа.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
          <path d="M12 7v5l3 3"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Развитие компетенций",
      description:
        "Разрабатываем программы обучения для ваших сотрудников, повышая их квалификацию в области работы с ИИ, управления данными и новыми бизнес-процессами.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 21h18"></path>
          <path d="M5 21v-12l2 -3h10l2 3v12"></path>
          <path d="M9 21v-8h6v8"></path>
          <path d="M10 6v-3h4v3"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Пилотное внедрение",
      description:
        "Реализуем пилотные проекты по внедрению ИИ в выбранных областях для быстрого получения результатов и валидации подхода, минимизируя риски полномасштабного внедрения.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-6.5m10 9h5.5a2 2 0 0 0 2 -2v-8.5a2 2 0 0 0 -2 -2h-5.5"></path>
          <path d="M9 7h6v2a3 3 0 0 1 -6 0v-2z"></path>
          <path d="M3 10h7v2a3 3 0 0 1 -6 0v-2h-1"></path>
          <path d="M14 10h7v2a3 3 0 0 1 -6 0v-2h-1"></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Масштабирование и оптимизация",
      description:
        "На основе результатов пилотных проектов масштабируем успешные решения на всю организацию, постоянно оптимизируя процессы и технологии для максимального эффекта.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 16v-8l7 4z"></path>
          <path d="M3 8m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Как мы реализуем{" "}
              <span className="text-[#0167F3] dark:text-blue-400">
                ИИ-стратегию
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Мы применяем проверенную методологию внедрения ИИ, адаптируя
              каждый этап под уникальные потребности и особенности вашего
              бизнеса.
            </p>
          </motion.div>

          <motion.div className="relative" variants={itemVariants}>
            {/* Соединительная линия */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600 transform -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`flex flex-col lg:flex-row lg:gap-10 items-center ${
                    index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <div
                      className={`bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${
                        index % 2 === 0
                          ? "lg:ml-auto lg:mr-0 lg:text-right"
                          : "lg:mr-auto lg:ml-0"
                      }`}
                    >
                      <div
                        className={`flex items-start gap-4 ${
                          index % 2 === 0 ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <div className="p-3 rounded-lg bg-blue-500 bg-opacity-10 text-blue-600 dark:text-blue-400 flex-shrink-0">
                          {step.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0167F3] text-white flex items-center justify-center font-bold text-lg">
                              {step.id}
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Соединитель для мобильной версии */}
                  <div className="lg:hidden h-10 w-0.5 bg-blue-500"></div>

                  {/* Соединитель для десктопной версии */}
                  <div
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-14 h-0.5 bg-blue-500"
                    style={{
                      top: `calc(${index * 100}% + ${index * 48}px + 2.5rem)`,
                    }}
                  ></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="text-center mt-16" variants={itemVariants}>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium mb-6">
              Наш подход обеспечивает плавный переход к использованию
              ИИ-технологий и максимальную отдачу от инвестиций
            </p>
            <a
              href="#cta"
              className="inline-block bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-600/20"
            >
              Начать внедрение ИИ в бизнес
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
