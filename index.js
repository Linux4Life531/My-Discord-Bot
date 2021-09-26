import DiscordJS, { Intents } from 'discord.js'

const client = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
})

client.on('ready', () => {
	console.log("Bot ready")
 })

client.login(process.env['TOKEN'])


client.on('messageCreate', (msg) => {
  if (msg.content === 'Hello Mini Jimmy') {
    msg.reply({
      content: 'Hello There',
    })
  }
})
