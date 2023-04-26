import { Subcommand, SubcommandOptions } from "@sapphire/plugin-subcommands";
import { ChatInputCommand } from "@sapphire/framework";

/**
 * @description The RoboloCommand class.
 * @extends Subcommand
 */
export abstract class RoboloCommand extends Subcommand {
    /**
     * @description The constructor for the RoboloCommand class.
     * @param context - The context for the command.
     * @param options - The options for the command.
     * @protected
     */
    protected constructor(context: Subcommand.Context, options: SubcommandOptions) {
        super(context, {
            ...options,
        });
    }

    /**
     * @description The run method for the chat input command.
     * @param interaction - The interaction for the command.
     * @param context - The context for the command.
     */
    // @ts-ignore
    public async chatInputRun(
        interaction: ChatInputCommand.Interaction,
        context: ChatInputCommand.RunContext
    ): Promise<unknown> {
        return super.chatInputRun(interaction, context);
    }
}

export declare namespace RoboloCommand {
    type Options = SubcommandOptions;
    type JSON = Subcommand.JSON;
    type Context = Subcommand.Context;
    type RunInTypes = Subcommand.RunInTypes;
    type ChatInputCommandInteraction = Subcommand.ChatInputCommandInteraction;
    type ContextMenuCommandInteraction = Subcommand.ContextMenuCommandInteraction;
    type AutocompleteInteraction = Subcommand.AutocompleteInteraction;
    type Registry = Subcommand.Registry;
}