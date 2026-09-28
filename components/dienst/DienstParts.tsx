import type { ReactNode } from 'react'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import { BOOKINGS_URL } from './momentum'
import styles from './DienstPage.module.css'

export function BookButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={BOOKINGS_URL}
      className={`${styles.button} ${STARK_CTA} ${STARK_CTA_PRIMARY} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      Plan je kennismaking
    </a>
  )
}

/**
 * Vast koppatroon: cijfer in de marge, titel en inhoud op één linkerrand.
 * Op mobiel staat het cijfer boven de titel.
 */
export function Section({
  number,
  title,
  tone = 'light',
  children,
}: {
  number: string
  title: string
  tone?: 'light' | 'dark'
  children: ReactNode
}) {
  return (
    <section className={tone === 'dark' ? styles.dark : styles.light}>
      <div className={styles.wrap}>
        <div className={styles.sec}>
          <div className={styles.secLead}>
            <span className={styles.num} aria-hidden="true">
              {number}
            </span>
            <h2 className={styles.h2}>{title}</h2>
          </div>
          <div className={styles.secBody}>{children}</div>
        </div>
      </div>
    </section>
  )
}
