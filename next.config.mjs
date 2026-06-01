/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  /**
   * Voorkomt corrupte webpack filesystem-cache in `next dev` (ontbrekende chunks,
   * MODULE_NOT_FOUND, soms “lege” pagina’s zonder CSS).
   * Lokale dev: `npm run dev` (webpack). Optioneel sneller: `npm run dev:turbo`.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false
    }
    return config
  },
  async redirects() {
    return [
      {
        source: '/van-punt-a-naar-punt-b',
        destination: '/de-eerste-stap',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
