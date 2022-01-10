const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv","addbot"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using Auda? Great, Thank you! Consider adding it to your server")
      .setColor("#FFEB00")
      .setAuthor('Auda','https://cdn.discordapp.com/emojis/786877499316764702.gif?size=160')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add Auda to your server`, 'https://discordapp.com/oauth2/authorize?client_id=864193698152579072&scope=bot', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};