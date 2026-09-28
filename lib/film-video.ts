/**
 * Bedrijfsfilm (homepage). Vul het video-ID in of zet
 * NEXT_PUBLIC_VIMEO_FILM_ID in .env.development / Netlify env vars.
 */
/** Zwart-wit bedrijfsfilm op Vimeo; env var overschrijft voor andere omgevingen. */
const VIMEO_FILM_DEFAULT_ID = '1205831517'

/** Vimeo CDN poster (oEmbed thumbnail, grotere crop). */
const VIMEO_FILM_DEFAULT_POSTER =
  'https://i.vimeocdn.com/video/2174515697-6a058691ce3e9aa8790f2b2436e06c61ce07a7f73adae2cf23ec494e81c02ff8-d_1280x720'

export const VIMEO_FILM_VIDEO_ID =
  process.env.NEXT_PUBLIC_VIMEO_FILM_ID?.trim() || VIMEO_FILM_DEFAULT_ID

export const VIMEO_FILM_POSTER =
  process.env.NEXT_PUBLIC_VIMEO_FILM_POSTER?.trim() || VIMEO_FILM_DEFAULT_POSTER

/** Startvolume bedrijfsfilm 0–1 (default 0.72). Geen autoplay tot klik. */
export function vimeoFilmDefaultVolume(): number {
  const raw = process.env.NEXT_PUBLIC_VIMEO_FILM_VOLUME?.trim()
  if (!raw) return 0.72
  const n = Number(raw)
  if (!Number.isFinite(n)) return 0.72
  return Math.min(1, Math.max(0, n))
}

export function vimeoFilmEmbedUrl(videoId: string, autoplay = false): string {
  const params = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    muted: '0',
    title: '0',
    byline: '0',
    portrait: '0',
    vimeo_logo: '0',
    dnt: '1',
  })

  return `https://player.vimeo.com/video/${videoId}?${params.toString()}`
}
