/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: true,
	},
	compiler: {
		styledComponents: true,
	},
	output: 'export',
	distDir: 'dist',
	images: {
		loader: 'custom',
		loaderFile: './image-loader.js',
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	webpack: (config, { defaultLoaders, buildId }) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: '@svgr/webpack', options: { removeDimensions: false } }],
		});

		return config;
	},
};

module.exports = nextConfig;
