"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star, Zap } from "lucide-react"

export function Programs() {
  const programs = [
    {
      title: "Начинающие (4-7 лет)",
      description: "Знакомство с шахматами через игру и сказки",
      duration: "45 минут",
      groupSize: "4-6 человек",
      level: "Новичок",
      icon: <Star className="w-6 h-6 text-amber-600" />,
      features: [
        "Изучение фигур и их ходов",
        "Основные правила игры",
        "Развитие логического мышления",
        "Игровая форма обучения",
      ],
    },
    {
      title: "Школьники (8-14 лет)",
      description: "Систематическое изучение шахматной теории и практики",
      duration: "60 минут",
      groupSize: "6-8 человек",
      level: "Базовый",
      icon: <Users className="w-6 h-6 text-amber-600" />,
      features: ["Тактические приемы", "Основы стратегии", "Анализ партий", "Участие в турнирах"],
    },
    {
      title: "Продвинутые (15+ лет)",
      description: "Углубленное изучение шахмат для серьезных игроков",
      duration: "90 минут",
      groupSize: "4-6 человек",
      level: "Продвинутый",
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      features: ["Сложная тактика", "Позиционная игра", "Дебютная подготовка", "Эндшпильная техника"],
    },
    {
      title: "Индивидуальные занятия",
      description: "Персональный подход для максимального результата",
      duration: "60 минут",
      groupSize: "1 человек",
      level: "Любой",
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      features: ["Индивидуальная программа", "Гибкий график", "Быстрый прогресс", "Подготовка к турнирам"],
    },
  ]

  const scrollToEnrollment = () => {
    const element = document.getElementById("enrollment")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="programs" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Наши программы</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Выберите программу обучения, которая подходит вашему уровню и возрасту. Каждая программа разработана с
            учетом особенностей возрастной группы.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="text-center pb-3 sm:pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {program.icon}
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900 leading-tight">{program.title}</CardTitle>
                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Длительность:</span>
                    <span className="font-medium">{program.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Группа:</span>
                    <span className="font-medium">{program.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Уровень:</span>
                    <span className="font-medium text-amber-600">{program.level}</span>
                  </div>
                </div>

                <div className="border-t pt-3 sm:pt-4">
                  <ul className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm">
                        <div className="w-4 h-4 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 mt-4 sm:mt-6 py-2.5"
                  onClick={scrollToEnrollment}
                >
                  Записаться
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
