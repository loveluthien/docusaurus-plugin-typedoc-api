const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
	{
		ignores: [
			'node_modules/',
			'build/',
			'cjs/',
			'coverage/',
			'dist/',
			'dts/',
			'esm/',
			'lib/',
			'mjs/',
			'umd/',
			'**/*.d.ts',
			'**/*.d.cts',
			'**/*.d.mts',
			'**/*.min.js',
			'**/*.map',
			'**/*.snap',
			'**/*.css',
		],
		linterOptions: {
			reportUnusedDisableDirectives: 'off',
		},
	},
	...tseslint.configs.recommended,
	{
		rules: {
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
);
