import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

const sharedPlugins = [
	resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx', '.cjs', '.mjs'], preferBuiltins: true }),
	commonjs(),
];

export default [
	// CJS: No bundle
	{
		input: ['index.ts', 'namespace.ts'],
		output: {
			dir: 'lib-preserve',
			format: 'cjs',
			preserveModules: true,
			interop: 'auto',
		},
		plugins: [...sharedPlugins],
		treeshake: false,
	},
	// CJS: Bundled
	{
		input: 'index.ts',
		output: {
			dir: 'lib',
			format: 'cjs',
			preserveModules: false,
			interop: 'auto',
		},
		plugins: [...sharedPlugins],
		treeshake: false,
	},
	// ESM: No bundle
	{
		input: ['index.ts', 'namespace.ts'],
		output: {
			dir: 'esm-preserve',
			format: 'es',
			preserveModules: true,
			interop: 'auto',
		},
		plugins: [...sharedPlugins],
		treeshake: false,
	},
	// ESM: Bundled
	{
		input: 'index.ts',
		output: {
			dir: 'esm',
			format: 'es',
			preserveModules: false,
			interop: 'auto',
		},
		plugins: [...sharedPlugins],
		treeshake: false,
	}
]
