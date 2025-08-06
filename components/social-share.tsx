"use client"

import { MessageCircle, Send, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface SocialShareProps {
  title?: string
  description?: string
  url?: string
}

export function SocialShare({
  title = "Первая Шахматная Школа",
  description = "Обучаем шахматам детей и взрослых с 2010 года",
  url = typeof window !== "undefined" ? window.location.href : "",
}: SocialShareProps) {
  const shareToWhatsApp = () => {
    const text = `${title}\n\n${description}\n\n${url}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, "_blank")
  }

  const shareToTelegram = () => {
    const text = `${title}\n\n${description}`
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
    window.open(telegramUrl, "_blank")
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      // Можно добавить toast уведомление
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Поделиться</h3>
        <div className="flex space-x-3">
          <Button onClick={shareToWhatsApp} className="flex-1 bg-green-500 hover:bg-green-600" size="sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button onClick={shareToTelegram} className="flex-1 bg-blue-500 hover:bg-blue-600" size="sm">
            <Send className="w-4 h-4 mr-2" />
            Telegram
          </Button>
          <Button onClick={copyToClipboard} variant="outline" size="sm">
            <Share2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
