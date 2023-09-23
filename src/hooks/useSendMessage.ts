import axios from 'axios'
import 'dotenv'

async function useSendMessage(message: FormData) {
    let myApi = process.env.BOT_API
        try {
        if (myApi) {
            let myMessage = ''
            for (let [key, item] of Array.from(message.entries())) {
                myMessage += `${key}: ${item}\n`
            }
            const response = await axios.post(`https://api.telegram.org/bot${myApi}/sendMessage`, {
                chat_id: 5244023502,
                text: myMessage,
            });
        }

    } catch (error) {
        console.error('Ошибка при отправке запроса в Telegram API:', error);
    }
}

export default useSendMessage