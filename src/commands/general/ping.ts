import { RoboloCommand } from "#/lib/structures/extension/RoboloCommand";
import { sendLoadingMessage } from "#/lib/utils/utils";
import { RegisterBehavior } from "@sapphire/framework";
import { InteractionResponse, Message, SlashCommandBuilder } from "discord.js";

/**
 * @description Class of the PingCommand
 * @extends RoboloCommand
 */
export class PingCommand extends RoboloCommand {

    /**
     * @description The constructor for the about command.
     * @param context - The command context.
     * @param options - The command options.
     */
    constructor(context: RoboloCommand.Context, options: RoboloCommand.Options) {
        super(context, {
            ...options,
            name: "ping",
            description: "To know ping latency of the bot"
        });
        
    }

    /**
     * @description Register slash command using SlashCommandBuilder
     * @param builder - The command builder.
     */
    public override registerApplicationCommands(builder: RoboloCommand.Registry) {
        const command: SlashCommandBuilder = new SlashCommandBuilder()
            .setName(this.name)
            .setDescription(this.description);

        builder.registerChatInputCommand(command, {
            behaviorWhenNotIdentical: RegisterBehavior.Overwrite,
            guildIds: [],
            idHints: [],
        });
    }

    /**
     * @description Run the command as interaction.
     * @param interaction - The command interaction.
     */
    public async chatInputRun(interaction: RoboloCommand.ChatInputCommandInteraction): Promise<InteractionResponse> {
        return this.handle(interaction);
    }

    /**
     * @description Run the command as message.
     * @param message - The message args
     */
    public async messageRun(message: Message): Promise<void> {
        return this.handle(message);
    }

    /**
     * @description Handle the command
     * @param ctx - typeof ChatInputCommandInteraction or Message.
     */
    public async handle(ctx: RoboloCommand.ChatInputCommandInteraction | Message): Promise<any> {
        return ctx.reply({  
            embeds: [sendLoadingMessage()]
        })
    }
}