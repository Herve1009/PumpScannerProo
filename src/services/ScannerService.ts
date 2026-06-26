import { sendAlert } from './telegramService';

// Dans votre boucle de scan, après le calcul du score :
if (score >= 80) {
    const msg = `🚀 *Nouveau Token Explosif !*\n\n` +
                `🪙 Token: ${token.symbol}\n` +
                `🔥 Score Viral: ${score}/100\n` +
                `💧 Liquidité: $${token.liquidity}`;
    
    await sendAlert(msg);
}
