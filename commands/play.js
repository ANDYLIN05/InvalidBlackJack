function startGame(userId, message) {
    if (games[userId]) {
        message.reply("You're already in a game!");
        return;
    }

    const deck = new Deck();
    const playerHand = new Hand();
    const dealerHand = new Hand();
    const playerBet = new Bet(1000); // Initialize with 1000 balance

    deck.shuffle();
    playerHand.addCard(deck.deal());
    dealerHand.addCard(deck.deal());
    playerHand.addCard(deck.deal());
    dealerHand.addCard(deck.deal());

    games[userId] = { deck, playerHand, dealerHand, playerBet };

    message.reply(`Game started! Your cards: ${playerHand.toString()}, Dealer's visible card: ${dealerHand.getCard()[0].toString()}`);
}