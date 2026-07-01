/**
 * Bedrijfsfilm (homepage, onder intro). Vul het video-ID in of zet
 * NEXT_PUBLIC_VIMEO_FILM_ID in .env.development / Netlify env vars.
 */
export const VIMEO_FILM_VIDEO_ID =
  process.env.NEXT_PUBLIC_VIMEO_FILM_ID?.trim() ?? ''

/** Startvolume bedrijfsfilm 0–1 (default 0.72). Geen autoplay. */
export function vimeoFilmDefaultVolume(): number {
  const raw = process.env.NEXT_PUBLIC_VIMEO_FILM_VOLUME?.trim()
  if (!raw) return 0.72
  const n = Number(raw)
  if (!Number.isFinite(n)) return 0.72
  return Math.min(1, Math.max(0, n))
}

export function vimeoFilmEmbedUrl(videoId: string): string {
  const params = new URLSearchParams({
    autoplay: '0',
    muted: '0',
    title: '0',
    byline: '0',
    portrait: '0',
    vimeo_logo: '0',
    dnt: '1',
  })

  return `https://player.vimeo.com/video/${videoId}?${params.toString()}`
}
