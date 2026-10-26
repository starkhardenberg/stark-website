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
        destination: '/zakelijk/draagkracht',
        permanent: true,
      },
      {
        source: '/zakelijk/traject',
        destination: '/zakelijk/draagkracht',
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
      // Oude WordPress-site starkhardenberg.nl → nieuwe site
      { source: '/over-ons', destination: '/team', permanent: true },
      { source: '/afspraak-maken', destination: '/kennismaken', permanent: true },
      { source: '/een-op-een', destination: '/coaching', permanent: true },
      { source: '/category/een-op-een/:slug(pe.*)', destination: '/impact', permanent: true },
      { source: '/category/een-op-een/:slug(ass.*)', destination: '/trainen', permanent: true },
      { source: '/category/een-op-een/:path*', destination: '/coaching', permanent: true },
      { source: '/category/lidmaatschap/:path*', destination: '/trainen', permanent: true },
      { source: '/lidmaatschap/:path*', destination: '/trainen', permanent: true },
      { source: '/camp-leone', destination: '/momentum', permanent: true },
      { source: '/category/losse-activiteiten/:slug(camp.*)', destination: '/momentum', permanent: true },
      { source: '/category/losse-activiteiten/:path*', destination: '/trainen', permanent: true },
      { source: '/losse-activiteiten', destination: '/trainen', permanent: true },
      { source: '/ervaring-anoniem', destination: '/coaching', permanent: true },
      { source: '/ervaring-loes', destination: '/coaching', permanent: true },
      { source: '/:slug(ervaring-.*)', destination: '/trainen', permanent: true },
      { source: '/author/:path*', destination: '/', permanent: true },
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
