import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/my_website/",
  assetPrefix: "/my_website/",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
