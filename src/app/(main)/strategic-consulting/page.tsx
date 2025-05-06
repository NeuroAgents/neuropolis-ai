import { Metadata } from "next";
import StrategicConsultingPage from "@/components/strategic-consulting/StrategicConsultingPage";

export const metadata: Metadata = {
  title: "Стратегический ИИ-Консалтинг для Бизнеса | Нейрополис",
  description:
    "Разрабатываем стратегии внедрения искусственного интеллекта и цифровой трансформации для роста вашего бизнеса. Экспертное сопровождение на всех этапах внедрения ИИ!",
  keywords:
    "стратегический консалтинг, ИИ консалтинг, консалтинг по искусственному интеллекту, цифровая трансформация, AI стратегия, внедрение ИИ в бизнес, стратегия цифровизации, digital transformation",
};

export default function StrategicConsulting() {
  return <StrategicConsultingPage />;
}
