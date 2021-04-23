const fetch = require("node-fetch");

/**
* FATES LIST API WRAPPER
*
* Made with ❤️ By Toxic Dev 
*/

class FL {
    constructor(id, auth){
        this.id = id
        this.auth = auth
    }
    async post(server_count, shard_count){
        let body = shard_count ? { 'guild_count': server_count, 'shard_count': shard_count } : { 'guild_count': server_count, 'shard_count': 0 }
        await fetch(`https://fateslist.xyz/api/bots/${this.id}/stats`, {
            method: 'POST',
            body:    JSON.stringify(body),
            headers: { 'Content-Type': 'application/json', 'authorization': this.auth },
        }).then(async (res) => {console.log(await res.json())})
    }

    async get(botID, response, compact){
        if(!botID) throw new Error("Missing Bot ID, Should be a valid Discord Snowflake")
        fetch(`https://fateslist.xyz/api/bots/${botID}` + (compact ? '?compact=true' : ''), {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }).then(async res => {
            response(await res.json())
        })
    }
}

module.exports = FL;
