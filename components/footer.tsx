
import { MapPin, Phone, MessageCircle, Send } from "lucide-react"

export function Footer() {

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">♔</span>
              </div>
              <span className="text-lg sm:text-xl font-bold">Первая Шахматная Школа</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Обучаем шахматам детей и взрослых с 2018 года. Профессиональные тренеры и проверенные методики обучения.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="tel:+79603684673"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://wa.me/79603684673"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://t.me/Chess_Kid_Ulsk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base text-left"
                >
                  О школе
                </a>
              </li>
              <li>
                <a 
                  href="#programs"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block text-left"
                >
                  Программы
                </a>
              </li>
              <li>
                <a 
                  href="#prices"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base text-left"
                >
                  Цены
                </a>
              </li>
              <li>
                <a 
                  href="#news"
                  className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base text-left"
                >
                  Новости
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
          
            <h3 className="text-base sm:text-lg font-semibold">Программы</h3>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#programs">Начинающие (4-7 лет)</a></li>
              <li><a href="#programs">Школьники (8-14 лет)</a></li>
              <li><a href="#programs">Продвинутые (15+ лет)</a></li>
              <li><a href="#programs">Индивидуальные занятия</a></li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold"><a href="#contacts">Контакты</a></h3>
            <div className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>г. Ульяновск, Ульяновский проспект, 7</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span>+7 (960) 368-46-73</span>
              </div>
              <div className="text-sm sm:text-base">
                <p>Пн-Пт: 15:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">&copy; 2025 Первая Шахматная Школа. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
