import { type NextRequest, NextResponse } from "next/server"

// function sanitizeInput(text: string): string {
//   const phonePattern = /^[\d+\-\s()]+$/

//   if (phonePattern.test(text)) {
//     return text.trim()
//   } else {
//     return text.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, "\\$1")
//   }
// }
function sanitizeInput(text: string): string {
  return text.replace(/([_*\[\]()~`>#+\-=|{}.!\\])/g, "\\$1").trim()
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, whatsapp, telegram, program, message } = body

    // Telegram Bot configuration
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

    // WhatsApp Business API configuration (optional)
    const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN
    const WHATSAPP_PHONE_ID = process.env.WHATSAPP_PHONE_ID

    let telegramSent = false
    let whatsappSent = false

    // Send to Telegram
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const telegramMessage = `
🎯 *Новая заявка на обучение*

👤 *Имя:* ${sanitizeInput(name)}
📞 *Телефон:* ${sanitizeInput(phone)}
${whatsapp ? `📱 *WhatsApp:* ${sanitizeInput(whatsapp)}` : ""}
${telegram ? `💬 *Telegram:* ${sanitizeInput(telegram)}` : ""}
${program ? `📚 *Программа:* ${sanitizeInput(program)}` : ""}
${message ? `💭 *Сообщение:* ${sanitizeInput(message)}` : ""}


📅 *Дата:* ${sanitizeInput(new Date().toLocaleString("ru-RU"))}
`.trim()

      try {
        const telegramResponse = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: "MarkdownV2",
          }),
        })

        if (telegramResponse.ok) {
          telegramSent = true
        } else {
          console.error("Telegram API error:", await telegramResponse.json())
        }
      } catch (error) {
        console.error("Telegram send error:", error)
      }
    }

    // Send to WhatsApp Business API (if configured)
//     if (WHATSAPP_TOKEN && WHATSAPP_PHONE_ID && whatsapp) {
//       const whatsappMessage = `🎯 Новая заявка на обучение

// 👤 Имя: ${name}
// 📞 Телефон: ${phone}
// ${program ? `📚 Программа: ${program}` : ""}
// ${message ? `💭 Сообщение: ${message}` : ""}

// 📅 Дата: ${new Date().toLocaleString("ru-RU")}`

//       try {
//         const whatsappResponse = await fetch(`https://graph.facebook.com/v17.0/${WHATSAPP_PHONE_ID}/messages`, {
//           method: "POST",
//           headers: {
//             Authorization: `Bearer ${WHATSAPP_TOKEN}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             messaging_product: "whatsapp",
//             to: whatsapp.replace(/\D/g, ""), // Remove non-digits
//             type: "text",
//             text: {
//               body: whatsappMessage,
//             },
//           }),
//         })

//         if (whatsappResponse.ok) {
//           whatsappSent = true
//         } else {
//           console.error("WhatsApp API error:", await whatsappResponse.json())
//         }
//       } catch (error) {
//         console.error("WhatsApp send error:", error)
//       }
//     }

    // Return success if at least one method worked
    if (telegramSent) {
      return NextResponse.json({
        success: true,
        telegram: telegramSent,
        whatsapp: whatsappSent,
      })
    } else {
      return NextResponse.json({ error: "Failed to send to any platform" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
