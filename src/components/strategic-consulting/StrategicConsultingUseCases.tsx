"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function StrategicConsultingUseCases() {
  const [activeCase, setActiveCase] = useState(0);

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

  const slideVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const useCases = [
    {
      id: 0,
      industry: "Финансовый сектор",
      title: "Стратегия внедрения ИИ для крупного банка",
      description:
        "Разработали комплексную стратегию внедрения ИИ для топ-5 банка России, включающую автоматизацию клиентской поддержки, скоринг кредитов и выявление мошенничества.",
      results: [
        "Рост эффективности обработки клиентских запросов на 48%",
        "Сокращение времени принятия кредитных решений на 67%",
        "Снижение операционных издержек на 22% за 12 месяцев",
        "Повышение точности выявления мошеннических операций на 34%",
      ],
      image: "/assets/images/strategic-consulting/banking-case.jpg",
    },
    {
      id: 1,
      industry: "Ритейл",
      title: "Цифровая трансформация розничной сети",
      description:
        "Разработали и внедрили стратегию цифровой трансформации для федеральной розничной сети с использованием ИИ для персонализации предложений и оптимизации цепочки поставок.",
      results: [
        "Увеличение среднего чека на 14% благодаря персонализации",
        "Оптимизация запасов и снижение неликвидов на 18%",
        "Рост эффективности маркетинговых кампаний на 32%",
        "Повышение точности прогнозирования спроса до 93%",
      ],
      image: "/assets/images/strategic-consulting/retail-case.jpg",
    },
    {
      id: 2,
      industry: "Производство",
      title: "ИИ-стратегия для промышленного предприятия",
      description:
        "Создали дорожную карту внедрения искусственного интеллекта для крупного промышленного предприятия, фокусируясь на предиктивном обслуживании и оптимизации производственных процессов.",
      results: [
        "Снижение незапланированных простоев оборудования на 37%",
        "Повышение общей эффективности оборудования (OEE) на 18%",
        "Сокращение энергопотребления на 15% через оптимизацию",
        "Уменьшение затрат на техническое обслуживание на 23%",
      ],
      image: "/assets/images/strategic-consulting/manufacturing-case.jpg",
    },
    {
      id: 3,
      industry: "Здравоохранение",
      title: "Стратегия внедрения ИИ в медицинской сети",
      description:
        "Разработали стратегию внедрения ИИ-решений для сети частных клиник, включая системы поддержки принятия врачебных решений и оптимизацию административных процессов.",
      results: [
        "Повышение точности диагностики на 27% в ключевых направлениях",
        "Сокращение административной нагрузки на врачей на 35%",
        "Оптимизация расписания и рост пропускной способности на 22%",
        "Повышение удовлетворенности пациентов на 18%",
      ],
      image: "/assets/images/strategic-consulting/healthcare-case.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black overflow-hidden">
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
              Реальные примеры{" "}
              <span className="text-[#0167F3] dark:text-blue-400">
                успешного внедрения
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Мы помогли компаниям из различных отраслей разработать и
              реализовать стратегии внедрения искусственного интеллекта,
              обеспечивая измеримый бизнес-результат.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {useCases.map((useCase, index) => (
                <button
                  key={useCase.id}
                  className={`py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                    activeCase === index
                      ? "bg-[#0167F3] text-white shadow-lg shadow-blue-600/20"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setActiveCase(index)}
                >
                  {useCase.industry}
                </button>
              ))}
            </div>

            <motion.div
              key={activeCase}
              initial="hidden"
              animate="visible"
              variants={slideVariants}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-10">
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                    {useCases[activeCase].industry}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                    {useCases[activeCase].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {useCases[activeCase].description}
                  </p>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                      Ключевые результаты:
                    </h4>
                    <ul className="space-y-2">
                      {useCases[activeCase].results.map((result, idx) => (
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
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
                  <div className="h-full flex items-center justify-center">
                    <p className="text-white text-lg p-8 text-center">
                      [Изображение для кейса "{useCases[activeCase].industry}"]
                    </p>
                  </div>
                  {/* При наличии изображений раскомментировать следующий код
                  <Image
                    src={useCases[activeCase].image}
                    alt={useCases[activeCase].title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div className="text-center mt-14" variants={itemVariants}>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
              Хотите узнать, как стратегический ИИ-консалтинг может принести
              пользу именно вашему бизнесу?
            </p>
            <a
              href="#cta"
              className="inline-block bg-gradient-to-r from-[#0167F3] to-[#399AFC] text-white font-semibold py-3 px-8 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              Обсудить ваш проект
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
