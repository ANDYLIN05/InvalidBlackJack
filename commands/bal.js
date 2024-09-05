function showBalance(userId, message) {
    const game = games[userId];
    if (!game) {
        message.reply("You need to start a game first with !play");
        return;
    }

    message.reply(`Your balance: ${game.playerBet.getBalance()}`);
}