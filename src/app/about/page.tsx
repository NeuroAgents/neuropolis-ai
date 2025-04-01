import type { Metadata } from "next";
import { NextPage } from "next";

export const metadata: Metadata = {
  title: "О компании Neuropolis.ai - Инновационные решения для бизнеса",
  description:
    "Neuropolis.ai - команда экспертов, создающая инновационные решения для цифровой трансформации и автоматизации бизнеса.",
  keywords:
    "о компании, команда, миссия, ценности, искусственный интеллект, автоматизация, цифровая трансформация",
};

const AboutPage: NextPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8 dark:text-white text-black">
        О компании Neuropolis.ai
      </h1>

      <div className="prose max-w-none dark:prose-invert mb-12">
        <p className="mb-4">
          Neuropolis.ai — это команда экспертов в области искусственного
          интеллекта и автоматизации бизнес-процессов. Мы помогаем компаниям
          внедрять современные технологии для повышения эффективности и
          конкурентоспособности.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Наша миссия</h2>
        <p className="mb-4">
          Наша миссия — делать передовые технологии искусственного интеллекта
          доступными для бизнеса любого масштаба, помогая компаниям развиваться
          и адаптироваться к меняющимся условиям рынка.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Наши ценности</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">
            <strong>Инновации</strong> — мы постоянно исследуем новые технологии
            и методы работы
          </li>
          <li className="mb-2">
            <strong>Клиентоориентированность</strong> — в центре всех наших
            решений находятся потребности клиента
          </li>
          <li className="mb-2">
            <strong>Качество</strong> — мы не идем на компромиссы в вопросах
            качества наших продуктов
          </li>
          <li className="mb-2">
            <strong>Прозрачность</strong> — мы работаем открыто и честно на всех
            этапах сотрудничества
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Наша команда</h2>
        <p>
          В Neuropolis.ai работают высококвалифицированные специалисты с богатым
          опытом в сфере разработки ИИ-решений, анализа данных, машинного
          обучения и интеграции бизнес-систем. Мы постоянно развиваемся и
          совершенствуем свои навыки, чтобы предлагать клиентам наиболее
          эффективные и современные решения.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
