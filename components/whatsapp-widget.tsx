"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")

  const handleSendMessage = () => {
    const whatsappNumber = "78421234567" // Замените на ваш номер
    const text = `Привет! Меня зовут ${name}. ${message}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
    setIsOpen(false)
    setMessage("")
    setName("")
  }

  const quickMessages = [
    "Хочу записаться на пробное занятие",
    "Узнать расписание занятий",
    "Уточнить стоимость обучения",
    "Задать вопрос о программах",
  ]

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          size="icon"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>

      {/* WhatsApp Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-green-500 text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp чат</span>
              </CardTitle>
              <p className="text-green-100 text-sm">Обычно отвечаем в течение часа</p>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
              <div>
                <Input placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)} className="mb-3" />
                <Textarea
                  placeholder="Напишите ваше сообщение..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="min-h-[80px]"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm text-gray-600">Быстрые сообщения:</p>
                {quickMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => setMessage(msg)}
                    className="block w-full text-left p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {msg}
                  </button>
                ))}
              </div>

              <Button
                onClick={handleSendMessage}
                disabled={!name.trim() || !message.trim()}
                className="w-full bg-green-500 hover:bg-green-600"
              >
                <Send className="w-4 h-4 mr-2" />
                Отправить в WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
