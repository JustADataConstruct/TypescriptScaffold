const esbuild = require('esbuild');
esbuild.build({
	entryPoints: ['src/index.ts'],
	tsconfig: 'tsconfig.json',
	outdir: 'dist',
	platform: 'node',
	bundle: true
})