const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    const sayMessage = message.content.split(" ").slice(1).join(" ");
    message.delete().catch();
    message.channel.send(sayMessage);
}



module.exports.help = {
  name: "say"
}
