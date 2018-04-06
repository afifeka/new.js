const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      let role = message.guild.roles.find(r => r.name === "ENERGY");
      message.member.addRole(role)
    
      if(message.member.roles.has(role.id)) return message.reply("You already have ENERGY roles!");

      let acceptlaporan = new Discord.RichEmbed()
      .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
      .setColor(3447003)
      .setDescription(`${message.author.tag} Has Been Verified`)
      .setFooter("Ikan | Beta v2.0")

      let modlog = message.guild.channels.find(`name`, "mod-log");
      if(!modlog) return message.channel.send("Cant Find mod-log Channel.");

      modlog.send(acceptlaporan);
      message.react("✅");

 }



module.exports.help = {
  name: "verify"
}
