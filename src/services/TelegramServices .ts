import TelegramBot from 'node-telegram-bot-api';

// Remplacez par votre vrai Token obtenu via @BotFather sur Telegram
const token = 'VOTRE_TELEGRAM_BOT_TOKEN';
const bot = new TelegramBot(token, { polling: false });

export const sendAlert = async (message: string) => {
    try {
        // ID de votre canal ou de votre groupe
        const chatId = '@votre_canal_ou_id';
        await bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
        console.log("📢 Alerte envoyée sur Telegram");
    } catch (error) {
        console.error("❌ Erreur envoi Telegram :", error);
    }
};
