const fs = require("fs")

module.exports = (client, discord) => {
    fs.readdirSync("./events/").forEach(dir => {
        const events = fs
        .readdirSync(`./events/${dir}`)
        .filter(file => file.endsWith(".js"))
        for (const file of events) {
            try {
                const evn = require(`../events/${dir}/${file}`);
                if(evn.event && typeof evn.event !== "string") {
                    console.log(`Error ${file}`)
                    continue;
                }
                evn.event = evn.event || file.replace('.js', '')
                client.on(evn.event, evn.bind(null, client, discord))
                console.log(`Event: ${file} done`)
            } catch (error) {
                console.log("EVENT ERROR:", error)
            }
        }
    })
}