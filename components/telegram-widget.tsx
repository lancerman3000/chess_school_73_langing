"use client"

import { useState } from "react"
import { Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TelegramWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")

  const handleSendMessage = () => {
    const telegramUsername = "@chess_school_one_bot" // Замените на ваш username
    const text = `Привет! Меня зовут ${name}. ${message}`
    const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
    setIsOpen(false)
    setMessage("")
    setName("")
  }

  const quickMessages = [
    "Хочу записаться на занятия",
    "Узнать о программах обучения",
    "Уточнить расписание",
    "Задать вопрос тренеру",
  ]

  return (
    <>
      {/* Telegram Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
          size="icon"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Send className="w-6 h-6" />}
        </Button>
      </div>

      {/* Telegram Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="shadow-2xl border-0">
            <CardHeader className="bg-blue-500 text-white rounded-t-lg">
              <CardTitle className="text-lg flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>Telegram чат</span>
              </CardTitle>
              <p className="text-blue-100 text-sm">Быстрая связь через Telegram</p>
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
                className="w-full bg-blue-500 hover:bg-blue-600"
              >
                <Send className="w-4 h-4 mr-2" />
                Открыть в Telegram
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
