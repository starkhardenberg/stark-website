import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { trainenFaq } from '@/components/faq/faq-trainen'
import LandingServiceCard from '@/components/landing/LandingServiceCard'
import { trainenCards } from '@/components/landing/landing-cards'
import ContentQuoteBlock from '@/components/ContentQuoteBlock'
import quoteStyles from '@/components/ContentQuoteBlock.module.css'
import TrainenRoosterSection from '@/components/trainen/TrainenRoosterSection'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import {
  getTrainenPageCarouselTestimonials,
  heroQuoteRenske,
} from '@/components/testimonials/testimonials-data'
import { hrefKennismaking } from '@/lib/contact'
import { oswaldTrim } from '@/lib/displayTrim'
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
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-trainen-landingspagina.png"
            alt="Deelnemer tijdens een squat in de groepsles bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImgTrainen} ${styles.heroBgImgTrainenLanding}`}
            sizes="100vw"
            priority
          />
        </div>
        <Nav />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>HIER TRAIN JE</span>{' '}
            <span className={styles.heroPunch}>BIJ STARK!</span>
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
          Iedereen is <span className={styles.titleHeroOutline}>STARK!</span>
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
                <span>
                  <Link href="/team" className={styles.inlineLink}>
                    Onze trainers
                  </Link>{' '}
                  begonnen zelf als lid.
                </span>
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

      <ContentQuoteBlock title="Zo begin je bij STARK!">
        <p>
          <strong>
            1.{' '}
            <Link href={hrefKennismaking} className={quoteStyles.inlineLink}>
              Een gesprek
            </Link>
            .
          </strong>{' '}
          We beginnen met praten. Waar sta je, waar wil je heen, en past dit bij je. Kost je een uur
          en het is gratis.
        </p>
        <p>
          <strong>2. Het startpakket.</strong> Vier sessies waarin we je techniek opbouwen en je lijf
          leren kennen. Daarna kun je veilig mee in elke training.
        </p>
        <p>
          <strong>3. Trainen.</strong> Tien keer per maand of onbeperkt, met elke training een trainer
          naast je.
        </p>
        <p>Wil je eerst voelen hoe het hier is? Na het gesprek plannen we gerust een proefles.</p>
      </ContentQuoteBlock>

      <ContentQuoteBlock title="Wat het kost">
        <p>
          Wij zijn niet de goedkoopste van de regio. Bewust. Elke training staat er een trainer naast
          je: iemand die je programma kent, je techniek corrigeert en je ook de oefeningen laat doen
          die je zelf zou overslaan. Blessure, of een lijf dat even tegenwerkt? Dan passen we je
          training aan en train je gewoon door. Wij fiksen dat voor je.
        </p>
        <p>
          Alles wat je hier traint, neem je mee naar buiten. Kracht en conditie voor tillen, bukken,
          spelen met je kinderen, de trap op zonder te hijgen.
        </p>
        <p>
          Ter vergelijking: één uur personal training kost al gauw €50. Hier kost een training met
          begeleiding je een fractie daarvan.
        </p>
        <p>
          Wat het precies kost, hoor je in het kennismakingsgesprek. Ruim voordat je iets beslist,
          zonder druk. Geen verrassingen achteraf.
        </p>
        <p>
          Zoek je een hal vol apparaten waar je voor €25 per maand je eigen ding doet? Prima keuze,
          alleen ben je dan bij ons verkeerd. Wij zijn er voor wie klaar is met zelf uitdokteren.
        </p>
      </ContentQuoteBlock>

      <TrainenRoosterSection />

      <TestimonialsSection
        hero={heroQuoteRenske}
        items={getTrainenPageCarouselTestimonials()}
        narrow
        heroQuoteOffset={1}
      />

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <span className={styles.label}>Wat je nog wilt weten</span>
          <h2 className={styles.title} style={oswaldTrim('Goede')}>Goede vragen</h2>
          <FaqList items={trainenFaq} />
          <FaqJsonLd items={trainenFaq} />
        </div>
      </section>

      <Footer photoFirst photoSet="trainen" />
    </main>
  )
}
