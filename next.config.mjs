/** @type {import('next').NextConfig} */
const nextConfig = {

     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,
};

export default nextConfig;
