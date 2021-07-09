import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const sharedPlugins = [
	resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'], preferBuiltins: true }),
	commonjs(),
];

export default [
	// No bundle
	{
		input: ['index.ts', 'namespace.ts'],
		output: {
			dir: 'lib-preserve',
			format: 'cjs',
			preserveModules: true,
		},
		plugins: [...sharedPlugins],
		treeshake: false,
	},
	// Bundled
	{
		input: 'index.ts',
		output: {
			dir: 'lib',
			format: 'cjs',
			preserveModules: false,
		},
		plugins: [...sharedPlugins],
		treeshake: false,
	}
]
