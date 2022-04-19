import adapter from '@sveltejs/adapter-auto';
import autoprefixer from 'autoprefixer';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		postcss: {
			plugins: [autoprefixer()],
		},
		scss: {
			includePaths: ['./src/**/*', './node_modules/**/*'],
			prependData: `@import './src/styles/index.scss';`,
			/*
			      prependData: `@import "src/assets/scss/variables.scss";`

			*/
			// alias: {
			// 	'@src': path.resolve('./src'),
			// }
		},
		// aliases: [
		// 	['@src', './src'],
		// ],
		// postcss: true,
		// scss: {
		// 	importer: [
		// 		'./src',
		// 		'./node_modules'
		// 	]
		// }
	}),
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@src': path.resolve('./src'),
				},
			},
		},
	},
};

export default config;
