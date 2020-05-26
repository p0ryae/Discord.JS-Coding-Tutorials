const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    if(args.length === 2) {
        const member = message.mentions.members.size === 1 ? 
          message.mentions.members.first() :
          message.guild.members.cache.get(args[1]);
        if(member) {
          const embed = new MessageEmbed()
            .setTitle('User Information')
              .addField('Player Name', message.author.username, true)
              .addField('Version ', version, true)
              .addField('Current Server', message.guild.name, true)
              .addField(`Owner of ${message.guild.name}`, message.guild.owner, true)
              .addField('Latency', `\n**Ping:** \`${responseTime}ms\``, true)
              .setColor(0xE1310C)
              .setThumbnail(message.author.displayAvatarURL({dynamic: true, format: 'png'}))
              .setDescription(`${member.roles.cache.map(role => role.toString()).join(' ')}`)
              .setTimestamp()
              .setFooter('Looking pretty slick')
          message.channel.send(embed);
    }
}
}

module.exports.config = {
    name: "hello",
    description: "Answers hello",
    usage: "?hello",
    accessableby: "Members",
    aliases: []
}