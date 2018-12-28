const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("515240557874905089")
setInterval(function() {
channel.send(``i love iTzSemba i love iTzSembai love iTzSembai love iTzSembai love iTzSembai love iTzSembai love iTzSembai love iTzSembai love iTzSembai love iTzSembai love iTzSemba`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
