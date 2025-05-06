"use client";

import { motion } from "framer-motion";

export default function StrategicConsultingProblems() {
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

  const problems = [
    {
      id: 1,
      title: "Отсутствие четкой ИИ-стратегии",
      description:
        "Компании внедряют ИИ-технологии без продуманного стратегического плана, что приводит к разрозненным инициативам, неэффективному использованию ресурсов и низкой отдаче от инвестиций.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-blue-500"
        >
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Непонимание бизнес-ценности ИИ",
      description:
        "Руководители часто не понимают, какую конкретную пользу ИИ может принести их бизнесу, и не могут определить приоритетные области для внедрения, что ведет к нерациональным инвестициям.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-blue-500"
        >
          <path
            fill="currentColor"
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Нехватка ИИ-компетенций",
      description:
        "Компаниям не хватает внутренней экспертизы для выбора, оценки и внедрения ИИ-решений, что создает зависимость от внешних поставщиков и снижает возможности адаптации под специфику бизнеса.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-blue-500"
        >
          <path
            fill="currentColor"
            d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v6h2V8zm-1-3c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Сопротивление персонала изменениям",
      description:
        "Сотрудники опасаются автоматизации и сокращений, не обладают необходимыми навыками для работы с ИИ, что создает барьеры для внедрения и снижает эффективность новых технологий.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-blue-500"
        >
          <path
            fill="currentColor"
            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Интеграционные сложности",
      description:
        "Интеграция ИИ-решений с существующими системами и процессами часто оказывается сложнее, чем ожидалось, требует значительных ресурсов и может нарушить работу критических бизнес-функций.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-blue-500"
        >
          <path
            fill="currentColor"
            d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Юридические и этические риски",
      description:
        "Непонимание юридических ограничений и этических аспектов использования ИИ создает риски нарушения законодательства, потери репутации и доверия клиентов, и потенциальных судебных исков.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-blue-500"
        >
          <path
            fill="currentColor"
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="strategic-problems"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
              Ключевые проблемы при внедрении{" "}
              <span className="text-[#0167F3] dark:text-blue-400">
                ИИ в бизнес
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              80% проектов по внедрению искусственного интеллекта не приносят
              ожидаемой пользы бизнесу. Наш опыт позволяет выявить и решить эти
              проблемы на ранних этапах.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {problems.map((problem) => (
              <motion.div
                key={problem.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 p-2 bg-blue-500/10 rounded-lg">
                    {problem.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mt-14 text-center" variants={itemVariants}>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium mb-6">
              Эти проблемы взаимосвязаны и усиливают друг друга, приводя к
              потере инвестиций и упущенным возможностям
            </p>
            <a
              href="#strategic-solution"
              className="inline-flex items-center text-[#0167F3] dark:text-blue-400 font-medium"
            >
              Узнайте, как мы решаем эти проблемы
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path
                  d="M4.16797 10H15.8346"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8346 5L15.8346 10L10.8346 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
