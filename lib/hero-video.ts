/**
 * Hero-achtergrond (homepage).
 *
 * Native <video> vanaf lokale HQ-exports (uit Hero HQ.mp4 3840×1554):
 * - Desktop: /videos/hero-desktop.mp4 (2560px)
 * - Touch:   /videos/hero-mobile.mp4 (1280px)
 *
 * Geen Vimeo/Cloudinary meer voor de hero — vaste kwaliteit, geen upscale-ruis.
 * Film-sectie blijft Vimeo (klik-om-af-te-spelen).
 */

const LOCAL_DESKTOP = '/videos/hero-desktop.mp4'
const LOCAL_MOBILE = '/videos/hero-mobile.mp4'
const LOCAL_POSTER = '/videos/hero-poster.jpg'

/** Optionele override (anders lokale HQ). */
export const HERO_VIDEO_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() ?? ''

export const HERO_VIDEO_MOBILE_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_MOBILE_URL?.trim() || LOCAL_MOBILE

export const HERO_VIDEO_DESKTOP_URL =
  process.env.NEXT_PUBLIC_HERO_VIDEO_DESKTOP_URL?.trim() ||
  HERO_VIDEO_URL ||
  LOCAL_DESKTOP

/** @deprecated Alias */
export const HERO_VIDEO_DESKTOP_FALLBACK_URL = HERO_VIDEO_DESKTOP_URL

export const HERO_VIDEO_POSTER =
  process.env.NEXT_PUBLIC_HERO_VIDEO_POSTER?.trim() || LOCAL_POSTER

/** Werkelijke bronverhouding (3840×1554 / 2560×1036). */
const HERO_SOURCE_ASPECT = 2560 / 1036

export function heroVideoAspect(): number {
  const raw = process.env.NEXT_PUBLIC_HERO_VIDEO_ASPECT?.trim()
  if (!raw) return HERO_SOURCE_ASPECT
  if (raw.includes('/')) {
    const [w, h] = raw.split('/').map(Number)
    if (w > 0 && h > 0) return w / h
  }
  const n = Number(raw)
  return Number.isFinite(n) && n > 0 ? n : HERO_SOURCE_ASPECT
}
