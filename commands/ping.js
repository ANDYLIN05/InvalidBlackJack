module.exports = {
    name: 'ping',
    descroption: 'Ping!',
    execute(message,args){
        message.channel.send('Pong!');
    },
};