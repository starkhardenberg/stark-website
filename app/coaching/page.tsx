import Link from 'next/link'
import { hrefCoaching } from '@/lib/contact'
import Image from 'next/image'
import LandingFooter from '@/components/landing/LandingFooter'
import LandingServiceCard from '@/components/landing/LandingServiceCard'
import { coachingCards } from '@/components/landing/landing-cards'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Coaching — STARK! Hardenberg',
  description: 'Coachingstrajecten van eerste online stap tot intensief persoonlijk programma. Lijf en hoofd versterken elkaar.',
}

export default function CoachingPage() {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <Link href="/#aanbod" className={styles.navBack}>
          ← Terug naar STARK!
        </Link>
        <Link href={hrefCoaching} className={styles.navCta}>
          Kom kennismaken
        </Link>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-coaching-impact.png"
            alt="Coachingsgesprek bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgTrainen}`}
            sizes="100vw"
            priority
            style={{ objectPosition: 'center 7%' }}
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>COACHING</span>
            <span className={styles.heroPunch}>BIJ STARK</span>
          </h1>
          <p className={styles.heroSub}>
            Een helder hoofd. Een lijf dat aankan wat je vraagt.
          </p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section className={`${styles.section} ${styles.sectionWithOrangeBottom}`}>
        <span className={styles.label}>Welk traject past bij?</span>
        <h2 className={styles.title}>VAN EERSTE STAP TOT DIEPE VERANDERING</h2>
        <p className={styles.body}>
          Hieronder vind je per traject wat we aanbieden en hoe je start.
        </p>
        <div className={`${styles.resultGrid} ${styles.resultGridPhotos}`}>
          {coachingCards.map((card) => (
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
                <span>Lijf en hoofd versterken elkaar.</span>
              </li>
              <li>
                <span>Geen snelle fixes. Wel eerlijke stappen.</span>
              </li>
              <li>
                <span>Patronen herkennen voordat je ze doorbreekt.</span>
              </li>
              <li>
                <span>Fysieke training en coaching in één lijn.</span>
              </li>
              <li>
                <span>Coaches die jouw verhaal kennen en bijhouden.</span>
              </li>
              <li>
                <span>Blijvende verandering. Niet alleen tijdens het traject.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <LandingFooter />
    </main>
  )
}
