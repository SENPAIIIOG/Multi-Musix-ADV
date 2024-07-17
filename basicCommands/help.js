const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');
const db = require("../mongodb");
module.exports = {
  name: 'help',
  aliases: ['hlp', 'h'],
  description: 'Shows a list of available commands',
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor('#2b71ec')
      .setAuthor({
        name: 'Im here to Help!',
        iconURL: 'https://cdn.discordapp.com/attachments/1175487983915376662/1175667506791325706/communication.png?ex=656c10b0&is=65599bb0&hm=e378f1b355a2401bcab504b08a0766001d6b7c090c91ce0a7a7a87c868feb955&', 
        url: 'https://discord.gg/rcBJa2GTUz'
    })
     
      .setDescription(`__**STATS :**__\n\n> **📊 Bot in servers:** ${serverCount}\n> **🟢 Bot Ping:** ${botPing}ms\n> **👑 Made By [HOGWARTS DEVELOPERS](https://discord.gg/rcBJa2GTUz)**\n\n__**COMMANDS :**__ `)
      .addFields(
      
        {
          name: '▶️  Basic',
          value: '`avatar`, `userinfo`',
          inline: true,
        },
      
        {
          name: '▶️  Utility',
          value: '`kick`, `ban`, `serverinfo`,`userinfo`, `clear`',
          inline: true,
        }
      )
      .setThumbnail(botUser.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
      .setImage(`https://cdn.discordapp.com/attachments/1170606500994093156/1263044707534241802/static_1.png?ex=6698cd8c&is=66977c0c&hm=b4c277b27756af653c8ba396371e53302a5694bac6cb1f81e9c2762c46280c44&`);
    
    const button1 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/rcBJa2GTUz')
      .setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder()
      .addComponents(button1);
    message.reply({ embeds: [embed], components: [row] });
  },
};
