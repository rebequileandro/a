require("dotenv").config();

const prefix = ".p"

module.exports = async (client, discord, message) =>  {
    console.log(message)
    if (message.author.bot) {
        console.log("Los bots no tienen permitido hablar con otros bots")
    }
    const args = message.content.split(/ +/)
    const cmd = args.shift().toLowerCase()
    const command = client.commands.get(cmd)
    if(command) {
        command.execute(client, message, args, discord)
    }
}