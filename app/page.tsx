import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Programs } from "@/components/programs"
import { Prices } from "@/components/prices"
import { Enrollment } from "@/components/enrollment"
import { Reviews } from "@/components/reviews"
import { Contacts } from "@/components/contacts"
import { News } from "@/components/news"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
// import { WhatsAppWidget } from "@/components/whatsapp-widget"
// import { TelegramWidget } from "@/components/telegram-widget"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Prices />
        <Enrollment />
        <Reviews />
        <News />
        <Contacts />
      </main>
      <Footer />

      {/* Chat Widgets
      <WhatsAppWidget />
      <TelegramWidget /> */}
    </div>
  )
}
