import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { coachingFaq } from '@/components/faq/faq-coaching'
import AanbodFeatureCard from '@/components/aanbod/AanbodFeatureCard'
import aanbodStyles from '@/components/AanbodSection.module.css'
import CoachingIntroSection from '@/components/coaching/CoachingIntroSection'
import CoachingStartSection from '@/components/coaching/CoachingStartSection'
import CoachingMethodSection from '@/components/coaching/CoachingMethodSection'
import { coachingTracks } from '@/components/coaching/coaching-tracks'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import {
  getCoachingPageCarouselTestimonials,
  heroQuoteRebekka,
} from '@/components/testimonials/testimonials-data'
import { pageMetadata } from '@/lib/open-graph'
import styles from '../landing.module.css'

export const metadata = pageMetadata(
  'coaching',
  'Coaching — STARK! Hardenberg',
  'Coachingstrajecten van eerste online stap tot intensief persoonlijk programma. Lijf en hoofd versterken elkaar.',
)

export default function CoachingPage() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${styles.heroCoaching} ${styles.heroReadable}`}>
        <div className={styles.heroBg}>
          <StarkImage
            src="/images/foto-coaching-hero-flipchart.png"
            alt="Coachinggesprek met scherpe vragen bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgCoaching}`}
            sizes="100vw"
            priority
            style={{ objectPosition: '62% 42%' }}
          />
        </div>
        <Nav deep />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>COACHING</span>{' '}
            <span className={styles.heroPunch}>BIJ STARK!</span>
          </h1>
          <p className={styles.heroSub}>Stop met proberen</p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <CoachingIntroSection />

      <CoachingMethodSection />

      <section id="trajecten" className={`${styles.section} ${styles.sectionLight}`}>
        <h2
          className={`${aanbodStyles.sectionTitle} ${aanbodStyles.sectionTitleOnLight} ${aanbodStyles.sectionTitleCentered} ${aanbodStyles.sectionIntro} ${aanbodStyles.sectionIntroCentered}`}
        >
          <span className={aanbodStyles.titleLine}>Welk traject</span>
          <span className={aanbodStyles.titleLine}>past bij jou?</span>
        </h2>
        <div className={`${aanbodStyles.cardsAndCta} ${aanbodStyles.cardsAndCtaCentered}`}>
          {coachingTracks.map((track) => (
            <AanbodFeatureCard key={track.id} track={track} />
          ))}
        </div>
        <CoachingStartSection />
      </section>

      <TestimonialsSection
        hero={heroQuoteRebekka}
        items={getCoachingPageCarouselTestimonials()}
        narrow
        unifiedDark
      />

      <section className={`${styles.faqSection} ${styles.faqSectionLight}`}>
        <header className={styles.sectionQuoteHead}>
          <h2 className={styles.sectionQuote}>
            <span className={styles.sectionQuoteLine}>Goede vragen</span>
          </h2>
          <p className={`starkSectionMeta ${styles.sectionQuoteMeta}`}>
            Wat je nog wilt weten
          </p>
        </header>
        <div className={styles.faqInner}>
          <FaqList items={coachingFaq} tone="light" />
          <FaqJsonLd items={coachingFaq} />
        </div>
      </section>

      <Footer
        photoFirst
        photoSet="coaching"
        hideBrand
        statement="Koffie en verder praten?"
        statementMeta="Gratis gesprek · ~1 uur"
      />
    </main>
  )
}
