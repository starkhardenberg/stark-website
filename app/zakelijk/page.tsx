import type { Metadata } from 'next'
import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ZakelijkBridgeSection from '@/components/zakelijk/ZakelijkBridgeSection'
import ZakelijkRoutesSection from '@/components/zakelijk/ZakelijkRoutesSection'
import { pageMetadata } from '@/lib/open-graph'
import styles from '../landing.module.css'

export const metadata: Metadata = pageMetadata(
  'zakelijk',
  'Bedrijven — STARK! Hardenberg',
  'Sterke mensen, sterk bedrijf. Wij trainen wat je doet als het zwaar wordt. Voor ondernemers en voor organisaties met HR.',
)

export default function ZakelijkPage() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${styles.heroCoaching} ${styles.heroReadable}`}>
        <div className={styles.heroBg}>
          <StarkImage
            src="/images/foto-zakelijk-hero-sled.png"
            alt="Intensieve sled pull training bij STARK! Hardenberg"
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
            <span className={styles.heroLead}>STARK! OP HET</span>{' '}
            <span className={styles.heroPunch}>WARK</span>
          </h1>
          <p className={styles.heroSub}>
            Sterker in lijf en hoofd. Van directie tot werkvloer
          </p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <ZakelijkBridgeSection />

      <ZakelijkRoutesSection />

      <Footer
        photoFirst
        photoSet="zakelijk"
        hideBrand
        statement="Koffie en verder praten?"
        statementMeta="Gratis gesprek · ~1 uur"
      />
    </main>
  )
}
