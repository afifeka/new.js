const Discord = require("discord.js");
const botsettings = require("./Storage/botsettings.json");
const key = process.env.YOUTUBE_API_KEY;
const fs = require("fs");
const colors = require('colors');
const moment = require('moment');
const yt = require("ytdl-core");
const Youtube = require("simple-youtube-api");
const youtube = new Youtube(key);
const queue = new Map();
const snekfetch = require("snekfetch");
const prefixes = require("./Storage/prefixes.json")
const economy = require("./Storage/economy.json");
const db = require('quick.db');
const figlet = require('figlet');
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  function randomStatus() {
        let status = [`${bot.guilds.size} SERVERS!!`, `${bot.users.size.toLocaleString()} USERS!`, `UPDATE!`, `i!help | Beta v1.0`]
        let rstatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[rstatus], {type: 'WATCHING'});

   }; setInterval(randomStatus, 15000)
 

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.login(tokenfile.token);
