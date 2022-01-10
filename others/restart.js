const Discord = require('discord.js');

const client = new Discord.Client();
const mySecret = process.env['TOKEN']
client.login(TOKEN);

client.on('message', message => {
  if (message.channel.type != 'text' || message.author.bot)
    return;

  let command = message.content.split(' ')[0].slice(1);
  let args = message.content.replace('.' + command, '').trim();
  let isBotOwner = message.author.id == '722343830149398539';

  switch (command) {
    case 'restart': {
      if (!isBotOwner)
        return;

      message.channel.send('Restarting...').then(m => {
        client.destroy().then(() => {
          client.login('TOKEN');
        });
      });
      break;
    }


    case 'shutdown': {
      if (!isBotOwner)
        return;

      message.channel.send('Shutting down...').then(m => {
        client.destroy();
      });
      break;
    }
  }
});