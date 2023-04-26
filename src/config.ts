import { LogLevel} from "@sapphire/framework";
import { 
    GatewayIntentBits, 
    Partials
} from "discord.js";
import { RoboloOptions } from "#/lib/structures/RoboloClient";

/**
 * @description RoboloClientConfig is config of RoboloClient
 * @extends SapphireClientOptions
 * @see RoboloClient
 */
export const RoboloClientConfig: RoboloOptions = {
    defaultPrefix: process.env.DEFAULT_PREFIX ?? "rb?",
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.MessageContent,
    ],
    partials: [
        Partials.Channel, 
        Partials.GuildMember, 
        Partials.Message, 
        Partials.Reaction
    ],
    logger: {
        level: process.env.NODE_ENV === "production" ? LogLevel.Info : LogLevel.Debug,
    },
    loadDefaultErrorListeners: true,
    loadMessageCommandListeners: true
}