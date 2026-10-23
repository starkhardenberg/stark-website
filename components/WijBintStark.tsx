import styles from './WijBintStark.module.css'

type WijBintStarkProps = {
  size: 'hero' | 'stamp'
  className?: string
}

function Mark() {
  return (
    <span className={styles.mark}>
      <span className={styles.line}>WI&apos;J BINT</span>
      <span className={styles.lineGap}> </span>
      <span className={styles.line}>
        STARK<span className={styles.exclaim}>!</span>
      </span>
    </span>
  )
}

export default function WijBintStark({ size, className }: WijBintStarkProps) {
  if (size === 'hero') {
    return (
      <section
        className={`${styles.heroBand} ${className ?? ''}`}
        aria-label="Wi'j bint STARK!"
      >
        <div className={styles.heroInner}>
          <p className={styles.hero}>
            <Mark />
          </p>
        </div>
      </section>
    )
  }

  return (
    <p className={`${styles.stamp} ${className ?? ''}`} aria-label="Wi'j bint STARK!">
      <Mark />
    </p>
  )
}
