"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MessageCircle, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Enrollment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    telegram: "",
    program: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        })
        setFormData({
          name: "",
          phone: "",
          whatsapp: "",
          telegram: "",
          program: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send")
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте еще раз.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="enrollment" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Записаться на занятие
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Заполните форму, и мы свяжемся с вами для уточнения деталей и записи на удобное время.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <Card className="border-0 shadow-xl">
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="text-xl sm:text-2xl text-center text-gray-900">Форма записи</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm sm:text-base">
                      Имя *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Введите ваше имя"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="border-gray-300 focus:border-amber-500 h-11 sm:h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm sm:text-base">
                      Телефон *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      className="border-gray-300 focus:border-amber-500 h-11 sm:h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-sm sm:text-base">
                      WhatsApp
                    </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                      className="border-gray-300 focus:border-amber-500 h-11 sm:h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telegram" className="text-sm sm:text-base">
                      Telegram
                    </Label>
                    <Input
                      id="telegram"
                      type="text"
                      placeholder="@username"
                      value={formData.telegram}
                      onChange={(e) => handleInputChange("telegram", e.target.value)}
                      className="border-gray-300 focus:border-amber-500 h-11 sm:h-12 text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program" className="text-sm sm:text-base">
                      Программа обучения
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("program", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-amber-500 h-11 sm:h-12 text-base">
                        <SelectValue placeholder="Выберите программу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginners">Начинающие (4-7 лет)</SelectItem>
                        <SelectItem value="school">Школьники (8-14 лет)</SelectItem>
                        <SelectItem value="advanced">Продвинутые (15+ лет)</SelectItem>
                        <SelectItem value="individual">Индивидуальные занятия</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm sm:text-base">
                      Дополнительная информация
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о вашем опыте игры в шахматы или задайте вопросы"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="border-gray-300 focus:border-amber-500 min-h-[100px] text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-base sm:text-lg py-3 sm:py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Отправляем..." : "Отправить заявку"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 sm:space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                    Свяжитесь с нами напрямую
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">Телефон</p>
                        <p className="text-gray-600 text-sm sm:text-base">+7 (842) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">WhatsApp</p>
                        <p className="text-gray-600 text-sm sm:text-base">+7 (842) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Send className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm sm:text-base">Telegram</p>
                        <p className="text-gray-600 text-sm sm:text-base">@chess_school_ul</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-600 to-orange-600 text-white">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Почему стоит начать сейчас?</h3>
                  <ul className="space-y-2 text-amber-50">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-200 mt-1 text-sm">•</span>
                      <span className="text-sm sm:text-base">Пробное занятие бесплатно</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-200 mt-1 text-sm">•</span>
                      <span className="text-sm sm:text-base">Гибкий график занятий</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-200 mt-1 text-sm">•</span>
                      <span className="text-sm sm:text-base">Опытные тренеры</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-200 mt-1 text-sm">•</span>
                      <span className="text-sm sm:text-base">Участие в турнирах</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
