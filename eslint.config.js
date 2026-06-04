const moon = require('eslint-config-moon');
const react = require('eslint-config-moon/react');
const node = require('eslint-config-moon/node');

const configArray = [
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
	},
	...moon,
	...react,
	...node,
	{
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: __dirname,
			},
		},
		rules: {
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
			'react/jsx-no-literals': 'off',
			'react/jsx-no-useless-fragment': 'off',
			'no-magic-numbers': 'off',
			'import/no-unresolved': 'off',
			'import/no-default-export': 'off',
			'import/no-extraneous-dependencies': 'off',
			'@typescript-eslint/switch-exhaustiveness-check': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'complexity': 'off',
			'@typescript-eslint/no-base-to-string': 'off',
			'unicorn/prefer-module': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
].flat(Infinity);

const seenPlugins = new Map();
for (const config of configArray) {
    if (config && config.plugins) {
        for (const [name, plugin] of Object.entries(config.plugins)) {
            if (seenPlugins.has(name) && seenPlugins.get(name) !== plugin) {
                config.plugins[name] = seenPlugins.get(name);
            } else {
                seenPlugins.set(name, plugin);
            }
        }
    }
}

module.exports = configArray;
