import styles from './StarkBadge.module.css'

/**
 * Ronde sticker: witte cirkel met Я!, oranje punt en ringtekst.
 * hero = rechtsonder in de homepage-hero. block = dezelfde sticker op een vlak.
 */
export default function StarkBadge({
  className,
  variant = 'hero',
}: {
  className?: string
  variant?: 'hero' | 'block'
}) {
  return (
    <div
      className={`${styles.badge} ${variant === 'block' ? styles.badgeBlock : ''} ${className ?? ''}`.trim()}
      role="img"
      aria-label="STARK! Hardenberg"
      {...(variant === 'hero' ? { 'data-hero-badge': '' } : {})}
    >
      <img
        src="/images/favicon/badge-stempel-wit.svg"
        alt=""
        className={styles.glyph}
      />
    </div>
  )
}
