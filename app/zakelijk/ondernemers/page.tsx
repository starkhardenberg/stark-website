import type { Metadata } from 'next'
import Link from 'next/link'
import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { hrefKennismaking } from '@/lib/contact'
import { pageMetadata } from '@/lib/open-graph'
import styles from '../../landing.module.css'

export const metadata: Metadata = pageMetadata(
  'zakelijk',
  'Voor ondernemers — STARK! Hardenberg',
  'Het begint bij jou. Voor eigenaren en directeuren die merken dat wat blijft liggen, het bedrijf remt.',
)

/** Dunne landing: volledige route volgt in de volgende bouwfase. */
export default function ZakelijkOndernemersPage() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${styles.heroCoaching} ${styles.heroReadable}`}>
        <div className={styles.heroBg}>
          <StarkImage
            src="/images/foto-zakelijk-hero-sled.png"
            alt="Training bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgCoaching}`}
            sizes="100vw"
            priority
            style={{ objectPosition: '58% 42%' }}
          />
        </div>
        <Nav deep />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>HET BEGINT</span>{' '}
            <span className={styles.heroPunch}>BIJ JOU</span>
          </h1>
          <p className={styles.heroSub}>Voor eigenaren en directeuren</p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section className={styles.section}>
        <p style={{ maxWidth: '42ch', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
          Jij zet de toon. Wat jij laat liggen, laat je ploeg ook liggen. Laten we het daarover
          hebben.
        </p>
        <p style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
          <Link href={hrefKennismaking} style={{ fontWeight: 700, color: 'var(--orange)' }}>
            Plan een gesprek →
          </Link>
          <Link href="/zakelijk" style={{ fontWeight: 600, color: 'var(--navy)' }}>
            Terug naar bedrijven
          </Link>
        </p>
      </section>

      <Footer photoFirst photoSet="zakelijk" />
    </main>
  )
}
