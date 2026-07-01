import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import { momentumFaq } from '@/components/faq/faq-momentum'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import { getMomentumPageTestimonials, heroQuoteRebekka } from '@/components/testimonials/testimonials-data'
import { oswaldTrim } from '@/lib/displayTrim'
import landing from '../landing.module.css'
import styles from './momentum.module.css'

const MOMENTUM_STEPS = [
  {
    num: '01',
    timing: 'Doorlopend',
    title: 'Fysieke training',
    desc: 'Twintig uur training op jouw niveau. Sterker worden in je lijf en tegelijk je mindset trainen op het moment dat het zwaar wordt. Tempo, groepsdruk en het gevoel dat je er niet alleen voor staat.',
  },
  {
    num: '02',
    timing: '5 sessies',
    title: 'Groepscoaching',
    desc: 'Tien uur groepscoaching in vijf sessies van twee uur. Patronen herkennen en doorbreken terwijl je traint. Niet praten over mindset op een stoel, oefenen onder druk.',
  },
  {
    num: '03',
    timing: 'Verspreid',
    title: 'Challenges',
    desc: 'Vijf mentale en fysieke challenges. Oefenen op het moment dat je normaal uitwijkt. Juist daar gebeurt de doorbraak.',
  },
] as const

export const metadata = {
  title: 'Momentum — 10 weken groepsprogramma — STARK! Hardenberg',
  description:
    'Tien weken samen verder dan alleen. Fysieke training plus groepscoaching in een vaste kleine groep van maximaal tien mensen.',
}

export default function MomentumPage() {
  return (
    <main className={landing.main}>
      <section className={`${landing.hero} ${landing.heroCoaching}`}>
        <div className={landing.heroBg}>
          <Image
            src="/images/foto-coaching-tegel-momentum.png"
            alt="Groep in gesprek tijdens Momentum bij STARK! Hardenberg"
            fill
            className={`${landing.heroBgImg} ${landing.heroBgImgClean}`}
            sizes="100vw"
            priority
            style={{ objectPosition: 'center 35%' }}
          />
        </div>
        <Nav />
        <div className={`${landing.heroContent} ${landing.heroContentLower}`}>
          <span className={landing.heroSlash} />
          <h1 className={`${landing.heroTitle} ${landing.heroTitleCompact}`}>
            <span className={landing.heroLead}>MOMENTUM</span>
            <span className={landing.heroPunch}>BIJ STARK</span>
          </h1>
          <p className={`${landing.heroSub} ${styles.heroSubNavy}`}>
            10 weken waarin je lijf en hoofd samen trainen, zodat je eindelijk voor elkaar krijgt wat er voor
            jou toe doet.
          </p>
        </div>
        <div className={`${landing.heroBar} ${landing.heroBarHidden}`} />
      </section>

      <section
        className={`${landing.introSection} ${landing.introSectionLight}`}
        aria-label="Voor wie Momentum is"
      >
        <div className={landing.introRow}>
          <div className={landing.introHead}>
            <p className={landing.introLabel}>Herken je dit?</p>
            <h2 className={landing.introStatement}>Je kent dit patroon.</h2>
          </div>
          <div className={landing.introBody}>
            <div className={landing.introCols}>
              <div className={landing.introCol}>
                <p className={landing.introColLabel}>Dit speelt er.</p>
                <ul className={landing.introColList}>
                  <li>Je begint vol goede moed. Halverwege valt de energie weg.</li>
                  <li>Je weet wat je zou moeten doen. Op het moment zelf gebeurt het niet.</li>
                  <li>Alleen sporten of alleen nadenken heeft het nog niet opgelost.</li>
                </ul>
              </div>
              <div className={landing.introCol}>
                <p className={landing.introColLabel}>Dit wil je nu.</p>
                <ul className={landing.introColList}>
                  <li>Een vaste groep van max. 10 mensen die dezelfde weg lopen.</li>
                  <li>Oefenen als het zwaar wordt, niet achteraf praten over mindset.</li>
                  <li>Tien weken structuur waarin je lijf en hoofd het samen doen.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${landing.section} ${landing.sectionWithOrangeBottom}`}
        aria-label="Wat Momentum doet"
      >
        <div className={styles.valueGrid}>
          <div className={styles.valueText}>
            <span className={landing.label}>Wat het doet</span>
            <h2 className={`${landing.title} ${landing.titleHero}`} style={oswaldTrim('Stop')}>
              Stop met <span className={landing.titleHeroOutline}>stoppen</span>
            </h2>
            <p className={styles.rippleIntro}>
              Het patroon is vertrouwd. Je brein trekt je terug naar wat je kent zodra het spannend wordt.
            </p>
            <p className={styles.valueClose}>
              Momentum is tien weken waarin je dat doorbreekt. In je lijf, met een groep naast je.
            </p>
          </div>
          <div className={styles.valueRipple}>
            <ul className={styles.ripple}>
              <li>Je weet het wel.</li>
              <li>Je doet het net niet.</li>
              <li>Tot het zwaar wordt.</li>
              <li>Dan wijk je uit.</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className={`${landing.section} ${landing.sectionWithOrangeBottom} ${landing.sectionLight} ${styles.opbouwLight}`}
      >
        <div className={styles.trajectGrid}>
          <div className={styles.trajectMedia}>
            <Image
              src="/images/foto-coaching-samen.jpg"
              alt="Deelnemer midden in een zware oefening tijdens Momentum bij STARK! Hardenberg"
              fill
              className={styles.trajectMediaImg}
              sizes="(min-width: 860px) 40vw, 100vw"
              style={{ objectPosition: 'center 40%' }}
            />
          </div>
          <div className={styles.trajectMain}>
            <h2 className={`${landing.title} ${landing.titleHero}`} style={oswaldTrim('Eén')}>
              Eén programma.
              <br />
              <span className={landing.titleHeroOutline}>De opbouw</span>
            </h2>
            <p className={styles.trajectIntro}>
              Alles zit erin. Training, groepscoaching en challenges lopen de tien weken samen op.
            </p>
            <div className={styles.timeline}>
              {MOMENTUM_STEPS.map((step) => (
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
                <span className={styles.hoursNum}>20</span>
                <span className={styles.hoursLabel}>uur fysieke training</span>
              </div>
              <div className={styles.hoursItem}>
                <span className={styles.hoursNum}>10</span>
                <span className={styles.hoursLabel}>uur groepscoaching</span>
              </div>
              <div className={styles.hoursItem}>
                <span className={styles.hoursNum}>5</span>
                <span className={styles.hoursLabel}>mentale en fysieke challenges</span>
              </div>
            </div>
            <p className={styles.hoursNote}>
              Tien weken, vaste startdata. Max. 10 deelnemers, iedereen loopt hetzelfde programma.
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection hero={heroQuoteRebekka} items={getMomentumPageTestimonials()} />

      <section className={landing.faqSection}>
        <div className={landing.faqInner}>
          <span className={landing.label}>Wat je nog wilt weten</span>
          <h2 className={landing.title} style={oswaldTrim('Goede')}>
            Goede vragen
          </h2>
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
            <span className={landing.titleHeroOutline} style={{ whiteSpace: 'nowrap' }}>
              stoppen?
            </span>
          </>
        }
        ctaLead="Een uur, vrijblijvend. We kijken samen of Momentum bij je past."
      />
    </main>
  )
}
