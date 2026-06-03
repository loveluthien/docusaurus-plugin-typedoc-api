import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx'],
  format: ['cjs'],
  outDir: 'lib',
  external: [/^@theme\//, /^@docusaurus\//, /^@vscode\//, /\.css$/]
});
