const assert = require('node:assert/strict');
const { createRequire } = require('node:module');
const test = require('node:test');
const micromatch = require('micromatch');
const braces = createRequire(require.resolve('micromatch'))('braces');

test('brace expansion and glob matching remain compatible', () => {
	assert.deepEqual(braces.expand('src/{components,hooks}/*.{ts,tsx}'), [
		'src/components/*.ts',
		'src/components/*.tsx',
		'src/hooks/*.ts',
		'src/hooks/*.tsx',
	]);
	assert.deepEqual(braces.expand('file{1..5..2}.js'), ['file1.js', 'file3.js', 'file5.js']);
	assert.deepEqual(
		micromatch(['src/index.ts', 'src/Component.tsx', 'src/styles.css'], 'src/*.{ts,tsx}'),
		['src/index.ts', 'src/Component.tsx'],
	);
});

test('deeply nested patterns are rejected before recursive traversal', () => {
	const pattern = '{'.repeat(4000) + 'a,b' + '}'.repeat(4000);
	for (const process of [braces, braces.expand, braces.parse, micromatch.braces]) {
		assert.throws(() => process(pattern), /exceeds max depth/);
	}
});
