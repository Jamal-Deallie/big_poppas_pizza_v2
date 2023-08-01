/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  sassOptions: {
    fiber: false,
  },
  experimental: {
    optimizeCss: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            memo: true,
            dimensions: false,
            svgoConfig: {
              multipass: true,
              plugins: [
                'removeDimensions',
                'removeOffCanvasPaths',
                'reusePaths',
                'removeElementsByAttr',
                'removeStyleElement',
                'removeScriptElement',
                'prefixIds',
                'cleanupIDs',
                {
                  name: 'cleanupNumericValues',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'convertPathData',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'convertTransform',
                  params: {
                    floatPrecision: 1,
                  },
                },
                {
                  name: 'cleanupListOfValues',
                  params: {
                    floatPrecision: 1,
                  },
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
