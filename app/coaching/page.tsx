import Link from 'next/link'
import { hrefCoaching } from '@/lib/contact'
import Image from 'next/image'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import { coachingFaq } from '@/components/faq/faq-coaching'
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
        <span className={styles.label}>Welk traject past bij mij?</span>
        <h2 className={`${styles.title} ${styles.titleHero}`}>
          Stap voor stap, <span className={styles.titleHeroOutline}>echt resultaat</span>
        </h2>
        <div className={`${styles.resultGrid} ${styles.resultGridPhotos} ${styles.resultGridSpaced}`}>
          {coachingCards.map((card, i) => (
            <LandingServiceCard key={card.title} {...card} num={String(i + 1).padStart(2, '0')} />
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
                <span>Lijf en hoofd trainen we samen, nooit los van elkaar.</span>
              </li>
              <li>
                <span>We werken aan wie je bent, niet alleen aan wat je doet.</span>
              </li>
              <li>
                <span>We benoemen wat jij liever overslaat.</span>
              </li>
              <li>
                <span>Streng waar nodig, warm waar het kan.</span>
              </li>
              <li>
                <span>Coaches die je verhaal kennen en bijhouden.</span>
              </li>
              <li>
                <span>Verandering die blijft, ook als het traject klaar is.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <span className={styles.label}>Veelgestelde vragen</span>
          <h2 className={styles.title}>Goede vragen</h2>
          <FaqList items={coachingFaq} />
        </div>
      </section>

      <Footer photoFirst />
    </main>
  )
}
