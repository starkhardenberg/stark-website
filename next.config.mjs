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
      {
        source: '/zakelijk/momentum-at-werk',
        destination: '/zakelijk/duurzame-inzetbaarheid',
        permanent: true,
      },
      {
        source: '/zakelijk/jaartraject',
        destination: '/zakelijk/traject',
        permanent: true,
      },
      {
        source: '/zakelijk-v2',
        destination: '/zakelijk',
        permanent: true,
      },
      {
        source: '/zakelijk/ondernemers',
        destination: '/zakelijk',
        permanent: true,
      },
      {
        source: '/zakelijk/werkgevers',
        destination: '/zakelijk/duurzame-inzetbaarheid',
        permanent: true,
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
