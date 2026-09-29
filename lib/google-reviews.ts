/** Fallback als Google even niet antwoordt. De site haalt de actuele cijfers één keer per dag op. */
export const GOOGLE_REVIEWS = {
  rating: '5,0',
  count: 65,
  href: 'https://maps.app.goo.gl/nC323UmKQy7LDmm29',
} as const

const STARK_PLACE_ID = 'ChIJN33s46cByEcRNnlalW03v1c'
const ONE_DAY_SECONDS = 60 * 60 * 24

export async function getGoogleReviewStats(): Promise<{ rating: string; count: number }> {
  const fallback = { rating: GOOGLE_REVIEWS.rating, count: GOOGLE_REVIEWS.count }
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) return fallback

  try {
    const response = await fetch(`https://places.googleapis.com/v1/places/${STARK_PLACE_ID}`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'rating,userRatingCount',
      },
      next: { revalidate: ONE_DAY_SECONDS },
    })
    if (!response.ok) return fallback
    const data = (await response.json()) as { rating?: unknown; userRatingCount?: unknown }
    if (typeof data.rating !== 'number' || typeof data.userRatingCount !== 'number') return fallback
    return {
      rating: data.rating.toLocaleString('nl-NL', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }),
      count: data.userRatingCount,
    }
  } catch {
    return fallback
  }
}
