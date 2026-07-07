import type { Metadata } from 'next'
import styles from './og-preview.module.css'

export const metadata: Metadata = {
  title: 'OG-preview — STARK!',
  robots: { index: false, follow: false },
}

export default function OgPreviewPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.label}>Link-preview</p>
        <h1 className={styles.title}>Zo ziet een gedeelde link eruit</h1>
        <p className={styles.lead}>
          WhatsApp, LinkedIn en andere apps halen deze afbeelding op. Bezoekers gaan
          naar de echte pagina, niet naar dit scherm.
        </p>

        <figure className={styles.frame}>
          <img
            src="/images/og-stark-card.png"
            alt="STARK! Open Graph-kaart"
            width={1200}
            height={630}
            className={styles.image}
          />
        </figure>

        <p className={styles.note}>
          Bestand voor platforms:{' '}
          <code className={styles.code}>/images/og-stark-card.png</code>
        </p>
      </div>
    </main>
  )
}
