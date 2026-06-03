import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  format: ['cjs'],
  outDir: 'lib',
  bundle: false,
  external: [/^@theme\//, /^@docusaurus\//, /^@vscode\//, /\.css$/]
});
