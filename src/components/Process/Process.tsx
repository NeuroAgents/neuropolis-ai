"use client";

import ProcessSection from "@/components/ui/ProcessSection";
import { FiClock } from "react-icons/fi";
import {
  FiSearch,
  FiCode,
  FiSettings,
  FiServer,
  FiUsers,
  FiBarChart2,
} from "react-icons/fi";

const Process = () => {
  // Этапы процесса внедрения ИИ-решений
  const processSteps = [
    {
      number: "01",
      title: "Анализ и исследование",
      description:
        "Исследуем ваш бизнес, выявляем задачи, которые можно оптимизировать с помощью ИИ, и определяем ключевые цели проекта.",
      details: [
        "Интервью с ключевыми сотрудниками",
        "Аудит существующих процессов",
        "Выявление узких мест в работе",
        "Определение приоритетных задач",
      ],
      icon: <FiSearch className="w-6 h-6" />,
    },
    {
      number: "02",
      title: "Разработка стратегии",
      description:
        "Создаем детальный план внедрения ИИ-решений, включающий выбор технологий, определение необходимых интеграций и оценку ресурсов.",
      details: [
        "Проектирование архитектуры решения",
        "Выбор подходящих ИИ-технологий",
        "Расчет ROI от внедрения ИИ",
        "Формирование дорожной карты проекта",
      ],
      icon: <FiSettings className="w-6 h-6" />,
    },
    {
      number: "03",
      title: "Разработка и кастомизация",
      description:
        "Разрабатываем и настраиваем ИИ-решения, адаптированные под уникальные потребности вашего бизнеса и существующие системы.",
      details: [
        "Настройка ИИ-алгоритмов",
        "Создание интерфейсов взаимодействия",
        "Разработка автоматизированных процессов",
        "Настройка интеграций с вашими системами",
      ],
      icon: <FiCode className="w-6 h-6" />,
    },
    {
      number: "04",
      title: "Тестирование и оптимизация",
      description:
        "Проводим тщательное тестирование созданных ИИ-решений и оптимизируем их работу для достижения максимальной производительности.",
      details: [
        "Функциональное тестирование",
        "Проверка точности ИИ-моделей",
        "Оптимизация производительности",
        "Настройка безопасности данных",
      ],
      icon: <FiBarChart2 className="w-6 h-6" />,
    },
    {
      number: "05",
      title: "Внедрение и обучение",
      description:
        "Внедряем ИИ-решения в вашу рабочую среду и обучаем ваших сотрудников эффективному использованию новых инструментов.",
      details: [
        "Поэтапное внедрение ИИ-систем",
        "Проведение тренингов для персонала",
        "Подготовка документации и инструкций",
        "Сопровождение на начальном этапе использования",
      ],
      icon: <FiUsers className="w-6 h-6" />,
    },
    {
      number: "06",
      title: "Поддержка и развитие",
      description:
        "Обеспечиваем постоянную поддержку, мониторинг работы и дальнейшее развитие ИИ-решений с учетом меняющихся потребностей вашего бизнеса.",
      details: [
        "Техническая поддержка 24/7",
        "Мониторинг и обновление ИИ-моделей",
        "Анализ эффективности внедрения",
        "Масштабирование решений по мере роста бизнеса",
      ],
      icon: <FiServer className="w-6 h-6" />,
    },
  ];

  return (
    <ProcessSection
      processSteps={processSteps}
      title="Процесс создания автономных ИИ-решений"
      subtitle="Мы следуем структурированному подходу к созданию и внедрению ИИ-решений, обеспечивая максимальную эффективность и быструю адаптацию для вашего бизнеса."
      badge="Процесс"
      sectionId="process"
      resultTitle="Результат нашей работы"
      resultIcon={<FiClock className="w-12 h-12 text-white" />}
      resultText="Благодаря нашему подходу вы получаете интеллектуальную автоматизацию, которая берет на себя рутинные задачи и повышает эффективность работы. Ваши сотрудники освобождаются от монотонной работы и могут сосредоточиться на стратегических задачах, требующих человеческого интеллекта и творческого подхода."
      gradientTitlePart="автономных ИИ-решений"
    />
  );
};

export default Process;
