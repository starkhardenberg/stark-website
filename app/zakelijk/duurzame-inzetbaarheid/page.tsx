import type { Metadata } from 'next'
import Link from 'next/link'
import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { hrefZakelijk } from '@/lib/contact'
import styles from '../../landing.module.css'

export const metadata: Metadata = {
  title: 'Duurzame inzetbaarheid — STARK! Hardenberg',
  description:
    'Duurzame inzetbaarheid, één afdeling tegelijk. Preventie, vitaliteit en verzuim. Hardenberg.',
  robots: { index: false, follow: false },
}

/** Stub tot de volledige pagina wordt gebouwd. */
export default function DuurzameInzetbaarheidPage() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${styles.heroCoaching} ${styles.heroReadable}`}>
        <div className={styles.heroBg}>
          <StarkImage
            src="/images/foto-zakelijk-tegel-werkgevers-groep.jpg"
            alt="Groepstraining bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgCoaching}`}
            sizes="100vw"
            priority
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
        <Nav deep />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>STERK IN LIJF</span>{' '}
            <span className={styles.heroPunch}>EN HOOFD</span>
          </h1>
          <p className={styles.heroSub}>Duurzame inzetbaarheid, één afdeling tegelijk.</p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section className={styles.section}>
        <p style={{ maxWidth: '42ch', margin: '0 0 1.5rem', lineHeight: 1.6 }}>
          Duurzame inzetbaarheid, één afdeling tegelijk. De volledige pagina volgt. Plan alvast een
          gesprek, of ga terug naar de ondernemersroute.
        </p>
        <p style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
          <Link href={hrefZakelijk} style={{ fontWeight: 700, color: 'var(--orange)' }}>
            Plan een gesprek →
          </Link>
          <Link href="/zakelijk-v2" style={{ fontWeight: 600, color: 'var(--navy)' }}>
            Naar ondernemers
          </Link>
        </p>
      </section>

      <Footer photoFirst photoSet="zakelijk" hideBrand />
    </main>
  )
}
