import '@sapphire/plugin-api/register';
import '@sapphire/plugin-editable-commands/register';
import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-subcommands/register';
import { setup } from '@skyra/env-utilities';
import * as colorette from 'colorette';
import { join } from 'path';
import { srcDir } from '#/lib/utils/constants';
import { RoboloClientConfig } from 'config';
import { RoboloClient } from '#/lib/structures/RoboloClient';

setup({ path: join(srcDir, '.env') });

colorette.createColors({ useColor: true });

/**
 * @description Bootstraps Robolo bots.
 */
async function main(): Promise<void> {
	void new RoboloClient(RoboloClientConfig).login(process.env.DISCORD_TOKEN);
}

void main();
