import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqJsonLd from '@/components/FaqJsonLd'
import { trainenFaq } from '@/components/faq/faq-trainen'
import AanbodFeatureCard from '@/components/aanbod/AanbodFeatureCard'
import aanbodStyles from '@/components/AanbodSection.module.css'
import TrainenIntroSection from '@/components/trainen/TrainenIntroSection'
import TrainenStartSection from '@/components/trainen/TrainenStartSection'
import TrainenRoosterProvider from '@/components/trainen/TrainenRoosterProvider'
import TrainenFaq from '@/components/trainen/TrainenFaq'
import { trainenGroupTracks } from '@/components/trainen/trainen-group-tracks'
import PortraitStories from '@/components/testimonials/PortraitStories'
import { trainenPeople } from '@/components/testimonials/portrait-quotes'
import { STARK_GRAIN } from '@/lib/stark-grain'
import ServiceJsonLd from '@/components/ServiceJsonLd'
import { pageMetadata } from '@/lib/open-graph'
import styles from '../landing.module.css'

export const metadata = pageMetadata(
  'trainen',
  'Krachttraining in Hardenberg | Trainen bij STARK!',
  'Sportschool in Hardenberg met krachttraining in kleine groepen en een coach naast je. Voor volwassenen, ZilverFitness en Kids & Teens.',
)

export default function TrainenPage() {
  return (
    <main className={styles.main}>
      <ServiceJsonLd
        name="Trainen"
        description="Sportschool in Hardenberg met krachttraining in kleine groepen en een coach naast je. Voor volwassenen, ZilverFitness en Kids & Teens."
        path="/trainen"
      />
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

      <TrainenRoosterProvider>
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
            <AanbodFeatureCard key={track.id} track={track} fitTitle />
          ))}
        </div>
      </section>

      <TrainenStartSection />

      <PortraitStories people={trainenPeople} showRoute />

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
          <TrainenFaq />
          <FaqJsonLd items={trainenFaq} />
        </div>
      </section>
      </TrainenRoosterProvider>

      <Footer variant="dark" />
    </main>
  )
}
