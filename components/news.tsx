"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Plus, Edit, Trash2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface NewsItem {
  id: number
  title: string
  content: string
  date: string
  author: string
  category: string
}

export function News() {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Турнир среди начинающих шахматистов",
      content:
        "В нашей школе прошел турнир среди учеников начального уровня. Участие приняли 24 юных шахматиста в возрасте от 6 до 10 лет. Победителем стал Максим Петров, ученик группы 'Начинающие'.",
      date: "2024-01-15",
      author: "Администратор",
      category: "Турниры",
    },
    {
      id: 2,
      title: "Новые программы обучения",
      content:
        "С февраля мы запускаем новые программы обучения для продвинутых игроков. Программа включает углубленное изучение дебютов, миттельшпиля и эндшпиля.",
      date: "2024-01-10",
      author: "Главный тренер",
      category: "Обучение",
    },
    {
      id: 3,
      title: "Мастер-класс от гроссмейстера",
      content:
        "20 января в нашей школе состоится мастер-класс от международного гроссмейстера Александра Иванова. Участие бесплатное для всех учеников школы.",
      date: "2024-01-05",
      author: "Администратор",
      category: "События",
    },
  ])

  const [isAddingNews, setIsAddingNews] = useState(false)
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null)
  const [newNewsItem, setNewNewsItem] = useState({
    title: "",
    content: "",
    category: "",
    author: "Администратор",
  })

  const handleAddNews = () => {
    if (newNewsItem.title && newNewsItem.content) {
      const newsItem: NewsItem = {
        id: Date.now(),
        title: newNewsItem.title,
        content: newNewsItem.content,
        date: new Date().toISOString().split("T")[0],
        author: newNewsItem.author,
        category: newNewsItem.category || "Общее",
      }
      setNews([newsItem, ...news])
      setNewNewsItem({ title: "", content: "", category: "", author: "Администратор" })
      setIsAddingNews(false)
    }
  }

  const handleEditNews = (item: NewsItem) => {
    setEditingNews(item)
    setNewNewsItem({
      title: item.title,
      content: item.content,
      category: item.category,
      author: item.author,
    })
  }

  const handleUpdateNews = () => {
    if (editingNews && newNewsItem.title && newNewsItem.content) {
      setNews(news.map((item) => (item.id === editingNews.id ? { ...item, ...newNewsItem } : item)))
      setEditingNews(null)
      setNewNewsItem({ title: "", content: "", category: "", author: "Администратор" })
    }
  }

  const handleDeleteNews = (id: number) => {
    setNews(news.filter((item) => item.id !== id))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section id="news" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 sm:mb-16 gap-4">
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Новости школы</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto sm:mx-0 leading-relaxed">
              Следите за последними новостями, турнирами и событиями нашей шахматной школы.
            </p>
          </div>

          <Dialog open={isAddingNews} onOpenChange={setIsAddingNews}>
            <DialogTrigger asChild>
              <Button className="bg-amber-600 hover:bg-amber-700 w-full sm:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                Добавить новость
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl mx-3 sm:mx-auto">
              <DialogHeader>
                <DialogTitle>Добавить новость</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Заголовок</Label>
                  <Input
                    id="title"
                    value={newNewsItem.title}
                    onChange={(e) => setNewNewsItem({ ...newNewsItem, title: e.target.value })}
                    placeholder="Введите заголовок новости"
                    className="h-11"
                  />
                </div>
                <div>
                  <Label htmlFor="category">Категория</Label>
                  <Input
                    id="category"
                    value={newNewsItem.category}
                    onChange={(e) => setNewNewsItem({ ...newNewsItem, category: e.target.value })}
                    placeholder="Например: Турниры, Обучение, События"
                    className="h-11"
                  />
                </div>
                <div>
                  <Label htmlFor="content">Содержание</Label>
                  <Textarea
                    id="content"
                    value={newNewsItem.content}
                    onChange={(e) => setNewNewsItem({ ...newNewsItem, content: e.target.value })}
                    placeholder="Введите текст новости"
                    className="min-h-[120px]"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                  <Button variant="outline" onClick={() => setIsAddingNews(false)} className="w-full sm:w-auto">
                    Отмена
                  </Button>
                  <Button onClick={handleAddNews} className="bg-amber-600 hover:bg-amber-700 w-full sm:w-auto">
                    Добавить
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Dialog open={!!editingNews} onOpenChange={() => setEditingNews(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Редактировать новость</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="edit-title">Заголовок</Label>
                <Input
                  id="edit-title"
                  value={newNewsItem.title}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, title: e.target.value })}
                  placeholder="Введите заголовок новости"
                />
              </div>
              <div>
                <Label htmlFor="edit-category">Категория</Label>
                <Input
                  id="edit-category"
                  value={newNewsItem.category}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, category: e.target.value })}
                  placeholder="Например: Турниры, Обучение, События"
                />
              </div>
              <div>
                <Label htmlFor="edit-content">Содержание</Label>
                <Textarea
                  id="edit-content"
                  value={newNewsItem.content}
                  onChange={(e) => setNewNewsItem({ ...newNewsItem, content: e.target.value })}
                  placeholder="Введите текст новости"
                  className="min-h-[120px]"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setEditingNews(null)}>
                  Отмена
                </Button>
                <Button onClick={handleUpdateNews} className="bg-amber-600 hover:bg-amber-700">
                  Сохранить
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {news.map((item) => (
            <Card
              key={item.id}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800 text-xs">
                    {item.category}
                  </Badge>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="ghost" onClick={() => handleEditNews(item)} className="h-7 w-7 p-0">
                      <Edit className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleDeleteNews(item.id)}
                      className="h-7 w-7 p-0 text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900 leading-tight">{item.title}</CardTitle>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{formatDate(item.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{item.author}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  {item.content.length > 120 ? `${item.content.substring(0, 120)}...` : item.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {news.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-base sm:text-lg">Новостей пока нет</p>
          </div>
        )}
      </div>
    </section>
  )
}
