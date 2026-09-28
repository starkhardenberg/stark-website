import { BEELDEN_CAPTION_SUFFIX } from '@/lib/photo-credit'
import { STARK_EXCLAIM } from '@/lib/stark-cta'
import styles from './BeeldenCaption.module.css'

/**
 * Vaste bijschrift-regel onder de eerste grote homepage-foto (Prompt 9).
 */
export default function BeeldenCaption({ className }: { className?: string }) {
  return (
    <p className={`${styles.caption} ${className ?? ''}`.trim()}>
      <span className={styles.rule} aria-hidden />
      <span>
        Alle beelden: echte STARK<span className={STARK_EXCLAIM}>!</span>-mensen.{' '}
        {BEELDEN_CAPTION_SUFFIX}
      </span>
    </p>
  )
}
