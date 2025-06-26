/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 필요시 experimental.appDir 등 추가 설정
    webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
  images: {
    domains: ['via.placeholder.com'], // 외부 이미지 도메인 등록
  },
};

module.exports = nextConfig;
