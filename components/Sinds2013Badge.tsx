import Uitroepteken from '@/components/Uitroepteken'
import styles from './Sinds2013Badge.module.css'

const RING_PATH_ID = 'sinds2013-ring-path'

const RING_TEXT = 'STARK! HARDENBERG · SINDS 2013 ·'

/**
 * Ronde sticker-badge — enige ronde vorm op de site (Prompt 9).
 */
export default function Sinds2013Badge({
  className,
  variant = 'hero',
}: {
  className?: string
  /** hero = rechtsonder op de homepage. block = dezelfde sticker, kleiner, op een vlak. */
  variant?: 'hero' | 'block'
}) {
  const ringId = variant === 'block' ? 'sinds2013-ring-path-block' : RING_PATH_ID

  return (
    <div
      className={`${styles.badge} ${variant === 'block' ? styles.badgeBlock : ''} ${className ?? ''}`.trim()}
      aria-label="STARK! Hardenberg, sinds 2013"
      role="img"
    >
      <svg className={styles.ring} viewBox="0 0 120 120" aria-hidden focusable="false">
        <defs>
          <path
            id={ringId}
            d="M 60,60 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
          />
        </defs>
        <circle className={styles.disc} cx="60" cy="60" r="56" />
        <text className={styles.ringText}>
          <textPath href={`#${ringId}`} startOffset="0%">
            {RING_TEXT}
          </textPath>
        </text>
      </svg>
      <Uitroepteken variant="bullet" className={styles.mark} />
    </div>
  )
}
