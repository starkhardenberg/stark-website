import Link from 'next/link'
import { hrefTrainen } from '@/lib/contact'
import Image from 'next/image'
import LandingFooter from '@/components/landing/LandingFooter'
import LandingServiceCard from '@/components/landing/LandingServiceCard'
import { trainenCards } from '@/components/landing/landing-cards'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Trainen — STARK! Hardenberg',
  description:
    'Groepslessen met coaching voor volwassenen, ZilverFitness en Kids & Teens. Start waar jij staat, met techniek en veiligheid voorop.',
}

export default function TrainenPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>
          ← Terug naar STARK!
        </Link>
        <Link href={hrefTrainen} className={styles.navCta}>
          Kom kennismaken
        </Link>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-trainen-landingspagina.png"
            alt="Deelnemer tijdens een squat in de groepsles bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgTrainen}`}
            sizes="100vw"
            priority
            style={{ objectPosition: 'center center' }}
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>TRAINEN</span>
            <span className={styles.heroPunch}>BIJ STARK</span>
          </h1>
          <p className={styles.heroSub}>
            Echt trainen, echt resultaat, echte mensen.
          </p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section className={`${styles.section} ${styles.sectionWithOrangeBottom}`}>
        <span className={styles.label}>Welke groep past bij jou?</span>
        <h2 className={styles.title}>WE ZIJN ER VOOR IEDEREEN</h2>
        <div className={`${styles.resultGrid} ${styles.resultGridPhotos}`}>
          {trainenCards.map((card) => (
            <LandingServiceCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <div className={`${styles.split} ${styles.splitStatement}`}>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Zo werkt het</span>
            <h2 className={styles.title}>MEER DAN EEN GYM</h2>
            <ul className={styles.featureTiles}>
              <li>
                <span>Je start waar jij staat, op je eigen niveau.</span>
              </li>
              <li>
                <span>Onze trainers begonnen zelf als lid.</span>
              </li>
              <li>
                <span>Coaching die je techniek én je kop scherp houdt.</span>
              </li>
              <li>
                <span>Functioneel sterk worden, geen apparaten op een rij.</span>
              </li>
              <li>
                <span>Je komt voor jezelf, je blijft voor de groep.</span>
              </li>
              <li>
                <span>Hard werken, hard lachen. Al sinds 2013.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <LandingFooter />
    </main>
  )
}
