//MTAwMzc4ODA4MDY3Njg4MDUxMA.GfmBNP.2ZwzLZhJzIDF0PNfPLNL6Voq2J79SfL9CbEdYI

const {Client, Intents, MessageEmbed} = require("discord.js")
require("dotenv").config();
const client = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]})

//bot code
const prefix = ".p"

client.once("ready", (bot) => {
    client.user.setStatus('online')
    client.user.setActivity('a tu hermana', {type: "WATCHING"})
    console.log("-------------------------------")
    console.log("                               |")
    console.log(`Bot: ${bot.user.username}                 |
                               |\nStatus: ${bot.presence.status}                 |`)
    console.log("                               |")
    console.log("-------------------------------")
})
//message embed
const m1 = new MessageEmbed()
    .setColor([0, 225, 225])
    .setTimestamp()
    .setTitle("El men")
    .setURL("https://www.instagram.com/danny_.harrison/")
    .setAuthor(
        "Danny", 
        "https://commondatastorage.googleapis.com/files-lagranja-pot-cl/images/uploads/product_show_1579197291-manijaponesoriginal_50.png",
        "https://www.instagram.com/danny_.harrison/"
        )
    .setDescription("el mani japones y las pitusas son GOD")
    .setThumbnail("https://commondatastorage.googleapis.com/files-lagranja-pot-cl/images/uploads/product_show_1579197291-manijaponesoriginal_50.png")
    .setFields({
        name: "Artista",
        value: "danny-remix"
    })
const m2 = new MessageEmbed()
    .setColor([0, 225, 225])
    .setTimestamp()
    .setTitle("Song")
    .setThumbnail("https://commondatastorage.googleapis.com/files-lagranja-pot-cl/images/uploads/product_show_1579197291-manijaponesoriginal_50.png")
    .setFields({
        name: "Artista",
        value: "rr-remix"
    })
client.on("messageCreate", (message) => {
    console.log(message)
    if(message.author.bot) {
        console.log("Los bots no tienen permitido hablar con otros bots")
    }
    const arguments = message.content.split(/ +/)
    const comand = arguments.shift().toLowerCase()
    if(comand === ".dancer") {
        //return message.reply({embeds: [m1]})
    }
    if(comand === ".p") {
        return message.reply({embeds: [m2]})
    }
    if(comand === ".soybot") {
        return message.reply("Los bots no tienen permitido hablar con otros bots")
    }
    // if(comand === "/") {
    //     return message.reply("Los bots no tienen permitido hablar con otros bots")
    // }
    console.log(comand)
})


client.login(process.env.DSTOKEN)