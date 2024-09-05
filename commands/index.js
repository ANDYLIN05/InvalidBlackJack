const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Deck = require('./commnads/deck');
const Hand = require('./commnads/hand');
const Bet = require('./commnads/bet');

// Track game state per user
const games = {};

// Event when the bot is logged in
client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// Commands handler
client.on('messageCreate', async message => {
    const [command, ...args] = message.content.split(' ');

    if (command === '!play') {
        startGame(message.author.id, message);
    } else if (command === '!hit') {
        playerHit(message.author.id, message);
    } else if (command === '!stand') {
        playerStand(message.author.id, message);
    } else if (command === '!bet') {
        const betAmount = parseInt(args[0]);
        placeBet(message.author.id, message, betAmount);
    } else if (command === '!bal' || command === '!balance') {
        showBalance(message.author.id, message);
    } else if (command === '!stop') {
        stopGame(message.author.id, message);
    }
});

// Log in to Discord
client.login('**REDACTED**');