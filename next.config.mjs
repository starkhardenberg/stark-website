/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: '/contact',
        has: [{ type: 'query', key: 'onderwerp', value: 'kennismaking' }],
        destination: '/kennismaken',
        permanent: false,
      },
    ]
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
}

export default nextConfig
