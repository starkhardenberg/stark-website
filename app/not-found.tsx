import type { Metadata } from 'next'
import Image from 'next/image'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import { STARK_GRAIN } from '@/lib/stark-grain'
import { SITE_URL } from '@/lib/site-seo'
import styles from './not-found.module.css'

export const metadata: Metadata = {
  title: 'Deze pagina heeft een blessure — STARK! Hardenberg',
  description: 'Niks aan de hand. Terug naar STARK! Hardenberg.',
  alternates: { canonical: SITE_URL },
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <main className={`${styles.page} ${STARK_GRAIN}`}>
      <header className={styles.nav}>
        <a href="/" aria-label="STARK! home">
          <Image
            src="/images/stark_logo_cirkel_wit.png"
            alt="STARK!"
            width={756}
            height={756}
            priority
            className={styles.logo}
          />
        </a>
      </header>

      <div className={styles.content}>
        <p className={styles.label}>404</p>

        <h1 className={styles.heading}>
          Deze pagina heeft een blessure
        </h1>

        <p className={styles.sub}>
          Niks aan de hand, even terug naar de basis
        </p>

        <div className={styles.ctas}>
          <a className={`${styles.btnPrimary} ${STARK_CTA} ${STARK_CTA_PRIMARY}`} href="/">
            Terug naar home
          </a>
        </div>
      </div>

      <div className={styles.anchorShell}>
        <span>STARK! Hardenberg</span>
        <div className={styles.anchor} aria-hidden="true" />
        <span>Nijverheidsstraat 15c</span>
      </div>
    </main>
  )
}
