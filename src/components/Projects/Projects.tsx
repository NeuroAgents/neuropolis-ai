'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Container from '../ui/Container'

const projectsData = [
    {
        id: 1,
        category: 'Поддержка клиентов',
        title: 'Улучшение клиентского сервиса с ИИ-агентами',
        description: 'Разработали чат-бот на основе ИИ, который автоматизирует обработку запросов от клиентов. Чат-бот 24/7 решает 70% запросов без участия человека, сокращая время ожидания и повышая удовлетворенность клиентов на 40%.',
        image: 'https://framerusercontent.com/images/1CM8GdKYYDrX5mbVC1SyelCrWY.jpeg'
    },
    {
        id: 2,
        category: 'Маркетинг',
        title: 'Оптимизация маркетинговых кампаний с ИИ',
        description: 'Внедрили инструмент на основе ИИ для маркетингового агентства, который анализирует данные о вовлеченности пользователей и автоматизирует размещение рекламы. Это привело к увеличению CTR на 25% и снижению рекламных расходов на 20%.',
        image: 'https://framerusercontent.com/images/ZpI3KG6axlIk98Y3TLt8CBGEJ0.jpg'
    },
    {
        id: 3,
        category: 'Недвижимость',
        title: 'Предиктивная оценка недвижимости',
        description: 'Разработали ИИ-агента для прогнозирования стоимости недвижимости для инвесторов, учитывающую местоположение, рыночные тренды и характеристики объектов. Этот инструмент ИИ повысил точность инвестиций на 20% и сократил время на исследования в два раза.',
        image: 'https://framerusercontent.com/images/T7Yu7NzZ7KQKKMl69DSkuj0ME.jpeg'
    }
]

const Projects = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [isScrollEnd, setIsScrollEnd] = useState(false)

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10
            setIsScrollEnd(isAtEnd)

            // Reset scroll to beginning when reaching the end
            if (isAtEnd) {
                setTimeout(() => {
                    if (scrollContainerRef.current) {
                        scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
                    }
                }, 1000)
            }
        }
    }

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll)
            return () => scrollContainer.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <Container>
            <section id="projects" className="py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[40px] lg:gap-[60px]">
                    {/* Left side - Fixed content */}
                    <div className="p-4 sm:p-6 md:p-8 lg:sticky lg:top-20 lg:self-start">
                        <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-white text-sm mb-4 switch-box">
                            Проекты
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Некоторые из наших проектов</h2>
                        <p className="text-gray-400 max-w-xl">
                            Каждый из этих проектов демонстрирует, как ИИ может обеспечить измеримые результаты в различных отраслях.
                        </p>
                    </div>

                    {/* Right side - Scrollable cards */}
                    <div>
                        <div
                            ref={scrollContainerRef}
                            className="flex pb-8 hide-scrollbar"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            <div className="flex flex-col gap-[24px]">
                                {projectsData.map((project) => (
                                    <div
                                        key={project.id}
                                        className="flex-shrink-0 w-full bg-[#050A1B] rounded-xl overflow-hidden border border-[#262626] process-card"
                                    >
                                        <div className='p-[12px]'>
                                            <div className="relative h-[180px] sm:h-[200px] md:h-[240px] w-full">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover rounded-[10px]"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-4 sm:p-6">
                                            <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 text-xs rounded-full mb-4 span-box">
                                                {project.category}
                                            </div>
                                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{project.title}</h3>
                                            <p className="text-[#919191] text-xs sm:text-sm">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Projects 