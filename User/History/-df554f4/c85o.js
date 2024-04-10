module.exports = {
    name: "ping",
    description: "ping",
    async execute(message, arg, client, discord){
        message.channel.send("PONG!")
    }
}