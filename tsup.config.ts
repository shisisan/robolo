import { defineConfig } from 'tsup';

export default defineConfig({
	clean: true,
	bundle: false,
	dts: false,
	entry: ['src/**/*.ts', '!src/**/*.d.ts'],
	format: ['cjs'],
	minify: false,
	tsconfig: 'tsconfig.json',
	target: 'es6',
	splitting: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	shims: false,
	keepNames: true
});
