import { Card, CardContent } from "@/components/ui/card"
import { Award, BookOpen, Target, Users2 } from "lucide-react"
import { yearsEST } from '@/lib/utils';
import Image from 'next/image';


export function About() {
  const features = [
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />,
      title: "Опытные тренеры",
      description: "Наши тренеры имеют звания мастеров спорта и многолетний опыт преподавания",
    },
    {
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />,
      title: "Проверенные методики",
      description: "Используем современные и классические методы обучения шахматам",
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />,
      title: "Индивидуальный подход",
      description: "Программа обучения адаптируется под уровень и цели каждого ученика",
    },
    {
      icon: <Users2 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />,
      title: "Групповые и индивидуальные занятия",
      description: "Выберите формат обучения, который подходит именно вам",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">О нашей школе</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Первая Шахматная Школа — это место, где дети и взрослые изучают древнюю игру королей. Мы помогаем развивать
            логическое мышление, концентрацию внимания и стратегическое планирование.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 leading-tight">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Почему выбирают нас?
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Более {yearsEST()} лет успешной работы в сфере шахматного образования
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Участие в турнирах и соревнованиях различного уровня
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Удобное расположение и комфортные условия для занятий
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">Доступные цены и гибкая система оплаты</p>
                </div>
              </div>
            </div>
            <div className="relative mt-6 lg:mt-0">
              <div className="relative w-full h-64 sm:h-80">
                <Image
                  src="/kid.png"
                  alt="Занятия в первой шахматной школе для детей и взрослых"
                  fill
                  className="object-cover rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
