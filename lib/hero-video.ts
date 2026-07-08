/**
 * Hero-achtergrond (homepage).
 *
 * Desktop (fine pointer): Vimeo HQ background-embed.
 * Touch/mobiel: native MP4 — iframe-autoplay faalt op iOS Safari.
 * Desktop-fallback: zwaardere Cloudinary MP4 als Vimeo niet start.
 */
export const HERO_VIDEO_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() ?? ''

/** Touch — voldoende scherp op klein scherm, beperkt bestandsgrootte. */
export const HERO_VIDEO_MOBILE_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL?.trim() ||
  'https://res.cloudinary.com/zvwcoygn/video/upload/q_auto:good,f_auto,w_1280/Stark_Hero_uo91kd.mp4'

/** Alleen als Vimeo op desktop niet start — max kwaliteit uit Cloudinary. */
export const HERO_VIDEO_DESKTOP_FALLBACK_URL =
  HERO_VIDEO_URL ||
  'https://res.cloudinary.com/zvwcoygn/video/upload/q_auto:best,f_auto,w_2560/Stark_Hero_uo91kd.mp4'

export const HERO_VIDEO_POSTER =
  process.env.NEXT_PUBLIC_HERO_VIDEO_POSTER?.trim() ??
  'https://res.cloudinary.com/zvwcoygn/video/upload/so_0/Stark_Hero_uo91kd.jpg'

/** Hero HQ op Vimeo; env var overschrijft voor andere omgevingen. */
const VIMEO_HERO_DEFAULT_ID = '1205831605'

export const VIMEO_HERO_VIDEO_ID =
  process.env.NEXT_PUBLIC_VIMEO_HERO_ID?.trim() || VIMEO_HERO_DEFAULT_ID

/** Beeldverhouding bronvideo op Vimeo, bijv. "16/9" of "2.39" */
export function heroVideoAspect(): number {
  const raw = process.env.NEXT_PUBLIC_HERO_VIDEO_ASPECT?.trim()
  if (!raw) return 16 / 9
  if (raw.includes('/')) {
    const [w, h] = raw.split('/').map(Number)
    if (w > 0 && h > 0) return w / h
  }
  const n = Number(raw)
  return Number.isFinite(n) && n > 0 ? n : 16 / 9
}

/** Extra crop-zoom (1 = default). */
export function heroVimeoCoverBoost(): number {
  const raw = process.env.NEXT_PUBLIC_HERO_VIMEO_COVER_BOOST?.trim()
  if (!raw) return 1
  const n = Number(raw)
  return Number.isFinite(n) && n >= 1 ? n : 1
}

/** Clip % boven/onder op iframe (Vimeo-letterboxing). Leeg = auto in component. */
export function heroVimeoClipPercent(): number | null {
  const raw = process.env.NEXT_PUBLIC_HERO_VIMEO_CLIP_PERCENT?.trim()
  if (!raw) return null
  const n = Number(raw)
  return Number.isFinite(n) && n >= 0 && n < 45 ? n : null
}

/**
 * Optioneel loop-startpunt in de bron (seconden). Standaard 0.
 * Alleen zetten als de export zelf zwarte frames aan het begin heeft.
 */
export function heroVideoStartSeconds(): number {
  const raw = process.env.NEXT_PUBLIC_HERO_VIDEO_START_SEC?.trim()
  if (!raw) return 0
  const n = Number(raw)
  return Number.isFinite(n) && n >= 0 ? n : 0
}

export function vimeoHeroEmbedUrl(videoId: string): string {
  const params = new URLSearchParams({
    background: '1',
    autoplay: '1',
    loop: '1',
    muted: '1',
    controls: '0',
    title: '0',
    byline: '0',
    portrait: '0',
    vimeo_logo: '0',
    dnt: '1',
  })

  const base = `https://player.vimeo.com/video/${videoId}?${params.toString()}`
  const start = heroVideoStartSeconds()
  return start > 0 ? `${base}#t=${start}s` : base
}
