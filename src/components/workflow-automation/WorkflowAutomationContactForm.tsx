"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import {
  RiUser3Line,
  RiMailLine,
  RiPhoneLine,
  RiBuildingLine,
  RiMessage2Line,
  RiShieldLine,
  RiCheckboxCircleLine,
  RiFileSearchLine,
  RiSettings4Line,
  RiTeamLine,
} from "react-icons/ri";

// Функция для форматирования номера телефона
const formatPhoneNumber = (value: string): string => {
  // Удаляем все нецифровые символы
  const digits = value.replace(/\D/g, "");

  // Форматируем номер по маске +7 (XXX) XXX-XX-XX
  if (digits.length === 0) return "";
  if (digits.length <= 1) return `+${digits}`;
  if (digits.length <= 4) return `+${digits.slice(0, 1)} (${digits.slice(1)}`;
  if (digits.length <= 7)
    return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(4)}`;
  if (digits.length <= 9)
    return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(
      4,
      7
    )}-${digits.slice(7)}`;

  return `+${digits.slice(0, 1)} (${digits.slice(1, 4)}) ${digits.slice(
    4,
    7
  )}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
};

export interface ContactFormProps {
  title?: string;
  subtitle?: string;
  submitButtonText?: string;
  showCompanyField?: boolean;
  showPhoneField?: boolean;
  showFeatures?: boolean;
  showConfidentiality?: boolean;
  useContainer?: boolean;
  className?: string;
  fullWidth?: boolean;
  formId?: string;
  features?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  confidentialityText?: string;
  formLabels?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
    agreement?: string;
  };
  placeholders?: {
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
    message?: string;
  };
  successMessage?: {
    title?: string;
    text?: string;
  };
  onSubmitSuccess?: (formData: any) => void;
  onSubmitError?: (error: any) => void;
  customSubmit?: (formData: any) => Promise<void>;
  backgroundColor?: string;
  privacyPolicyUrl?: string;
}

const defaultFeatures = [
  {
    icon: <RiFileSearchLine />,
    title: "Бесплатный аудит процессов",
    description:
      "Проведем предварительный анализ ваших бизнес-процессов и определим возможности для автоматизации.",
  },
  {
    icon: <RiSettings4Line />,
    title: "Индивидуальное решение",
    description:
      "Разработаем персонализированное решение, учитывающее специфику вашего бизнеса и существующую инфраструктуру.",
  },
  {
    icon: <RiTeamLine />,
    title: "Команда экспертов",
    description:
      "С вами будут работать опытные специалисты с многолетним опытом в автоматизации процессов различной сложности.",
  },
];

export default function ContactForm({
  title = "Готовы автоматизировать ваш бизнес?",
  subtitle = "Оставьте заявку, и наши эксперты свяжутся с вами в течение одного рабочего дня для обсуждения вашего проекта и предоставления бесплатной консультации.",
  submitButtonText = "Отправить заявку",
  showCompanyField = true,
  showPhoneField = true,
  showFeatures = true,
  showConfidentiality = true,
  useContainer = false,
  className = "",
  fullWidth = true,
  formId = "contact-form",
  features = defaultFeatures,
  confidentialityText = "Мы ценим ваше доверие и гарантируем полную конфиденциальность всей информации, которую вы предоставляете нам. Ваши данные защищены в соответствии с законодательством.",
  formLabels = {
    name: "Ваше имя",
    email: "Email",
    phone: "Телефон",
    company: "Компания",
    message: "Сообщение",
    agreement:
      "Я согласен с политикой конфиденциальности и обработкой персональных данных",
  },
  placeholders = {
    name: "Иван Иванов",
    email: "ivan@company.com",
    phone: "+7 (999) 123-45-67",
    company: "ООО Компания",
    message: "Расскажите о вашем проекте или задайте вопрос",
  },
  successMessage = {
    title: "Спасибо за заявку!",
    text: "Ваше сообщение успешно отправлено. Наши эксперты свяжутся с вами в ближайшее время.",
  },
  onSubmitSuccess,
  onSubmitError,
  customSubmit,
  backgroundColor,
  privacyPolicyUrl = "/privacy-policy",
}: ContactFormProps) {
  const { isDark } = useTheme();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    agreement: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Применяем маску к номеру телефона
    if (name === "phone") {
      setFormState({
        ...formState,
        [name]: formatPhoneNumber(value),
      });
    } else {
      setFormState({
        ...formState,
        [name]: value,
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      agreement: e.target.checked,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Если предоставлена функция кастомной отправки формы, используем её
      if (customSubmit) {
        await customSubmit(formState);
      } else {
        // Имитация отправки формы с задержкой для показа состояния загрузки
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form submitted:", formState);
      }

      setIsSubmitted(true);

      // Вызов колбэка при успешной отправке
      if (onSubmitSuccess) {
        onSubmitSuccess(formState);
      }

      // Сброс формы через некоторое время
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          agreement: false,
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Вызов колбэка при ошибке
      if (onSubmitError) {
        onSubmitError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Стили для иконок
  const iconStyle = `w-6 h-6 ${isDark ? "text-purple-400" : "text-purple-500"}`;

  // Стили для контейнеров иконок
  const iconContainerStyle = `w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 shadow-sm ${
    isDark
      ? "bg-gradient-to-br from-purple-600/30 to-purple-700/30 text-purple-300 shadow-purple-900/10"
      : "bg-gradient-to-br from-purple-100 to-purple-200/70 text-purple-600 shadow-purple-200/50"
  }`;

  // Стили для полей ввода
  const inputStyle = `w-full px-4 py-3 rounded-xl border transition-all duration-200 ${
    isDark
      ? "bg-gray-700/80 border-gray-600 text-white focus:border-purple-500 focus:bg-gray-700 placeholder-gray-400"
      : "bg-white/80 border-gray-300 text-gray-900 focus:border-purple-400 focus:bg-white placeholder-gray-400"
  } focus:ring-3 focus:ring-purple-500/40 focus:outline-none`;

  const bgStyle = backgroundColor
    ? { backgroundColor }
    : `bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-950/10 dark:to-gray-950`;

  const content = (
    <section
      id="contact"
      className={`py-16 md:py-24 relative overflow-hidden ${
        fullWidth ? "w-screen" : "w-full"
      } ${className}`}
    >
      {/* Градиентный фон */}
      <div
        className={`absolute inset-0 ${
          fullWidth ? "w-screen" : "w-full"
        } ${bgStyle} -z-10`}
      ></div>

      {/* Сетка-фон */}
      <div
        className={`absolute inset-0 ${
          fullWidth ? "w-screen" : "w-full"
        } opacity-[0.03] dark:opacity-[0.02] -z-10`}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "url('/grid-pattern.svg')",
            backgroundSize: "24px 24px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute -top-24 -right-24 w-[120vw] h-[120vw] max-w-[800px] max-h-[800px] bg-gradient-to-br from-purple-200/40 to-pink-300/40 dark:from-purple-700/15 dark:to-pink-800/15 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -left-24 w-[120vw] h-[120vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-pink-200/40 to-purple-300/40 dark:from-pink-700/15 dark:to-purple-800/15 rounded-full blur-3xl -z-10"></div>

      {/* Анимированные элементы */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-[15%] right-[10%] w-14 h-14 bg-purple-400/20 dark:bg-purple-600/30 rounded-full backdrop-blur-md -z-5"
      ></motion.div>
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-[15%] left-[7%] w-18 h-18 bg-pink-400/20 dark:bg-pink-600/30 rounded-full backdrop-blur-md -z-5"
        style={{ animationDelay: "1.5s" }}
      ></motion.div>

      <div className="w-full mx-auto relative z-10">
        <div className="container mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center px-4 md:px-6 relative z-10"
          >
            {/* Левая колонка - Текст */}
            {(showFeatures || title || subtitle) && (
              <motion.div variants={itemVariants}>
                {(title || subtitle) && (
                  <div className="mb-10">
                    <motion.div
                      variants={itemVariants}
                      className="inline-flex items-center justify-center border border-purple-300 dark:border-purple-800 gap-2 px-4 py-1 rounded-full text-sm mb-4 bg-purple-500/10 text-purple-600 dark:text-purple-400"
                    >
                      Связаться с нами
                    </motion.div>
                    {title && (
                      <motion.h2
                        variants={itemVariants}
                        className="text-[36px] font-semibold text-gray-900 dark:text-white mb-4"
                      >
                        {title.includes("автоматизировать") ? (
                          <>
                            Готовы{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-400">
                              автоматизировать
                            </span>{" "}
                            ваш бизнес?
                          </>
                        ) : (
                          title
                        )}
                      </motion.h2>
                    )}
                    {subtitle && (
                      <motion.p
                        variants={itemVariants}
                        className="text-[18px] text-gray-600 dark:text-gray-300"
                      >
                        {subtitle}
                      </motion.p>
                    )}
                  </div>
                )}

                {/* Преимущества обращения */}
                {showFeatures && features && features.length > 0 && (
                  <motion.div variants={itemVariants} className="space-y-6">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className={iconContainerStyle}>
                          {React.cloneElement(
                            feature.icon as React.ReactElement,
                            {
                              className: iconStyle,
                            }
                          )}
                        </div>
                        <div>
                          <h3 className="text-[18px] font-medium text-gray-900 dark:text-white">
                            {feature.title}
                          </h3>
                          <p className="text-base text-gray-600 dark:text-gray-300 mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {/* Дополнительная информация */}
                {showConfidentiality && (
                  <motion.div
                    variants={itemVariants}
                    className="mt-10 p-6 rounded-xl border border-purple-100 dark:border-purple-800/30 bg-gradient-to-br from-purple-50/50 to-white dark:from-purple-900/20 dark:to-purple-800/10 backdrop-blur-sm shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <RiShieldLine className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                      <span className="text-[16px] font-medium text-gray-900 dark:text-white">
                        Гарантия конфиденциальности
                      </span>
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-300">
                      {confidentialityText}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Правая колонка - Форма */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
                boxShadow: isDark
                  ? "0 20px 40px rgba(88, 28, 135, 0.25)"
                  : "0 20px 40px rgba(168, 85, 247, 0.15)",
              }}
              className={`p-8 rounded-2xl backdrop-blur-sm ${
                isDark
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white/90 border border-gray-200 shadow-xl shadow-purple-100/50"
              }`}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 text-white mb-6 shadow-lg shadow-purple-500/30">
                    <RiCheckboxCircleLine className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {successMessage.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
                    {successMessage.text}
                  </p>
                </motion.div>
              ) : (
                <>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="inline-block p-1.5 rounded-full bg-purple-500/20 dark:bg-purple-400/20">
                      <RiMessage2Line className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                    </span>
                    Заполните форму
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    id={formId}
                    className="space-y-5"
                  >
                    <div>
                      <label
                        htmlFor={`${formId}-name`}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                      >
                        <RiUser3Line className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                        {formLabels.name}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        id={`${formId}-name`}
                        name="name"
                        type="text"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder={placeholders.name}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`${formId}-email`}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                      >
                        <RiMailLine className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                        {formLabels.email}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        id={`${formId}-email`}
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className={inputStyle}
                        placeholder={placeholders.email}
                      />
                    </div>

                    <div
                      className={`grid grid-cols-1 ${
                        showPhoneField && showCompanyField
                          ? "md:grid-cols-2"
                          : ""
                      } gap-5`}
                    >
                      {showPhoneField && (
                        <div>
                          <label
                            htmlFor={`${formId}-phone`}
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                          >
                            <RiPhoneLine className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                            {formLabels.phone}
                          </label>
                          <input
                            id={`${formId}-phone`}
                            name="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            className={inputStyle}
                            placeholder={placeholders.phone}
                          />
                        </div>
                      )}

                      {showCompanyField && (
                        <div>
                          <label
                            htmlFor={`${formId}-company`}
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                          >
                            <RiBuildingLine className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                            {formLabels.company}
                          </label>
                          <input
                            id={`${formId}-company`}
                            name="company"
                            type="text"
                            value={formState.company}
                            onChange={handleChange}
                            className={inputStyle}
                            placeholder={placeholders.company}
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor={`${formId}-message`}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 flex items-center gap-1.5"
                      >
                        <RiMessage2Line className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                        {formLabels.message}
                      </label>
                      <textarea
                        id={`${formId}-message`}
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        className={inputStyle}
                        placeholder={placeholders.message}
                      ></textarea>
                    </div>

                    <div className="flex items-start pt-2">
                      <div className="flex h-5">
                        <input
                          id={`${formId}-agreement`}
                          name="agreement"
                          type="checkbox"
                          checked={formState.agreement}
                          onChange={handleCheckboxChange}
                          required
                          className="h-5 w-5 rounded text-purple-600 focus:ring-purple-500 border-gray-300 focus:ring-2 focus:ring-offset-1 transition-colors"
                        />
                      </div>
                      <label
                        htmlFor={`${formId}-agreement`}
                        className="ml-3 block text-sm text-gray-600 dark:text-gray-300"
                      >
                        {formLabels.agreement?.includes(
                          "политикой конфиденциальности"
                        ) ? (
                          <>
                            Я согласен с{" "}
                            <a
                              href={privacyPolicyUrl}
                              className="text-purple-600 dark:text-purple-400 hover:underline"
                            >
                              политикой конфиденциальности
                            </a>{" "}
                            и обработкой персональных данных
                          </>
                        ) : (
                          formLabels.agreement
                        )}
                      </label>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full mt-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3.5 px-6 rounded-xl transition-all hover:shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-600/30 flex items-center justify-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Отправка...
                        </>
                      ) : (
                        submitButtonText
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return useContainer ? <Container>{content}</Container> : content;
}
