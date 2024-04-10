module.exports = {
    name: "clear",
    aliases: ['del', 'borrar', 'limpiar'],
    description: "delete all messages",
    async execute(client, message, args, discord) {
        if (!args[0]) return message.reply("ingresa numero de mensages a borrar")
        if (isNaN(args[0])) return message.reply("ingresa un numero")
        if (args[0] < 1) return message.reply("ingresa un numero mayor a 0")
        await message.channel.messages
            .fetch({ limit: args[0] })
            .then((msg) => {
                message.channel.bulkDelete(msg.messages);
            })
    }
}