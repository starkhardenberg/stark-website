import { getGoogleReviewStats, GOOGLE_REVIEWS } from '@/lib/google-reviews'
import styles from './GoogleReviewsLink.module.css'

type Props = {
  tone?: 'light' | 'dark'
}

export default async function GoogleReviewsLink({ tone = 'light' }: Props) {
  const toneClass = tone === 'dark' ? styles.linkDark : styles.linkLight
  const stats = await getGoogleReviewStats()

  return (
    <a
      href={GOOGLE_REVIEWS.href}
      className={`${styles.link} ${toneClass}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={styles.star} aria-hidden>
        ★
      </span>
      {stats.rating} · {stats.count} reviews op Google
      <span className={styles.arrow} aria-hidden>
        →
      </span>
    </a>
  )
}
