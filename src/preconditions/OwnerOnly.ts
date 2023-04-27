import { BOT_OWNER } from '#/lib/utils/constants';
import { 
	AllFlowsPrecondition, 
	AsyncPreconditionResult 
} from '@sapphire/framework';
import type { Snowflake } from 'discord.js';

export class UserPrecondition extends AllFlowsPrecondition {

	/**
	 * @description message listeners bot owner check
	 * @param message
	 * @returns boolean
	 */
	public override async messageRun(...[message]: Parameters<AllFlowsPrecondition['messageRun']>) {
		return this.isBotOwner(message.author.id);
	}

	public override async chatInputRun(...[interaction]: Parameters<AllFlowsPrecondition['chatInputRun']>) {
		return this.isBotOwner(interaction.user.id);
	}

	public override contextMenuRun(...[interaction]: Parameters<AllFlowsPrecondition['contextMenuRun']>) {
		return this.isBotOwner(interaction.user.id);
	}

	private async isBotOwner(id: Snowflake): AsyncPreconditionResult {
		return BOT_OWNER.includes(id) ? this.ok() : this.error({ message: 'Only owner to enable execute this command.' });
	}
}

declare module '@sapphire/framework' {
	interface Preconditions {
		OwnerOnly: never;
	}
}
