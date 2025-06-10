/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Configurações para AdSense
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://googletagmanager.com https://www.google-analytics.com; frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com; object-src 'none';",
          },
        ],
      },
    ];
  },
  
  // Otimizações de imagem
  images: {
    domains: ['googleads.g.doubleclick.net'],
  },
  
  // Configurações de ambiente
  env: {
    NEXT_PUBLIC_ADSENSE_CLIENT_ID: process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
  },
};

module.exports = nextConfig;