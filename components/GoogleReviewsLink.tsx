import { GOOGLE_REVIEWS } from '@/lib/google-reviews'
import styles from './GoogleReviewsLink.module.css'

type Props = {
  tone?: 'light' | 'dark'
}

export default function GoogleReviewsLink({ tone = 'light' }: Props) {
  const toneClass = tone === 'dark' ? styles.linkDark : styles.linkLight

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
      {GOOGLE_REVIEWS.rating} · {GOOGLE_REVIEWS.count} reviews op Google
      <span className={styles.arrow} aria-hidden>
        →
      </span>
    </a>
  )
}
