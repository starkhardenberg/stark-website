import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import { impactFaq } from '@/components/faq/faq-impact'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import { getImpactPageTestimonials, heroQuoteEva } from '@/components/testimonials/testimonials-data'
import { oswaldTrim } from '@/lib/displayTrim'
import landing from '../landing.module.css'
import styles from './impact.module.css'

const IMPACT_STEPS = [
  {
    num: '01',
    timing: 'Vanaf week 1',
    title: 'Wekelijkse coaching',
    desc: 'Elke week een uur 1-op-1, apart van de groep. Over wat er speelt, wat werkt en wat niet. Eén vaste coach, het hele traject.',
  },
  {
    num: '02',
    timing: 'Eerste 2 weken',
    title: 'Het startpakket',
    desc: 'Vier 1-op-1 sessies. We brengen in kaart wat goed werkt in je lijf en wat niet, en je leert de basisbewegingen onder de knie te krijgen.',
  },
  {
    num: '03',
    timing: 'Daarna',
    title: 'Trainen in een kleine groep',
    desc: 'Twee keer per week trainen in een vaste groep. Iedereen loopt hetzelfde Impact-traject. Geen anonieme zaal, niemand is een nummer.',
  },
] as const

export const metadata = {
  title: 'Impact — 12 weken individueel traject — STARK! Hardenberg',
  description:
    'Twaalf weken waarin je stappen zet die ertoe doen. Fysiek, mentaal, of allebei, met één vaste coach aan je zijde.',
}

export default function ImpactPage() {
  return (
    <main className={landing.main}>
      <section className={`${landing.hero} ${landing.heroCoaching}`}>
        <div className={landing.heroBg}>
          <Image
            src="/images/foto-coaching-tegel-impact.png"
            alt="Schrijven en reflecteren tijdens een coachingsessie bij STARK! Hardenberg"
            fill
            className={`${landing.heroBgImg} ${landing.heroBgImgCoaching}`}
            sizes="100vw"
            priority
            style={{ objectPosition: '50% 40%' }}
          />
        </div>
        <Nav compact textMenu backHref="/coaching" backLabel="Coaching" />
        <div className={`${landing.heroContent} ${landing.heroContentLower}`}>
          <span className={landing.heroSlash} />
          <h1 className={landing.heroTitle}>
            <span className={landing.heroLead}>IMPACT</span>
            <span className={landing.heroPunch}>BIJ STARK</span>
          </h1>
          <p className={landing.heroSub}>
            Een persoonlijk traject van twaalf weken. Training en coaching, op jou afgestemd.
          </p>
        </div>
        <div className={`${landing.heroBar} ${landing.heroBarHidden}`} />
      </section>

      <section
        className={`${landing.introSection} ${landing.introSectionLight}`}
        aria-label="Voor wie Impact is"
      >
        <div className={landing.introRow}>
          <div className={landing.introHead}>
            <p className={landing.introLabel}>Herken je dit?</p>
            <h2 className={landing.introStatement}>Je bent hier niet toevallig.</h2>
          </div>
          <div className={landing.introBody}>
            <div className={landing.introCols}>
              <div className={landing.introCol}>
                <p className={landing.introColLabel}>Dit speelt er.</p>
                <ul className={landing.introColList}>
                  <li>Je weet wat je wilt veranderen, maar het blijft hangen. Je begint, je stopt, je begint opnieuw.</li>
                  <li>Er speelt iets. In je lijf, in je hoofd, of allebei. Alleen sporten lost het niet op.</li>
                  <li>Je hebt genoeg in je eentje geprobeerd.</li>
                </ul>
              </div>
              <div className={landing.introCol}>
                <p className={landing.introColLabel}>Dit wil je nu.</p>
                <ul className={landing.introColList}>
                  <li>Iemand naast je die scherp blijft, het hele traject.</li>
                  <li>Eerlijk kijken naar wat je doet, en naar wat je telkens overslaat.</li>
                  <li>Volledige aandacht, geen programma waarin je een nummer bent.</li>
                </ul>
              </div>
            </div>

            <p className={styles.reintegratieNote}>
              Soms zetten we Impact in als re-integratietraject, voor wie is uitgevallen, bijvoorbeeld door een burn-out. Een werkgever of bedrijfsarts kan doorverwijzen.{' '}
              <Link href="/fundament-reintegratie" className={styles.reintegratieLink}>
                Lees meer over re-integratie
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        className={`${landing.section} ${landing.sectionWithOrangeBottom}`}
        aria-label="Wat Impact doet"
      >
        <div className={styles.valueGrid}>
          <div className={styles.valueText}>
            <span className={landing.label}>Wat het doet</span>
            <h2 className={`${landing.title} ${landing.titleHero}`} style={oswaldTrim('Daarom')}>
              Daarom heet het <span className={landing.titleHeroOutline}>Impact</span>
            </h2>
            <p className={styles.rippleIntro}>
              Je zet stappen die bij jou zorgen dat dingen beter gaan lopen. Dat blijft niet bij jou.
            </p>
            <p className={styles.valueClose}>
              En het houdt niet op als het traject voorbij is. Wat je opbouwt, blijft.
            </p>
          </div>
          <div className={styles.valueRipple}>
            <ul className={styles.ripple}>
              <li>Op jezelf.</li>
              <li>Op je partner.</li>
              <li>Op je kinderen.</li>
              <li>Op je collega&apos;s.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={`${landing.section} ${landing.sectionWithOrangeBottom} ${landing.sectionLight} ${styles.opbouwLight}`}>
        <div className={styles.trajectGrid}>
          <div className={styles.trajectMedia}>
            <Image
              src="/images/foto-coaching-samen.jpg"
              alt="Coachingmoment tijdens een Impact-traject bij STARK! Hardenberg"
              fill
              className={styles.trajectMediaImg}
              sizes="(min-width: 860px) 40vw, 100vw"
            />
          </div>
          <div className={styles.trajectMain}>
            <h2 className={`${landing.title} ${landing.titleHero}`} style={oswaldTrim('Eén')}>
              Eén traject.<br />
              <span className={landing.titleHeroOutline}>De opbouw</span>
            </h2>
            <p className={styles.trajectIntro}>
              Alles zit erin. Coaching, startpakket en training lopen het hele traject samen op.
            </p>
            <div className={styles.timeline}>
              {IMPACT_STEPS.map((step) => (
                <div key={step.num} className={styles.timelineItem}>
                  <span className={styles.timelineNum}>
                    {step.num} <span className={styles.timelineTiming}>{step.timing}</span>
                  </span>
                  <h3 className={styles.timelineTitle}>{step.title}</h3>
                  <p className={styles.timelineDesc}>{step.desc}</p>
                </div>
              ))}
            </div>

            <div className={styles.hours}>
              <div className={styles.hoursItem}>
                <span className={styles.hoursNum}>24</span>
                <span className={styles.hoursLabel}>uur groepstraining</span>
              </div>
              <div className={styles.hoursItem}>
                <span className={styles.hoursNum}>4</span>
                <span className={styles.hoursLabel}>uur individuele training</span>
              </div>
              <div className={styles.hoursItem}>
                <span className={styles.hoursNum}>12</span>
                <span className={styles.hoursLabel}>uur persoonlijke coaching</span>
              </div>
            </div>
            <p className={styles.hoursNote}>Dat is wat we tellen. Geen strak weekschema dat je moet bijbenen.</p>
          </div>
        </div>
      </section>

      <TestimonialsSection hero={heroQuoteEva} items={getImpactPageTestimonials()} />

      <section className={landing.faqSection}>
        <div className={landing.faqInner}>
          <span className={landing.label}>Wat je nog wilt weten</span>
          <h2 className={landing.title} style={oswaldTrim('Goede')}>Goede vragen</h2>
          <FaqList items={impactFaq} />
        </div>
      </section>

      <Footer
        photoFirst
        photoSet="coaching"
        ctaImage="/images/foto-impact-footer.png"
        ctaLabel="Zet de eerste stap"
        ctaTitle={
          <>
            Klaar om stappen te zetten die{' '}
            <span className={landing.titleHeroOutline} style={{ whiteSpace: 'nowrap' }}>
              verschil maken?
            </span>
          </>
        }
        ctaLead="Een uur, vrijblijvend. We kijken samen of Impact bij je past."
      />
    </main>
  )
}
