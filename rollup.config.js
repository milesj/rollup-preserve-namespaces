import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';

const sharedPlugins = [
	resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'], preferBuiltins: true }),
	commonjs(),
	json({ compact: true, namedExports: false }),
];

export default {
	input: ['index.ts', 'namespace.ts'],
	output: {
		dir: 'lib',
		format: 'cjs',
		preserveModules: true,
	},
	plugins: [...sharedPlugins],
	treeshake: false,
}
