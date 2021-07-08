const { Bot, Keyboard, Router, session } = require('grammy');
const express = require('express')
const app = express()
const bot = new Bot();

const PORT = process.env.PORT || '3000'

bot.command('start', async(ctx)=>{
await ctx.reply('am alive oh yh')
})


bot.catch(err => console.log(err))

bot.start()

app.listen(PORT, () => {
  console.log('Example app listening on port '+PORT+'!')
})
