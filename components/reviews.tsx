"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Reviews() {
  // Placeholder reviews data - in a real implementation, this would be fetched from Yandex Maps API
  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      date: "2 недели назад",
      text: "Отличная школа! Мой сын занимается уже полгода, очень доволен прогрессом. Тренеры профессиональные, подход к детям замечательный.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Михаил Иванов",
      rating: 5,
      date: "1 месяц назад",
      text: "Записал дочь на занятия в 6 лет. Теперь она с удовольствием играет в шахматы и участвует в турнирах. Рекомендую всем родителям!",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Елена Смирнова",
      rating: 5,
      date: "1 месяц назад",
      text: "Прекрасная атмосфера, квалифицированные преподаватели. Ребенок с нетерпением ждет каждого занятия. Спасибо за профессионализм!",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Дмитрий Козлов",
      rating: 5,
      date: "2 месяца назад",
      text: "Сам начал заниматься в этой школе во взрослом возрасте. Очень доволен индивидуальным подходом и качеством обучения.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Ольга Васильева",
      rating: 5,
      date: "2 месяца назад",
      text: "Замечательная школа с опытными тренерами. Дети не только изучают шахматы, но и развивают логическое мышление.",
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      name: "Александр Новиков",
      rating: 5,
      date: "3 месяца назад",
      text: "Отличное место для изучения шахмат. Удобное расположение, профессиональные тренеры, доступные цены. Рекомендую!",
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="reviews" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Отзывы наших учеников
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Узнайте, что говорят о нас родители и ученики. Мы гордимся доверием, которое нам оказывают наши клиенты.
          </p>

          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
            <div className="flex items-center space-x-1">{renderStars(5)}</div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600 text-sm sm:text-base">из 5 на Яндекс.Картах</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{review.name}</h4>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">{renderStars(review.rating)}</div>
                      <span className="text-xs sm:text-sm text-gray-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://yandex.ru/maps/org/pervaya_shakhmatnaya_shkola/144636962328/reviews/?ll=48.582553%2C54.373080&utm_content=org-name&utm_medium=reviews&utm_source=maps-reviews-widget&z=17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
          >
            <span>Все отзывы на Яндекс.Картах</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
