import { 
    SapphireClient, 
    SapphireClientOptions
} from "@sapphire/framework";
import { ClientOptions } from "discord.js";

/**
 * @interface RoboloOptions
 * @description The options for the ImperiaClient class.
 */
export interface RoboloOptions extends SapphireClientOptions, ClientOptions {
    
}

/**
 * @class RoboloClient
 * @description The RoboloClient class.
 * @extends SapphireClient
 */
export class RoboloClient extends SapphireClient {
    /**
     * @description The constructor for the ImperiaClient class.
     * @param options - The options for the client.
     */
    public constructor(options: RoboloOptions) {
        super(options);
    }
}