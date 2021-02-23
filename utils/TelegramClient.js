const { TelegramClient } = require('messaging-api-telegram');

const TOKEN = '1679202227:AAGvsYZ0_ft9OfrdEPbKPI06L8GT9hdW-Ak';
const CHAT_ID = 87580897;

const client = new TelegramClient({
  accessToken: TOKEN,
});

client.getWebhookInfo().catch((error) => {
  console.log(error);
});

// const getChatId = async () => {
//   const [update] = await client.getUpdates();

//   return update.message.from.id;
// };

const sendMessage = async (message) => {
  await client.sendMessage(CHAT_ID, message);
};

module.exports = {
  sendMessage,
};
