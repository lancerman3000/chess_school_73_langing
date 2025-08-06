import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, MessageCircle, Send } from "lucide-react"

export function Contacts() {
  return (
    <section id="contacts" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Контакты</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Приходите к нам на занятия или свяжитесь удобным для вас способом. Мы всегда рады ответить на ваши вопросы.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Контактная информация</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Адрес</h4>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        г. Ульяновск, Ульяновский проспект, 7
                        <br />
                        (торговый центр Яблонька)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Телефон</h4>
                      <p className="text-gray-600 text-sm sm:text-base"><a href="tel:+79603684673">+7 (960) 368-46-73</a></p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">WhatsApp</h4>
                      <p className="text-gray-600 text-sm sm:text-base">+7 (960) 368-46-73</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-sky-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Send className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Telegram</h4>
                      <p className="text-gray-600 text-sm sm:text-base">@Chess_Kid_Ulsk</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Режим работы</h4>
                      <div className="text-gray-600 space-y-1 text-sm sm:text-base">
                        <p>Пн-Пт: 15:00 - 20:00</p>
                        <p>Сб-Вс: 10:00 - 18:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-600 to-orange-600 text-white">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Как нас найти</h3>
                <div className="space-y-2 sm:space-y-3 text-amber-50">
                  <p className="flex items-start space-x-2 text-sm sm:text-base">
                    <span className="text-amber-200 mt-1">•</span>
                    <span>5 минут пешком от остановки "Площадь 50-летия Победы" (30 магазин)</span>
                  </p>
                  <p className="flex items-start space-x-2 text-sm sm:text-base">
                    <span className="text-amber-200 mt-1">•</span>
                    <span>Удобная бесплатная парковка</span>
                  </p>
                  <p className="flex items-start space-x-2 text-sm sm:text-base">
                    <span className="text-amber-200 mt-1">•</span>
                    <span>Вход со стороны проспекта</span>
                  </p>
                  <p className="flex items-start space-x-2 text-sm sm:text-base">
                    <span className="text-amber-200 mt-1">•</span>
                    <span>Проезд автобусами 10, 28, 30, 46, 65, 344, 391, 482, 483, 484, 497,<br /> маршрутки: 22, 42, 47, 78, 84, 489,<br /> троллейбусы: 6, 12</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gray-100 p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Наше расположение</h3>
                </div>
                <div className="relative h-64 sm:h-80 lg:h-96">
                  {
                  <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A4405a1ab3f106ffd183c2931320ee7f3dbc13fcb69b93352368c1bf7bf8615cd&amp;source=constructor" 
                  width="100%" 
                  height="100%" 
                  >
                  </iframe>
                  }
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Удобные способы связи</h3>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <a
                    href="tel:+79603684673"
                    className="flex flex-col items-center p-3 sm:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-1 sm:mb-2" />
                    <span className="text-xs sm:text-sm font-medium text-blue-900 text-center">Позвонить</span>
                  </a>
                  <a
                    href="https://wa.me/79603684673"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 sm:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mb-1 sm:mb-2" />
                    <span className="text-xs sm:text-sm font-medium text-green-900 text-center">WhatsApp</span>
                  </a>
                  <a
                    href="https://t.me/Chess_Kid_Ulsk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 sm:p-4 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
                  >
                    <Send className="w-6 h-6 sm:w-8 sm:h-8 text-sky-600 mb-1 sm:mb-2" />
                    <span className="text-xs sm:text-sm font-medium text-sky-900 text-center">Telegram</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
