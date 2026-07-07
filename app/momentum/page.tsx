import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { momentumFaq } from '@/components/faq/faq-momentum'
import ContentQuoteBlock from '@/components/ContentQuoteBlock'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import { getMomentumPageTestimonials, heroQuoteRebekka } from '@/components/testimonials/testimonials-data'
import { hrefKennismaking } from '@/lib/contact'
import {
  MOMENTUM_NEXT_START_HEADLINE,
} from '@/lib/momentum-dates'
import { oswaldTrim } from '@/lib/displayTrim'
import { pageMetadata } from '@/lib/open-graph'
import landing from '../landing.module.css'
import styles from './momentum.module.css'

const MOMENTUM_STEPS = [
  {
    num: '01',
    timing: 'Doorlopend',
    title: 'Fysieke training',
    desc: 'Twintig uur training op jouw niveau. Sterker worden in je lijf en tegelijk je mindset trainen als het je uitdaagt. Tempo, groepsdruk en het gevoel dat je er niet alleen voor staat.',
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

const MOMENTUM_START_STEP = {
  num: '04',
  timing: MOMENTUM_NEXT_START_HEADLINE,
  title: 'Start',
} as const

function getMomentumProgramSteps() {
  return [...MOMENTUM_STEPS, MOMENTUM_START_STEP]
}

export const metadata = pageMetadata(
  'momentum',
  'Momentum — 10 weken groepsprogramma — STARK! Hardenberg',
  'Tien weken samen verder dan alleen. Fysieke training plus groepscoaching in een vaste kleine groep van maximaal tien mensen.',
)

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
            <span className={landing.heroLead}>MOMENTUM</span>{' '}
            <span className={landing.heroPunch}>BIJ STARK!</span>
          </h1>
          <p className={`${landing.heroSub} ${landing.heroSubNavy}`}>
            Tien weken waarin je lijf en hoofd samen trainen, zodat je eindelijk voor elkaar krijgt wat er voor
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
                  <li>Tien weken structuur waarin je lijf en hoofd het samen doen.</li>
                  <li>Dat het deze keer wel lukt.</li>
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
              Je begint. Je stopt. Je begint opnieuw.
            </p>
            <p className={styles.valueClose}>
              Als het ertoe doet, is er iets dat je tegenhoudt. En dus doe je het niet. Momentum maakt dat
              zichtbaar en leert je het doorbreken. In een groep en met coaches die je scherp houden op de
              momenten dat je liever even weg zou lopen.
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
              {' '}
              <span className={landing.titleHeroOutline}>Wat erin zit</span>
            </h2>
            <p className={styles.trajectIntro}>
              Training, coaching en challenges. Tien weken, één lijn.
            </p>

            <div className={styles.proofBlock}>
              <p className={styles.proofEyebrow}>In cijfers</p>
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
            </div>

            <div className={styles.timeline}>
              {getMomentumProgramSteps().map((step) => (
                <div key={step.num} className={styles.timelineItem}>
                  <span className={styles.timelineNum}>
                    {step.num}{' '}
                    <span
                      className={`${styles.timelineTiming}${
                        step.num === '04' ? ` ${styles.timelineTimingDate}` : ''
                      }`}
                    >
                      {step.timing}
                    </span>
                  </span>
                  <h3 className={styles.timelineTitle}>{step.title}</h3>
                  {step.num === '04' ? (
                    <p className={styles.timelineDesc}>
                      <Link href={hrefKennismaking} className={styles.timelineLink}>
                        Plan een kennismaking
                      </Link>
                      . Samen kijken we of dit past bij wat je zoekt. Na het gesprek weet je wat je wilt.
                      Doe je mee, dan begin je op die startdatum, met jou erbij maximaal 10 mensen.
                    </p>
                  ) : (
                    <p className={styles.timelineDesc}>{step.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContentQuoteBlock title="Wat het kost">
        <p>
          Coaching bij STARK! is een serieuze investering in jezelf. Wat het precies is, hangt af van
          het traject dat bij je past. Dat hoor je in het kennismakingsgesprek, ruim voordat je iets
          beslist en zonder druk. Geen verrassingen achteraf.
        </p>
      </ContentQuoteBlock>

      <TestimonialsSection
        hero={heroQuoteRebekka}
        items={getMomentumPageTestimonials()}
        unifiedDark
        heroQuoteOffset={1}
      />

      <section
        className={`${landing.introSection} ${landing.introSectionLight} ${styles.fitFilterPlain}`}
        aria-label="Voor wie Momentum past"
      >
        <div className={landing.introRow}>
          <div className={landing.introHead}>
            <p className={landing.introLabel}>Eerlijk is eerlijk</p>
            <h2 className={landing.introStatement}>Voor wie dit werkt.</h2>
          </div>
          <div className={landing.introBody}>
            <div className={landing.introCols}>
              <div className={landing.introCol}>
                <p className={landing.introColLabel}>Dit is iets voor jou als</p>
                <ul className={landing.introColList}>
                  <li>In je hoofd is het duidelijk. Als het erop aankomt, schuif je het weer voor je uit.</li>
                  <li>Je wilt tien weken echt committen, met een vaste groep naast je.</li>
                  <li>Je hebt genoeg schema&apos;s en goede voornemens gehad.</li>
                </ul>
              </div>
              <div className={styles.fitFilterColAlt}>
                <p className={styles.fitFilterColLabel}>Kies iets anders als</p>
                <ul className={styles.fitFilterColList}>
                  <li>
                    Je zoekt alleen een trainingsschema of{' '}
                    <Link href="/trainen">losse lessen</Link>.
                  </li>
                  <li>
                    Je wilt <Link href="/coaching">1-op-1</Link>, geen groep.
                  </li>
                  <li>
                    Je weet al dat je niet bij alle groepscoachingsessies van die tien weken aanwezig kunt zijn.
                    Daarvoor plannen we geen inhaalmomenten.
                  </li>
                  <li>Je wilt flexibel blijven: losse sessies, geen vaste groep, geen vaste start.</li>
                </ul>
              </div>
            </div>
            <p className={styles.fitFilterClose}>
              Twijfel je? Dat zoeken we samen uit in de{' '}
              <Link href={hrefKennismaking}>kennismaking</Link>. Vrijblijvend.
            </p>
          </div>
        </div>
      </section>

      <section className={landing.faqSection}>
        <div className={landing.faqInner}>
          <span className={landing.label}>Wat je nog wilt weten</span>
          <h2 className={landing.title} style={oswaldTrim('Goede')}>
            Goede vragen
          </h2>
          <FaqList items={momentumFaq} />
          <FaqJsonLd items={momentumFaq} />
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
