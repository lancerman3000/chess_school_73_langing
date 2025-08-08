"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center">
              <img src="/logo.png" alt="Первая Шахматная Школа" />
            </div>
            <span className="text-base sm:text-xl font-bold text-gray-900 leading-tight">Первая Шахматная Школа</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-amber-600 transition-colors text-sm xl:text-base"
            >
              О школе
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-gray-700 hover:text-amber-600 transition-colors text-sm xl:text-base"
            >
              Программы
            </button>
            <button
              onClick={() => scrollToSection("prices")}
              className="text-gray-700 hover:text-amber-600 transition-colors text-sm xl:text-base"
            >
              Цены
            </button>
            <button
              onClick={() => scrollToSection("news")}
              className="text-gray-700 hover:text-amber-600 transition-colors text-sm xl:text-base"
            >
              Новости
            </button>
            <button
              onClick={() => scrollToSection("contacts")}
              className="text-gray-700 hover:text-amber-600 transition-colors text-sm xl:text-base"
            >
              Контакты
            </button>
            <Button
              onClick={() => scrollToSection("enrollment")}
              className="bg-amber-600 hover:bg-amber-700 text-sm xl:text-base px-4 xl:px-6"
            >
              Записаться
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 -mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Открыть меню">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors py-2 text-base"
              >
                О школе
              </button>
              <button
                onClick={() => scrollToSection("programs")}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors py-2 text-base"
              >
                Программы
              </button>
              <button
                onClick={() => scrollToSection("prices")}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors py-2 text-base"
              >
                Цены
              </button>
              <button
                onClick={() => scrollToSection("news")}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors py-2 text-base"
              >
                Новости
              </button>
              <button
                onClick={() => scrollToSection("contacts")}
                className="text-left text-gray-700 hover:text-amber-600 transition-colors py-2 text-base"
              >
                Контакты
              </button>
              <Button
                onClick={() => scrollToSection("enrollment")}
                className="bg-amber-600 hover:bg-amber-700 w-full mt-2 py-3 text-base"
              >
                Записаться
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
