/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    compiler: {
        styledComponents: true,
    },
    eslint: { // Add ESLint configuration here
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;