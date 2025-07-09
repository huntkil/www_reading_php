/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/rd',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.watchOptions = {
        ignored: /node_modules|\.git|\.next|dist|build|coverage|\.env|\.DS_Store|Thumbs\.db|\.vscode|\.idea|__tests__|__mocks__|\.test\.|\.spec\.|\.swp$|\.swo$|\.tmp$|\.log$/,
        poll: 1000, // Poll every 1 second instead of watching
        aggregateTimeout: 300, // Wait 300ms after changes before rebuilding
      };
    }
    return config;
  },
};

module.exports = nextConfig; 