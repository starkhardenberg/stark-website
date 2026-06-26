import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import { momentumFaq } from '@/components/faq/faq-momentum'
import LandingServiceCard from '@/components/landing/LandingServiceCard'
import { momentumCards } from '@/components/landing/landing-cards'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import { getMomentumPageTestimonials, heroQuoteRebekka } from '@/components/testimonials/testimonials-data'
import { oswaldTrim } from '@/lib/displayTrim'
import styles from '../landing.module.css'

export const metadata = {
  title: 'Momentum — 10 weken groepsprogramma — STARK! Hardenberg',
  description:
    'Tien weken samen verder dan alleen. Fysieke training plus groepscoaching in een vaste kleine groep van maximaal tien mensen.',
}

export default function MomentumPage() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${styles.heroCoaching}`}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-coaching-tegel-momentum.png"
            alt="Groep in gesprek tijdens Momentum bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgCoaching}`}
            sizes="100vw"
            priority
            style={{ objectPosition: 'center 35%' }}
          />
        </div>
        <Nav backHref="/coaching" backLabel="Coaching" />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>MOMENTUM</span>
            <span className={styles.heroPunch}>BIJ STARK</span>
          </h1>
          <p className={styles.heroSub}>
            10 weken waarin je lijf en hoofd samen trainen, zodat je eindelijk voor elkaar krijgt wat er voor
            jou toe doet.
          </p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section className={`${styles.section} ${styles.sectionWithOrangeBottom}`}>
        <span className={styles.label}>10-weken groepsprogramma</span>
        <h2 className={`${styles.title} ${styles.titleHero}`} style={oswaldTrim('Stop')}>
          Stop met <span className={styles.titleHeroOutline}>stoppen</span>
        </h2>
        <div className={`${styles.resultGrid} ${styles.resultGridPhotos} ${styles.resultGridSpaced}`}>
          {momentumCards.map((card, i) => (
            <LandingServiceCard key={card.title} {...card} num={String(i + 1).padStart(2, '0')} />
          ))}
        </div>
      </section>

      <div className={`${styles.split} ${styles.splitStatement}`}>
        <div className={styles.splitContent} data-num="01">
          <div className={styles.splitInner}>
            <span className={styles.label}>Zo werkt het</span>
            <h2 className={styles.title} style={oswaldTrim('TYPISCH')}>TYPISCH MOMENTUM</h2>
            <ul className={styles.featureTiles}>
              <li>
                <span>Je weet het wel. Je doet het net niet. Dat ligt niet aan jou — je brein trekt je terug naar vertrouwd.</span>
              </li>
              <li>
                <span>Niet praten over mindset op een stoel. Oefenen onder druk, op het moment dat het zwaar wordt.</span>
              </li>
              <li>
                <span>20 uur training, 10 uur groepscoaching en 5 challenges — mentaal én fysiek.</span>
              </li>
              <li>
                <span>Max. 10 personen. Een groep die je scherp houdt en meetrekt als het tegenzit.</span>
              </li>
              <li>
                <span>Je herkent het stemmetje dat je tegenhoudt en leert door te zetten in plaats van uit te wijken.</span>
              </li>
              <li>
                <span>Je hoeft geen topsporter te zijn. Wel klaar om te beginnen.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <TestimonialsSection hero={heroQuoteRebekka} items={getMomentumPageTestimonials()} />

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <span className={styles.label}>Wat je nog wilt weten</span>
          <h2 className={styles.title} style={oswaldTrim('Goede')}>Goede vragen</h2>
          <FaqList items={momentumFaq} />
        </div>
      </section>

      <Footer
        photoFirst
        photoSet="coaching"
        ctaLabel="Zet de eerste stap"
        ctaTitle={
          <>
            Klaar om te stoppen met{' '}
            <span className={styles.titleHeroOutline} style={{ whiteSpace: 'nowrap' }}>
              stoppen?
            </span>
          </>
        }
        ctaLead="Een uur, vrijblijvend. We kijken samen of Momentum bij je past."
      />
    </main>
  )
}
