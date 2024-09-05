function placeBet(userId, message, amount) {
    const game = games[userId];
    if (!game) {
        message.reply("You need to start a game first with !play");
        return;
    }

    try {
        game.playerBet.placeBet(amount);
        message.reply(`Bet placed: ${amount}. Remaining balance: ${game.playerBet.getBalance()}`);
    } catch (err) {
        message.reply(err.message); // "No money" error handled here
    }
}