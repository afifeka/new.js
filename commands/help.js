const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    let helpembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setDescription("**Prefix : `i!`**")
    .addField(":lock: Moderators Command!", "| `i!ban [Player] [Reason]` | `i!kick [Player] [Reason]` | `i!tempmute [Player] [Time]` |\n| `i!say [say]` | `i!purge [Number]` | `i!news [news]` |\n| `i!warn [*Comming Soon*]` | `i!addrole [Player] [Role Name]` | `i!removerole help` |")
    .addField(":earth_asia: General Command", "| `i!info` | `i!serverinfo` | `i!ping` |\n| `i!afk [Reason]` | `i!help` | `i!ikan [question]` |\n| `i!userinfo [User]` | `!stats` | `!serverlist` |\n| `!weather [Location]`")
    .addField(":musical_note: Music Command", "| `i!play` | `i!skip` | `i!stop` |")
    .setFooter("Beta v0.2 | Discord.js");
    message.delete().catch(O_o=>{});
    message.channel.send(":mailbox_with_mail: **Sending Help To Your DM!**")
    return message.author.send(helpembed);           
}
  
module.exports.help = {
  name: "help"
}
