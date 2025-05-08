import { getRecentArticles } from "@/lib/blogApi";
import Link from "next/link";
import React from "react";
import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Features from "@/components/Features/Features";
import Process from "@/components/Process/Process";
import Projects from "@/components/Projects/Projects";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import { BsArrowRight } from "react-icons/bs";
import Badge from "@/components/ui/Badge";
import WorkflowAutomationContactForm from "@/components/workflow-automation/WorkflowAutomationContactForm";
import { RiMailLine, RiPhoneLine, RiTeamLine } from "react-icons/ri";

// Отключаем кеширование данных для этой страницы
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const recentArticles = await getRecentArticles(3);

  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Process />
      <Projects />
      <Testimonials />

      {/* Recent Blog Posts Section */}
      {recentArticles.length > 0 && (
        <section className="py-20 md:py-28 px-4 relative overflow-hidden">
          {/* Градиентный фон */}
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-900 -z-10"></div>
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/20 to-blue-400/20 dark:from-blue-500/10 dark:to-blue-700/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/20 to-indigo-400/20 dark:from-indigo-500/10 dark:to-indigo-700/10 rounded-full blur-3xl -z-10"></div>

          <div className="container mx-auto max-w-[1280px] relative z-10">
            <div className="text-center mb-16">
              <Badge>Блог</Badge>
              <h2 className="text-[36px] font-semibold text-gray-900 dark:text-white mb-4">
                Последние{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0167F3] to-[#399AFC]">
                  публикации
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
                Узнайте о последних тенденциях и инновациях в области
                искусственного интеллекта и цифровой трансформации.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {recentArticles.map((post, index) => (
                <div
                  key={post.id}
                  className="group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl 
                bg-gradient-to-r from-[#0167F3] to-[#399AFC] hover:from-[#0157D3] hover:to-[#2988E8]
                text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Все статьи
                <BsArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <FAQ />

      {/* Заменяем стандартный компонент Contact на WorkflowAutomationContactForm */}
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
        backgroundColor={undefined}
      />
    </main>
  );
}
