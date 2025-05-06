"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function StrategicConsultingSolution() {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const solutions = [
    {
      id: 0,
      title: "ИИ-стратегия и дорожная карта",
      description:
        "Разрабатываем комплексную стратегию внедрения ИИ, согласованную с вашими бизнес-целями, определяя конкретные инициативы, их приоритеты и ожидаемые результаты.",
      benefits: [
        "Чёткое видение трансформации бизнеса с помощью ИИ",
        "Приоритизация ИИ-инициатив с наибольшей отдачей",
        "Пошаговый план внедрения с измеримыми результатами",
        "Согласованность ИИ-инициатив с общей бизнес-стратегией",
      ],
      image: "/assets/images/strategic-consulting/ai-strategy-roadmap.jpg",
    },
    {
      id: 1,
      title: "Оценка зрелости и аудит ИИ",
      description:
        "Проводим всесторонний анализ вашей текущей технологической инфраструктуры, компетенций, бизнес-процессов и готовности к внедрению ИИ, выявляя как возможности, так и ограничения.",
      benefits: [
        "Выявление слабых мест в существующих ИИ-инициативах",
        "Оценка технической и организационной готовности",
        "Анализ потенциала экономии и роста с помощью ИИ",
        "Выявление скрытых рисков для проактивного управления",
      ],
      image: "/assets/images/strategic-consulting/ai-maturity-assessment.jpg",
    },
    {
      id: 2,
      title: "Разработка бизнес-кейсов ИИ",
      description:
        "Создаем детальные бизнес-кейсы для конкретных ИИ-инициатив с анализом затрат, выгод, рисков и сроков окупаемости, обеспечивая обоснованные инвестиционные решения.",
      benefits: [
        "Точная оценка ROI и срока окупаемости ИИ-проектов",
        "Детализация необходимых ресурсов и затрат",
        "Количественная оценка бизнес-эффектов",
        "Обоснование для получения бюджета и поддержки руководства",
      ],
      image: "/assets/images/strategic-consulting/ai-business-case.jpg",
    },
    {
      id: 3,
      title: "Управление организационными изменениями",
      description:
        "Разрабатываем и реализуем программы по подготовке сотрудников к работе с ИИ, помогая преодолеть сопротивление изменениям и сформировать культуру, ориентированную на инновации.",
      benefits: [
        "Снижение сопротивления персонала изменениям",
        "Развитие необходимых компетенций для работы с ИИ",
        "Формирование культуры принятия решений на основе данных",
        "Ускорение внедрения и достижения результатов",
      ],
      image: "/assets/images/strategic-consulting/change-management.jpg",
    },
    {
      id: 4,
      title: "Управление данными для ИИ",
      description:
        "Создаем основу для успешного применения ИИ через оценку качества и доступности данных, разработку стратегии управления данными и внедрение необходимых процессов и инструментов.",
      benefits: [
        "Повышение качества и доступности данных",
        "Обеспечение соответствия нормативным требованиям",
        "Создание единой версии правды для всей организации",
        "Максимизация ценности данных как стратегического актива",
      ],
      image: "/assets/images/strategic-consulting/data-management.jpg",
    },
  ];

  return (
    <section
      id="strategic-solution"
      className="py-20 bg-white dark:bg-black overflow-hidden"
    >
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
              Наши решения для{" "}
              <span className="text-[#0167F3] dark:text-blue-400">
                успешного внедрения ИИ
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Мы разработали комплексный подход к стратегическому консалтингу в
              области искусственного интеллекта, который учитывает все аспекты
              успешной цифровой трансформации бизнеса.
            </p>
          </motion.div>

          <motion.div className="mb-12" variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
              {solutions.map((solution, index) => (
                <button
                  key={solution.id}
                  className={`py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeTab === index
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {solution.title}
                </button>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <motion.div
                    key={activeTab}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="h-full flex flex-col"
                  >
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                      {solutions[activeTab].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {solutions[activeTab].description}
                    </p>
                    <div className="mt-auto">
                      <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                        Ключевые преимущества:
                      </h4>
                      <ul className="space-y-2">
                        {solutions[activeTab].benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-[#0167F3] mr-2 mt-1 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="text-gray-600 dark:text-gray-300">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <motion.div
                    key={activeTab}
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    className="h-full"
                  >
                    <div className="h-full bg-blue-500 flex items-center justify-center">
                      <p className="text-white text-lg p-8 text-center">
                        [Место для изображения "{solutions[activeTab].title}"]
                      </p>
                    </div>
                    {/* При наличии изображений раскомментировать следующий код
                    <Image
                      src={solutions[activeTab].image}
                      alt={solutions[activeTab].title}
                      fill
                      className="object-cover"
                    />
                    */}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="text-center" variants={itemVariants}>
            <a
              href="#cta"
              className="inline-block bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold py-4 px-8 rounded-xl text-lg transition-opacity hover:opacity-90 shadow-xl"
            >
              Получить консультацию эксперта
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
