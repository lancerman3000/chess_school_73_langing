// Скрипт для настройки Telegram бота
const TELEGRAM_BOT_TOKEN = "YOUR_BOT_TOKEN_HERE" // Замените на токен вашего бота

async function setupTelegramBot() {
  try {
    console.log("🤖 Настройка Telegram бота...")

    // Получаем информацию о боте
    const botInfo = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getMe`)
    const botData = await botInfo.json()

    if (botData.ok) {
      console.log("✅ Бот найден:", botData.result.username)
      console.log("📝 Имя бота:", botData.result.first_name)
    } else {
      console.error("❌ Ошибка получения информации о боте:", botData.description)
      return
    }

    // Устанавливаем команды бота
    const commands = [
      { command: "start", description: "Начать общение" },
      { command: "info", description: "Информация о школе" },
      { command: "prices", description: "Цены на обучение" },
      { command: "contact", description: "Контактная информация" },
    ]

    const setCommands = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/setMyCommands`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ commands }),
    })

    const commandsResult = await setCommands.json()

    if (commandsResult.ok) {
      console.log("✅ Команды бота установлены")
    } else {
      console.error("❌ Ошибка установки команд:", commandsResult.description)
    }

    // Получаем chat_id (нужно отправить сообщение боту)
    console.log("\n📱 Для получения CHAT_ID:")
    console.log("1. Найдите вашего бота в Telegram: @" + botData.result.username)
    console.log("2. Отправьте боту команду /start")
    console.log("3. Выполните следующий запрос:")
    console.log(`curl https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`)
  } catch (error) {
    console.error("❌ Ошибка настройки бота:", error)
  }
}

setupTelegramBot()
