# fates.js
The official NPM Module for interacting with the Fates List API

---

## Installation
`npm install coming soon`

---

## Hard Coded Install
Append the Line below to your package.json
```
    "": "^1.0.0",
```

---

## Posting Stats

### Constructor

```
FL(client, token)
```

###### Arguments
Parameter | Type | Optional | Description
|--------------|----------|--------------|--------------|
token | String | No | The API Auth Token found on your bots page.
client | Snowflake | No | The Client ID for the bot you want to post stats to.

--- 

### Discord.js v12 Example

```js
const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "!";
const FL = require("fates.js")
const Fates = new FL(client.user.id, "bot-auth-token")

client.on("ready", () => {
console.log(`Logged in as ${client.user.tag}.`)
setInterval(() => {
/* Here is where we Post the stats to the Site (Only use one of these) */
   Fates.post(client.guilds.cache.size) /* Will `POST` server count*/
   //Fates.post(client.guilds.cache.size, client.shard.count) /* Will `POST` server and shard count*/
  })
}, 300000) //5 Minutes in MS

client.on("message", message => {
    if(message.author.bot) return
    if(message.content == prefix + "ping"){
        message.reply(`Pong! it took ${client.ws.ping}`)
    }
})

client.login("token")

```

---

## Getting Stats

### Constructor

```
FL()
```

### Example
```js
   COMING SOON
```
