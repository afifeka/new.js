const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if(!args[2]) return message.reply("**Usage `!ikan apakah <Question>`**");
    let replies = ["Iya", "Tidak", "Saya Tidak Tahu", "Apa Yang Kamu Bilang?", "Sangat Benar", "Sangat Salah"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setColor("#8d09f1")
    .addField(":question: | Question", question)
    .addField(":envelope_with_arrow: | Answer", replies[result])
    .setFooter(`Question By ${message.author.tag}`);

    message.channel.send(ballembed)

}
  
module.exports.help = {
  name: "ikan"
}
