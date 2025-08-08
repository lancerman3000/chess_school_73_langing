
import { Button } from "@/components/ui/button"
import { Crown, Trophy, Users } from "lucide-react"
import { yearsEST } from '@/lib/utils';
import Image from 'next/image';


export function Hero() {
  const scrollToEnrollment = () => {
    const element = document.getElementById("enrollment")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Первая <span className="text-amber-600">Шахматная</span> Школа
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Обучаем шахматам детей и взрослых с 2018 года. Профессиональные тренеры, индивидуальный подход и
                проверенные методики обучения.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#enrollment">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              >
                Записаться на занятие
              </Button>
              </a>
              <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="border-amber-600 text-amber-600 hover:bg-amber-50 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent w-full sm:w-auto"
              >
                Узнать больше
              </Button>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Учеников</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Побед</div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{yearsEST()}</div>
                <div className="text-xs sm:text-sm text-gray-600">Лет опыта</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <Image
                src="/trainer.png"
                alt="Шахматная доска"
                width={500}
                height={500}
                // fill
                className="object-cover rounded-xl sm:rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">4.9</div>
                <div className="text-xs sm:text-sm text-gray-600">Рейтинг</div>
                <div className="flex justify-center mt-1">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i} className="text-amber-400 text-sm sm:text-base">
                      {star}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
