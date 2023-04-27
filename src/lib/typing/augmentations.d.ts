
declare module 'NodeJS' {
	interface ProcessEnv {
		DISCORD_TOKEN: string;
        DEFAULT_PREFIX: string;
        NODE_ENV: "development" | "production";
	}
}
