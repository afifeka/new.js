const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send(":warning: **| Please Tag Player To Be Report!**");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("**REPORTS**")
    .setColor("#f3d804")
    .addField(":bust_in_silhouette: **| Player**", `**${rUser} | ID: ${rUser.id}**`)
    .addField(":mag: **| Reason**", rreason)
    .setFooter("Beta v0.2 | Discord.js");

    let reportschannel = message.guild.channels.find(`name`, "mod-log");
    if(!reportschannel) return message.channel.send("No Named Channel `mod-log`.");


    message.delete().catch(O_o=>{});
    message.channel.send(":white_check_mark: **| Success Reported The Player!**")
    reportschannel.send(reportEmbed);

    return;
}




module.exports.help = {
  name: "report"
}
