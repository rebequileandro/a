module.exports = {
    name: ".ping",
    description: "ping",
    async execute(client, message, args, discord){
        message.channel.send("PONG!")
    }
}