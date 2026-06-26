import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import { trainenFaq } from '@/components/faq/faq-trainen'
import LandingServiceCard from '@/components/landing/LandingServiceCard'
import { trainenCards } from '@/components/landing/landing-cards'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import {
  getTrainenPageCarouselTestimonials,
  heroQuoteRenske,
} from '@/components/testimonials/testimonials-data'
import { oswaldTrim } from '@/lib/displayTrim'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Trainen — STARK! Hardenberg',
  description:
    'Groepslessen met coaching voor volwassenen, ZilverFitness en Kids & Teens. Start waar jij staat, met techniek en veiligheid voorop.',
}

export default function TrainenPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-trainen-landingspagina.png"
            alt="Deelnemer tijdens een squat in de groepsles bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgTrainen} ${styles.heroBgImgTrainenLanding}`}
            sizes="100vw"
            priority
          />
        </div>
        <Nav />
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
        <h2 className={`${styles.title} ${styles.titleHero}`} style={oswaldTrim('Iedereen')}>
          Iedereen is <span className={styles.titleHeroOutline}>STARK</span>
        </h2>
        <div className={`${styles.resultGrid} ${styles.resultGridPhotos} ${styles.resultGridSpaced} ${styles.resultGridLight}`}>
          {trainenCards.map((card, i) => (
            <LandingServiceCard key={card.title} {...card} num={String(i + 1).padStart(2, '0')} />
          ))}
        </div>
      </section>

      <div className={`${styles.split} ${styles.splitStatement}`}>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Waar wij voor staan</span>
            <h2 className={styles.title} style={oswaldTrim('MEER')}>MEER DAN EEN SPORTSCHOOL</h2>
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

      <TestimonialsSection
        hero={heroQuoteRenske}
        items={getTrainenPageCarouselTestimonials()}
        narrow
      />

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <span className={styles.label}>Wat je nog wilt weten</span>
          <h2 className={styles.title} style={oswaldTrim('Goede')}>Goede vragen</h2>
          <FaqList items={trainenFaq} />
        </div>
      </section>

      <Footer photoFirst photoSet="trainen" brandPrefix="BIJ" />
    </main>
  )
}
