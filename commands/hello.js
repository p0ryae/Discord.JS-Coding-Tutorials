module.exports.run = async (bot, message, args) => {
      message.reply('Sup')
}

module.exports.config = {
    name: "hello",
    description: "Answers hello",
    usage: "?hello",
    accessableby: "Members",
    aliases: []
}