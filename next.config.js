/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const isProd = process.env.NODE_ENV === 'production'

const repo = "gfportfolio.github.io"
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`


module.exports = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
}
