//MTAwMzc4ODA4MDY3Njg4MDUxMA.GfmBNP.2ZwzLZhJzIDF0PNfPLNL6Voq2J79SfL9CbEdYI

const {Client, Intents, MessageEmbed} = require("discord.js")
require("dotenv").config();
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})

//bot code
const prefix = "p"

client.once("ready", (bot) => {
    console.log("-------------------------------")
    console.log("                               |")
    console.log(`Bot: ${bot.user.username}                 |
                               |\nStatus: ${bot.presence.status}                 |`)
    console.log("                               |")
    console.log("-------------------------------")
})
//message embed
const embed = new MessageEmbed()
    .setColor([0, 225, 225])
    .setTitle("Song")
    .setURL("https://www.google.com")
    .setAuthor(
        "Danny", 
        "https://commondatastorage.googleapis.com/files-lagranja-pot-cl/images/uploads/product_show_1579197291-manijaponesoriginal_50.png",
        "https://www.instagram.com/danny_.harrison/"
        )
client.on("messageCreate", (message) => {
    console.log(message)
    if(message.author.bot) {
        console.log("Los bots no tienen permitido hablar con otros bots")
    }
    if(message.content.startsWith(prefix)){
        const arguments = message.content.split(/ +/)
        const comand = arguments
        if(comand === "p") {
            return message.reply({embeds: [embed]})
        }
        console.log(comand)
    }
})


client.login(process.env.DSTOKEN)