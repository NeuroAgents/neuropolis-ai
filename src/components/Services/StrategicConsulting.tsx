"use client";

import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const StrategicConsulting = () => {
  const { isDark } = useTheme();

  return (
    <div>
      {/* Strategic Consulting Card */}
      <div
        className={`w-full lg:w-[523px] p-[20px] rounded-xl border border-[#262626] overflow-hidden transition-all duration-300 hover:shadow-lg ${
          isDark
            ? "process-card hover:bg-[#0A1029]"
            : "bg-gray-50 border-gray-200 hover:border-blue-200"
        }`}
      >
        <Link href="/strategic-consulting" className="block">
          {/* Image or Icon container */}
          <div
            className={`py-[30px] sm:py-[50px] flex items-center justify-center overflow-hidden w-full ${
              isDark ? "ai-card" : "bg-white rounded-xl border border-gray-100"
            }`}
          >
            <div className="relative w-full h-[200px] flex items-center justify-center">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30 dark:from-blue-900/20 dark:to-indigo-900/20"></div>

              {/* Стилизованный контейнер для иконки */}
              <div className="relative z-10 w-[120px] h-[120px] bg-gradient-to-br from-[#0167F3]/10 to-blue-500/10 dark:from-[#0167F3]/20 dark:to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-[90px] h-[90px] bg-gradient-to-br from-[#0167F3] to-[#399AFC] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="white"
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
                </div>
              </div>

              {/* Декоративные элементы */}
              <div className="absolute top-[30%] left-[20%] w-8 h-8 rounded-full bg-blue-500/10 dark:bg-blue-500/20"></div>
              <div className="absolute bottom-[30%] right-[20%] w-12 h-12 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20"></div>
            </div>
          </div>

          <div className="mt-[30px]">
            <h4 className="font-medium text-base sm:text-lg mb-1 sm:mb-2 dark:text-white text-gray-800">
              Стратегический ИИ-консалтинг
            </h4>
            <p className="dark:text-[#919191] text-gray-600 text-sm sm:text-base">
              Разрабатываем стратегии внедрения искусственного интеллекта и
              цифровой трансформации для устойчивого роста вашего бизнеса.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default StrategicConsulting;
