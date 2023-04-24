/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const isProd = true

const repo = isProd ? "ChristinaNguyen" : ''
const assetPrefix = isProd ? `/${repo}/` : /assets/
const basePath = isProd ? `/${repo}` : ''


module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
}
