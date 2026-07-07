import type { ReactNode } from 'react'
import styles from './ContentQuoteBlock.module.css'

type Props = {
  title: string
  subtitle?: string
  children: ReactNode
  /** Lichte grijze achtergrond (standaard) of donker op navy-secties */
  tone?: 'light' | 'dark'
  className?: string
  id?: string
}

export default function ContentQuoteBlock({
  title,
  subtitle,
  children,
  tone = 'light',
  className,
  id,
}: Props) {
  const sectionClass = [
    styles.section,
    tone === 'light' ? styles.sectionLight : styles.sectionDark,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section className={sectionClass} id={id} aria-label={title}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  )
}
