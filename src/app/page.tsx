import { getRecentArticles } from "@/lib/blogApi";
import React from "react";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Features from "@/components/Features/Features";
import Process from "@/components/Process/Process";
import Projects from "@/components/Projects/Projects";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { unstable_cache } from "next/cache";
import BlogSection from "@/components/Blog/BlogSection";
import WorkflowAutomationContactForm from "@/components/workflow-automation/WorkflowAutomationContactForm";
import { RiMailLine, RiPhoneLine, RiTeamLine } from "react-icons/ri";

// Включаем кеширование данных на 1 час
export const revalidate = 3600;

// Кэшируем функцию получения статей
const getCachedRecentArticles = unstable_cache(
  async () => {
    console.log("Запрашиваем статьи через кэшированную функцию");
    return getRecentArticles(3);
  },
  ["recent-articles"],
  { revalidate: 3600 }
);

export default async function Home() {
  const recentArticles = await getCachedRecentArticles();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Features />
        <Process />
        <Projects />
        <Testimonials />
        {recentArticles.length > 0 && (
          <BlogSection recentArticles={recentArticles} />
        )}
        <FAQ />
        <WorkflowAutomationContactForm
          title="Готовы обсудить ваш проект?"
          subtitle="Оставьте заявку, и наши эксперты свяжутся с вами в ближайшее время для консультации и оценки возможностей."
          showCompanyField={true}
          showPhoneField={true}
          showFeatures={true}
          showConfidentiality={true}
          useContainer={false}
          fullWidth={true}
          formId="main-contact-form"
          features={[
            {
              icon: <RiMailLine />,
              title: "Быстрый ответ",
              description:
                "Мы отвечаем на все запросы в течение 24 часов и готовы предоставить подробную консультацию.",
            },
            {
              icon: <RiPhoneLine />,
              title: "Индивидуальный подход",
              description:
                "Разрабатываем решения с учетом особенностей вашего бизнеса и существующей инфраструктуры.",
            },
            {
              icon: <RiTeamLine />,
              title: "Команда профессионалов",
              description:
                "С вами будут работать опытные специалисты в области искусственного интеллекта и автоматизации.",
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
