const logger = require("../utils/logger");
const { Events } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        logger.info(`Logged in as "${client.user.tag}"`);
        // do other things here
    }
}