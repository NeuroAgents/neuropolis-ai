"use client";
import BaseFAQ from "./BaseFAQ";

const faqData = [
  {
    id: 1,
    question: "Какие услуги вы предоставляете?",
    answer:
      "Мы специализируемся на решениях на основе ИИ, включая автоматизацию, предиктивную аналитику, генерацию контента с ИИ, чат-ботов и кастомные модели машинного обучения для различных отраслей. Наша цель — помочь бизнесу улучшить процессы и принимать решения на основе данных.",
  },
  {
    id: 2,
    question: "Как работает ежемесячная подписка?",
    answer:
      "Наша модель подписки предоставляет постоянную поддержку и оптимизацию ИИ, а также оплату используемых API.  Каждый тариф включает регулярные обновления, мониторинг производительности и приоритетную поддержку. Вы можете выбрать один из планов — в зависимости от потребностей вашего бизнеса.",
  },
  {
    id: 3,
    question: "Сколько времени занимает внедрение ИИ-решения?",
    answer:
      "Время внедрения зависит от сложности проекта. Базовые решения могут занять несколько недель, в то время как более сложные интеграции ИИ могут потребовать несколько месяцев. Мы всегда предоставляем четкий график работ на этапе анализа.",
  },
  {
    id: 4,
    question: "Можете ли вы интегрировать ИИ в наши существующие системы?",
    answer:
      "Безусловно! Мы специализируемся на бесшовной интеграции ИИ. Будь то ваша CRM, маркетинговые платформы или инструменты автоматизации рабочих процессов, мы гарантируем, что наши решения будут работать в гармонии с вашей существующей инфраструктурой.",
  },
  {
    id: 5,
    question: "Какие отрасли могут извлечь пользу из ваших ИИ-решений?",
    answer:
      "Мы работаем с различными отраслями, включая здравоохранение, e-commerce, финансы, маркетинг, медиа, производство и другие. Наши ИИ-решения адаптируются под уникальные потребности каждой индустрии.",
  },
];

const FAQ = () => {
  return (
    <BaseFAQ
      faqItems={faqData}
      title="Часто задаваемые вопросы"
      subtitle="Ответы на самые популярные вопросы о наших ИИ-решениях и услугах. Если вы не нашли ответ на свой вопрос, свяжитесь с нами через форму обратной связи."
      sectionId="faq"
      contactLink="#contact"
      contactText="Получить консультацию"
    />
  );
};

export default FAQ;
