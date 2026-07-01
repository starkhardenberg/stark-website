import { PHOTO_CREDIT, VIDEO_CREDIT } from '@/lib/photo-credit'
import styles from './PhotoCredit.module.css'

type PhotoCreditProps = {
  className?: string
}

export default function PhotoCredit({ className }: PhotoCreditProps) {
  return (
    <div className={[styles.group, className].filter(Boolean).join(' ')}>
      <p className={styles.credit}>
        {PHOTO_CREDIT.label}:{' '}
        <a
          href={PHOTO_CREDIT.instagramUrl}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {PHOTO_CREDIT.name}
        </a>
      </p>
      <p className={styles.credit}>
        {VIDEO_CREDIT.label}:{' '}
        <a href={VIDEO_CREDIT.url} className={styles.link} target="_blank" rel="noopener noreferrer">
          {VIDEO_CREDIT.name}
        </a>
      </p>
    </div>
  )
}
