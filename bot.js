const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(NzYwOTIzMTM5NjcyMTEzMTYy.X3TG5Q.-Sqvsz_Pn1wHamGM9ulO1LtUS_c);//where BOT_TOKEN is the token of our bot
