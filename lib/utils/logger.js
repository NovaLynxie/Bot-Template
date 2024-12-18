const { createLogger, format, transports } = require("winston");
require("winston-daily-rotate-file");
const { name } = require("../../package.json");
const { addColors } = require("winston/lib/winston/config");
const parentdir = "./logs";
const timestamp = "YYYY-MM-DD HH:mm:ss";
const getTimeZone = () => new Date().toLocaleString(
    Intl.DateTimeFormat().resolvedOptions().locale,
    { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }
);
const customLevels = {
    colors: {
        error: "red",
        warn: "yellow",
        info: "white",
        data: "grey",
        debug: "blue",
        verbose: "magenta"
    },
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        debug: 3,
        data: 4,
        verbose: 5
    }
};
addColors(customLevels.colors);
const customOutputFormat = format.printf(
    ({ processName, serviceName, level, message, timestamp }) =>
        `${timestamp} [${processName}/${serviceName}] (${level}): ${message}`
);
const logger = (service = "") => 
    createLogger({
        defaultMeta: {
            processName: name ?? "discordbot",
            serviceName: service ? service : "runtime"
        },
        levels: customLevels.levels,
        transports: [
            new transports.Console({
                format: format.combine(
                    format.colorize(),
                    format.timestamp({ format: timestamp }),
                    customOutputFormat
                )
            }),
            new transports.DailyRotateFile({
                filename: `${parentdir}/debug-%DATE%.log`,
                format: format.combine(
                    format.timestamp({ format: timestamp }),
                    customOutputFormat
                ),
                datePattern: "YYYY-MM-DD",
                zippedArchive: true,
                maxSize: '20m',
                maxFiles: '14d',
                level: "debug"
            }),
            new transports.DailyRotateFile({
                filename: `${parentdir}/latest-%DATE%.log`,
                format: format.combine(
                    format.timestamp({ format: timestamp }),
                    customOutputFormat
                ),
                datePattern: "YYYY-MM-DD",
                zippedArchive: true,
                maxSize: '20m',
                maxFiles: '14d',
                level: "info"
            })
        ]
    });
module.exports = logger;