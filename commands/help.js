const Discord = require("discord.js")
const botconfig = require("../botsettings.json");

module.exports.run = async (bot, message, args) => {
    const help = new Discord.MessageEmbed()
        .setTitle('__Help and Commands__')
        .addField('__Help__', 'If you need support, try to contact [Wylie](https://twitter.com/TheWylieMaster). He can also be contacted [here](https://discord.gg/r5KW2bR)').
        .addField('__Commands__', '`' + botconfig.prefix + 'profile {Player name or Account ID}`\n\n`' + botconfig.prefix + 'level {Level name or Level ID}`\n\n`' + botconfig.prefix + 'leaderboard {star/cp}`')
        .setColor('0x' + botconfig.commandColour)
    message.channel.send(help)
}



module.exports.config = {
    name: "help",
    description: "provides helpful information",
    usage: botconfig.prefix + "help",
    accessableby: "Members",
    aliases: ['commands']
}
