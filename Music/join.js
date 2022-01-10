module.exports = { 
    name: "join", 
    description: "Joins the current channel", 
    aliases: "connect, c, summon",
    execute(message) {
         const { channel } = message.member.voice; 
         const serverQueue = message.client.queue.get(message.guild.id); 
         if (!channel) return message.reply(":error: I am already in a voice channel").catch(console.error); 
         if (channel.id !== message.guild.me.voice.channel.id) return message.reply("I am not in your voice channel!").catch(console.error); 
         if(serverQueue) { 
             serverQueue.connection.dispatcher.destroy(); 
             channel.join(); 
             message.client.queue.delete(message.guild.id); 
             serverQueue.textChannel.send('Joined the VC').catch(console.error); 
             return 
            }
            channel.join(); 
            
    message.client.queue.delete(message.guild.id); 
    message.channel.send('Joined the vc').catch(console.error); } };