function stopGame(userId, message) {
    delete games[userId];
    message.reply("Game stopped.");
}