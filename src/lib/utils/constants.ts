import { join } from 'path';
import { parseEnvValue } from './parseEnvValue';

process.env.NODE_ENV ??= 'development';

export const BOT_OWNER: string[] = parseEnvValue(process.env.DEV_ID ?? '');
export const rootDir = join(__dirname, '..', '..');
export const srcDir = join(rootDir, 'src');

export const RandomLoadingMessage = ['Computing...', 'Thinking...', 'Cooking some food', 'Give me a moment', 'Loading...'];
