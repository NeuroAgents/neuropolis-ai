"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function StrategicConsultingContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    industry: "",
    agreement: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Здесь должен быть код для отправки данных на сервер
      // Симулируем отправку
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        industry: "",
        agreement: false,
      });
    } catch (err) {
      setError(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="cta"
      className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                Трансформируйте ваш бизнес с помощью{" "}
                <span className="text-[#0167F3] dark:text-blue-400">
                  искусственного интеллекта
                </span>
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                Заполните форму, чтобы получить бесплатную консультацию наших
                экспертов по стратегическому внедрению ИИ в ваш бизнес.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-[#0167F3] dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                      Персональный подход
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Индивидуальная консультация с экспертом, который
                      специализируется на вашей отрасли и понимает специфические
                      задачи вашего бизнеса.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-[#0167F3] dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                      Конкретные рекомендации
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Вы получите практические советы и рекомендации по
                      внедрению ИИ, которые можно начать реализовывать сразу
                      после консультации.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-500 bg-opacity-10 text-[#0167F3] dark:text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                      <path d="M4 9h16"></path>
                      <path d="M9 4v16"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                      Ценность без обязательств
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Консультация полностью бесплатна и не влечет за собой
                      никаких обязательств по заключению контракта или
                      продолжению сотрудничества.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Имя *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-colors"
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Компания *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-colors"
                        placeholder="ООО Компания"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-colors"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-colors"
                        placeholder="+7 (999) 123-45-67"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="industry"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Отрасль
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-colors"
                    >
                      <option value="">Выберите отрасль</option>
                      <option value="finance">Финансы и банкинг</option>
                      <option value="retail">Ритейл и eCommerce</option>
                      <option value="manufacturing">Производство</option>
                      <option value="healthcare">Здравоохранение</option>
                      <option value="telecom">Телекоммуникации</option>
                      <option value="logistics">Логистика и транспорт</option>
                      <option value="education">Образование</option>
                      <option value="energy">Энергетика</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Расскажите о вашем проекте или задаче *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-colors resize-none"
                      placeholder="Опишите, какие задачи вы хотите решить с помощью ИИ"
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleChange}
                      required
                      className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="agreement"
                      className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
                    >
                      Я согласен на обработку персональных данных и принимаю{" "}
                      <a
                        href="#"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        условия использования
                      </a>
                      *
                    </label>
                  </div>

                  {error && <div className="text-red-500 text-sm">{error}</div>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 text-white font-medium rounded-xl transition-all ${
                      isSubmitting
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:shadow-lg hover:shadow-blue-500/20"
                    }`}
                  >
                    {isSubmitting ? "Отправка..." : "Получить консультацию"}
                  </button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    * Обязательные поля
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center py-10"
                >
                  <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-full mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-green-600 dark:text-green-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    Спасибо за заявку!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Ваша заявка успешно отправлена. Наш эксперт свяжется с вами
                    в ближайшее время для согласования деталей консультации.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block px-6 py-3 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-medium rounded-xl hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                  >
                    Отправить еще одну заявку
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
