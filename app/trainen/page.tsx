import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { trainenFaq } from '@/components/faq/faq-trainen'
import AanbodFeatureCard from '@/components/aanbod/AanbodFeatureCard'
import aanbodStyles from '@/components/AanbodSection.module.css'
import TrainenIntroSection from '@/components/trainen/TrainenIntroSection'
import TrainenStartSection from '@/components/trainen/TrainenStartSection'
import { trainenGroupTracks } from '@/components/trainen/trainen-group-tracks'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import {
  getTrainenPageCarouselTestimonials,
  heroQuoteRenske,
} from '@/components/testimonials/testimonials-data'
import { STARK_GRAIN } from '@/lib/stark-grain'
import { pageMetadata } from '@/lib/open-graph'
import styles from '../landing.module.css'

export const metadata = pageMetadata(
  'trainen',
  'Trainen — STARK! Hardenberg',
  'Groepslessen met coaching voor volwassenen, ZilverFitness en Kids & Teens. Start waar jij staat, met techniek en veiligheid voorop.',
)

export default function TrainenPage() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${styles.heroReadable}`}>
        <div className={styles.heroBg}>
          <StarkImage
            src="/images/foto-trainen-landingspagina.png"
            alt="Deelnemer tijdens een squat in de groepsles bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImgTrainen} ${styles.heroBgImgTrainenLanding}`}
            sizes="100vw"
            priority
          />
        </div>
        <Nav deep />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>TRAINEN BIJ</span>{' '}
            <span className={styles.heroPunch}>STARK!</span>
          </h1>
          <p className={styles.heroSub}>Sterk nu, sterk later</p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <TrainenIntroSection />

      <section
        id="groepen"
        className={`${styles.section} ${styles.sectionBlack} ${styles.sectionWithOrangeBottom} ${STARK_GRAIN}`}
      >
        <h2 className={`${aanbodStyles.sectionTitle} ${aanbodStyles.sectionIntro}`}>
          <span className={aanbodStyles.titleLine}>Welke groep</span>
          <span className={aanbodStyles.titleLine}>past bij jou?</span>
        </h2>
        <div className={aanbodStyles.cardsAndCta}>
          {trainenGroupTracks.map((track) => (
            <AanbodFeatureCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <TrainenStartSection />

      <TestimonialsSection
        hero={heroQuoteRenske}
        items={getTrainenPageCarouselTestimonials()}
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
          <FaqList items={trainenFaq} tone="light" />
          <FaqJsonLd items={trainenFaq} />
        </div>
      </section>

      <Footer
        photoFirst
        photoSet="trainen"
        hideBrand
        statement="Koffie en verder praten?"
        statementMeta="Gratis gesprek · ~1 uur"
      />
    </main>
  )
}
