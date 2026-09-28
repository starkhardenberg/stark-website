import { STARK_EXCLAIM } from '@/lib/stark-cta'
import styles from './StarkMarquee.module.css'

function MarqueePhrase({ hidden }: { hidden?: boolean }) {
  return (
    <span className={styles.phrase} aria-hidden={hidden || undefined}>
      WI&apos;J BINT STARK<span className={STARK_EXCLAIM}>!</span>
      {' · GEEN POESPAS · SINDS 2013 · '}
    </span>
  )
}

/**
 * Homepage-ticker: enige bewegend element (Prompt 10).
 */
export default function StarkMarquee({ className }: { className?: string }) {
  return (
    <div
      className={`${styles.band} ${className ?? ''}`.trim()}
      role="region"
      aria-label="STARK! Hardenberg — sinds 2013"
    >
      <div className={styles.viewport}>
        <div className={styles.track}>
          <MarqueePhrase />
          <MarqueePhrase hidden />
        </div>
      </div>
    </div>
  )
}
