const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN)
const web_link = "https://www.brazino777.com/";

bot.start((ctx) =>
  ctx.reply("Welcome to the Dev Casino.", {
    reply_markup: {
      keyboard: [[{ text: "Dev Casino", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
