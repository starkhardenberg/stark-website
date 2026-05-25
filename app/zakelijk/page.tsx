import Link from 'next/link'
import { hrefZakelijk } from '@/lib/contact'
import Image from 'next/image'
import LandingFooter from '@/components/landing/LandingFooter'
import LandingServiceCard from '@/components/landing/LandingServiceCard'
import { zakelijkCards } from '@/components/landing/landing-cards'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Zakelijk — STARK! Hardenberg',
  description:
    'Fundament-programma\'s voor bedrijven: preventief, re-integratie en teamtrajecten op maat.',
}

export default function ZakelijkPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>
          ← Terug naar STARK!
        </Link>
        <Link href={hrefZakelijk} className={styles.navCta}>
          Kom kennismaken
        </Link>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-trainen-battle-rope.png"
            alt="Team in actie tijdens training bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgTrainen}`}
            sizes="100vw"
            priority
            style={{ objectPosition: 'center 16%' }}
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>ZAKELIJK</span>
            <span className={styles.heroPunch}>BIJ STARK</span>
          </h1>
          <p className={styles.heroSub}>
            Sterkere mensen. Stevigere teams. Een fundament dat staat.
          </p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section className={`${styles.section} ${styles.sectionWithOrangeBottom}`}>
        <span className={styles.label}>Welk programma past bij?</span>
        <h2 className={styles.title}>VOOR TEAMS EN MEDEWERKERS</h2>
        <p className={styles.body}>
          Hieronder vind je per programma wat we aanbieden en hoe je start.
        </p>
        <div className={`${styles.resultGrid} ${styles.resultGridPhotos}`}>
          {zakelijkCards.map((card) => (
            <LandingServiceCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <div className={`${styles.split} ${styles.splitStatement}`}>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Zo werkt het</span>
            <h2 className={styles.title}>TYPISCH STARK</h2>
            <ul className={styles.featureTiles}>
              <li>
                <span>Fysieke training en mentale coaching gecombineerd.</span>
              </li>
              <li>
                <span>Kleine groepen. Maximaal tien deelnemers.</span>
              </li>
              <li>
                <span>Inzetbaar via arbobudget waar mogelijk.</span>
              </li>
              <li>
                <span>Geen teamuitje. Wel blijvende gedragsverandering.</span>
              </li>
              <li>
                <span>Medewerkers die sterker zijn, verzuimen minder.</span>
              </li>
              <li>
                <span>Een fundament dat doorwerkt na het programma.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <LandingFooter />
    </main>
  )
}
