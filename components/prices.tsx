"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function Prices() {
  const pricingPlans = [
    {
      name: "Пробное занятие",
      price: "Бесплатно",
      period: "",
      description: "Знакомство с преподавателем и методикой",
      features: ["Оценка уровня игры", "Знакомство с тренером", "Рекомендации по обучению", "Без обязательств"],
      popular: false,
      buttonText: "Записаться",
    },
    {
      name: "Групповые занятия",
      price: "3800",
      period: "₽/месяц",
      description: "8 занятий в месяц в группе до 8 человек",
      features: [
        "2 занятия в неделю",
        "Группа 4-8 человек",
        "Участие в турнирах",
        "Методические материалы",
        "Домашние задания",
      ],
      popular: true,
      buttonText: "Выбрать план",
    },
    {
      name: "Индивидуальные занятия",
      price: "1500",
      period: "₽/занятие",
      description: "Персональный подход и гибкий график",
      features: [
        "Индивидуальная программа",
        "Гибкий график",
        "Быстрый прогресс",
        "Подготовка к турнирам",
        "Анализ партий",
      ],
      popular: false,
      buttonText: "Записаться",
    },
  ]

  const scrollToEnrollment = () => {
    const element = document.getElementById("enrollment")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="prices" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Цены на обучение</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Выберите подходящий формат обучения. Мы предлагаем гибкие условия и доступные цены для всех желающих изучать
            шахматы.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? "border-amber-500 md:scale-105" : "border-gray-200 hover:border-amber-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Популярный
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
                <CardTitle className="text-xl sm:text-2xl text-gray-900 mb-2">{plan.name}</CardTitle>
                <div className="mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-1 text-sm sm:text-base">{plan.period}</span>}
                </div>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-600" />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-2.5 sm:py-3 ${
                    plan.popular ? "bg-amber-600 hover:bg-amber-700" : "bg-gray-900 hover:bg-gray-800"
                  }`}
                  onClick={scrollToEnrollment}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            Специальные предложения
          </h3>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Семейная скидка</h4>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">
                При записи двух и более детей из одной семьи
              </p>
              <span className="text-xl sm:text-2xl font-bold text-amber-600">-15%</span>
            </div>
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Годовой абонемент</h4>
              <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">При оплате обучения на год вперед</p>
              <span className="text-xl sm:text-2xl font-bold text-amber-600">-20%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
