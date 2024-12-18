require("dotenv").config();
const logger = require("./logger")("config");
const { readFileSync } = require("node:fs");
const toml = require("toml");

let config;
try {
    logger.debug("Loading ./config.toml");
    config = toml.parse(readFileSync("./config.toml", "utf-8"));
} catch (err) {
    logger.error(`${err.code}: ${err.message}`);
    logger.debug(err.stack);
    process.exit(-1);
};

module.exports = { config };