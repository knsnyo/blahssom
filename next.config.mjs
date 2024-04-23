/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
  reactStrictMode: false,
}

export default nextConfig
