import styles from './IntroSection.module.css'

export default function IntroClose({
  line1,
  line2,
  line3,
  wrap = false,
  afterCopy = false,
  align = 'center',
  wide = false,
  pair = false,
  outline = 'first',
  tone = 'light',
}: {
  line1: string
  line2: string
  line3?: string
  wrap?: boolean
  afterCopy?: boolean
  align?: 'center' | 'start'
  wide?: boolean
  pair?: boolean
  /** Welke regel de outline krijgt. Standaard de eerste. */
  outline?: 'first' | 'second'
  /** Op een donkere sectie: lichte letters, outline in dezelfde lichte kleur. */
  tone?: 'light' | 'dark'
}) {
  return (
    <p
      className={`${styles.closeDisplay}${wrap ? ` ${styles.closeDisplayWrap}` : ''}${
        afterCopy ? ` ${styles.closeAfterCopy}` : ''
      }${align === 'start' ? ` ${styles.closeStart}` : ''}${wide ? ` ${styles.closeWide}` : ''}${
        pair ? ` ${styles.closePair}` : ''
      }${tone === 'dark' ? ` ${styles.closeOnDark}` : ''}`}
    >
      <span className={`${styles.closeLine} ${outline === 'first' ? styles.closeOutline : ''}`}>{line1}</span>
      {line2.split('\n').map((line) => (
        <span
          key={line}
          className={`${styles.closeLine} ${styles.closeKeep} ${outline === 'second' ? styles.closeOutline : ''}`}
        >
          {line}
        </span>
      ))}
      {line3 ? <span className={styles.closeLine}>{line3}</span> : null}
    </p>
  )
}
