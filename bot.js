const { Bot, webhookCallback} = require('grammy');
const express = require('express')
const app = express()
const token = 
const bot = new Bot(token, {
  options: {
    apiRoot: 'http://167.71.21.239:8081'
  }
})
app.use(express.json());
app.use(webhookCallback(bot));



const PORT = process.env.PORT || '3000'

bot.command('start', async(ctx)=>{
await ctx.reply('am alive oh yh')
})


bot.catch(err => console.log(err))

bot.start()

app.listen(port, () =>{
    bot.api.setWebhook("http://167.71.21.239/", {
      drop_pending_updates: true,
    })
    
    console.log('bot started')
  });
