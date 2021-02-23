const TelegramClient = require('./utils/TelegramClient');

const main = async () => {
  await TelegramClient.sendMessage("Exemplo de outra mensagem sendo enviada");
}

main();