const Telegraf = require('telegraf');
const express = require('express')

const app = express()

const PORT = process.env.PORT || '8080'




const bot = new Telegraf("1473534811:AAGJoD2Vdp6aCTwz2PklMEQn-Qx-G2VspIk")
// Set the bot response
bot.on('text', ({ replyWithHTML}) => replyWithHTML('<b>Hello</b>'))

bot.telegram.setWebhook(process.env.URL)


app.get('/', (req, res) => res.send('Hello World!'))
// Set the bot API endpoint
app.use(bot.webhookCallback('/secret-path'))
app.listen(PORT, () => {
  console.log('Example app listening on port '+PORT+'!')
})
