import { type ArrayString } from '@skyra/env-utilities';

declare module '@skyra/env-utilities' {
	interface Env {
		OWNERS: ArrayString;
	}
}