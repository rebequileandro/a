module.exports = {
    name: ".pinga",
    description: "ping",
    async execute(client, message, args, discord){
        message.channel.send("PONG!")
    }
}