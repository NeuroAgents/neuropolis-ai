"use client";

import { motion } from "framer-motion";

export default function StrategicConsultingWhyUs() {
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

  const benefits = [
    {
      id: 1,
      title: "Экспертиза мирового уровня",
      description:
        "Наша команда включает бывших руководителей ИИ-проектов из компаний Fortune 500, специалистов с опытом стратегического консалтинга в ведущих глобальных фирмах и экспертов в области машинного обучения.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Ориентация на бизнес-результат",
      description:
        "Мы фокусируемся не на технологиях ради технологий, а на достижении измеримых бизнес-результатов. Каждая наша рекомендация связана с конкретными KPI и имеет четкое экономическое обоснование.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 10h-3a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2 -2v-3a2 2 0 0 0 -2 -2z"></path>
          <path d="M9 5a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2v-3a2 2 0 0 1 2 -2h3z"></path>
          <path d="M19 10h-3a2 2 0 0 0 -2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2 -2v-3a2 2 0 0 0 -2 -2z"></path>
          <path d="M14 7a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2v-3z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Практический опыт внедрения",
      description:
        "В отличие от многих консалтинговых компаний, мы имеем реальный опыт разработки и внедрения ИИ-решений в различных отраслях. Мы понимаем не только теорию, но и практические сложности внедрения.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Комплексный подход",
      description:
        "Мы рассматриваем внедрение ИИ как часть общей стратегии цифровой трансформации, учитывая технологические, организационные, кадровые и процессные аспекты. Это обеспечивает целостный подход к изменениям.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
          <path d="M7 8h10"></path>
          <path d="M7 12h10"></path>
          <path d="M7 16h10"></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Индивидуальные решения",
      description:
        "Мы не предлагаем универсальные шаблоны. Каждый проект начинается с глубокого понимания специфики вашего бизнеса, его сильных сторон и болевых точек, что позволяет создавать по-настоящему эффективные стратегии.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "Прозрачность и передача знаний",
      description:
        "Наша цель – не только создать стратегию, но и обеспечить вашу команду знаниями и инструментами для ее успешной реализации. Мы работаем прозрачно, вовлекая ваших специалистов в процесс на всех этапах.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
          <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"></path>
          <path d="M3 6l0 13"></path>
          <path d="M12 6l0 13"></path>
          <path d="M21 6l0 13"></path>
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
              Почему стоит выбрать{" "}
              <span className="text-[#0167F3] dark:text-blue-400">нас</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Наш подход к стратегическому ИИ-консалтингу основан на уникальном
              сочетании глубокой экспертизы, практического опыта и
              клиентоориентированности.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                }}
              >
                <div className="p-3 rounded-lg bg-blue-500 bg-opacity-10 text-[#0167F3] dark:text-blue-400 inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 md:p-12 shadow-xl"
            variants={itemVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Готовы начать путь к успешной ИИ-трансформации?
            </h3>
            <p className="text-white text-opacity-90 max-w-2xl mx-auto mb-8 text-lg">
              Свяжитесь с нами сегодня, чтобы обсудить, как стратегический
              ИИ-консалтинг может помочь вашему бизнесу раскрыть новые
              возможности.
            </p>
            <a
              href="#cta"
              className="inline-block bg-white text-blue-600 font-semibold py-4 px-8 rounded-xl text-lg transition-all hover:shadow-lg hover:shadow-blue-700/20 hover:bg-blue-50"
            >
              Получить бесплатную консультацию
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
