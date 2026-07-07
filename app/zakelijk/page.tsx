import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { zakelijkFaq } from '@/components/faq/faq-zakelijk'
import ContentQuoteBlock from '@/components/ContentQuoteBlock'
import AanbodFeatureCard from '@/components/aanbod/AanbodFeatureCard'
import { zakelijkTracks } from '@/components/aanbod/zakelijk-tracks'
import { zakelijkStartSteps } from '@/components/zakelijk/zakelijk-start-steps'
import aanbodStyles from '@/components/AanbodSection.module.css'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import { hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW } from '@/lib/stark-cta'
import { oswaldTrim } from '@/lib/displayTrim'
import { pageMetadata } from '@/lib/open-graph'
import styles from '../landing.module.css'

const ARBO_UNIE_VERZUIM_2024 =
  'https://www.arbounie.nl/nieuws/verzuim-kost-in-2024-een-miljard-meer-dan-het-jaar-ervoor'

export const metadata: Metadata = pageMetadata(
  'zakelijk',
  'Bedrijven — STARK! Hardenberg',
  'Sterkere, weerbaardere medewerkers en minder verzuim. Momentum @ Werk, Impact voor re-integratie en maatwerk voor teams bij STARK! Hardenberg.',
)

export default function ZakelijkPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/foto-zakelijk-hero-sled.png"
            alt="Intensieve sled pull training bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgCoaching}`}
            sizes="100vw"
            priority
            style={{ objectPosition: '58% 42%' }}
          />
        </div>
        <Nav />
        <div className={styles.heroContent}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>STARK! OP HET</span>{' '}
            <span className={styles.heroPunch}>WARK</span>
          </h1>
          <p className={styles.heroSub}>
            Sterke medewerkers, sterk bedrijf. Het begint bij de basis.
          </p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section className={`${styles.introSection} ${styles.introSectionLight}`} aria-label="Waarom STARK! op de werkvloer">
        <div className={`${styles.introLayout} ${styles.introLayoutZakelijk}`}>
          <div className={styles.introStatBlock}>
            <div className={styles.introHeroGrid}>
              <p className={styles.introLabel}>De rekening van verzuim</p>
              <h2 className={`${styles.introStatement} ${styles.introStatementStat}`}>
                <span className={styles.introStatementKeep}>€405 per dag.</span>
              </h2>
              <p className={styles.introPrologueFact}>
                Zoveel kost een zieke medewerker je gemiddeld{' '}
                <span className={styles.introPrologueSource}>
                  (
                  <a
                    href={ARBO_UNIE_VERZUIM_2024}
                    className={styles.introPrologueSourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bron: Arbo Unie, 2024
                  </a>
                  )
                </span>
                . En juist mensen tussen de 35 en 55 vallen het langst uit, meestal door psychische
                klachten.
              </p>
              <div className={styles.introPrologueBridgeCol}>
                <p className={styles.introPrologueBridge}>
                  Je investeert in auto&apos;s, machines en systemen. Logisch. Maar wie bestuurt al
                  die middelen? <br />
                  Zonder starke mensen stopt het bedrijf.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.introBody}>
            <div className={styles.introCols}>
              <div className={styles.introCol}>
                <p className={styles.introColLabel}>De rekening van niks doen</p>
                <ul className={styles.introColList}>
                  <li>Langdurige uitval loopt razendsnel op. Loondoorbetaling, vervanging, productie die stilvalt.</li>
                  <li>Stress en fysieke klachten vreten energie, focus en sfeer, vaak maanden voordat iemand uitvalt.</li>
                  <li>Je sterkste mensen lopen het hardst leeg. En die vertrekken het eerst.</li>
                </ul>
              </div>
              <div className={styles.introCol}>
                <p className={styles.introColLabel}>Wat het je oplevert</p>
                <ul className={styles.introColList}>
                  <li>Mensen die sterker staan in lijf en hoofd. Stevig in hun schoenen, met energie voor hun werk.</li>
                  <li>Medewerkers leren omgaan met stress en druk op een manier die op de werkvloer werkt. Bewust van wat er gebeurt als het tegenzit, en wat wel werkt.</li>
                  <li>Werknemers die voor zichzelf resultaat neerzetten. Weten wat te doen en wie te zijn op het moment dat het telt.</li>
                  <li>Uitval voorkomen in plaats van achteraf repareren. Vaak deels te betalen uit je arbo- of preventiebudget.</li>
                </ul>
              </div>
            </div>

            <ContentQuoteBlock title="Eerlijk is eerlijk" subtitle="Niet voor elk bedrijf." className={styles.zakelijkFitBlock}>
              <p>
                <strong>Momentum @ Werk past als:</strong>
              </p>
              <ul>
                <li>je medewerkers ziet met lage energie of vroege stresssignalen, nog vóór ze uitvallen</li>
                <li>je preventie wilt die meetbaar is: nulmeting, eindmeting, rapportage</li>
                <li>je medewerkers tien weken de ruimte geeft om er echt mee aan de slag te gaan</li>
                <li>je een vaste partner in de regio zoekt, met korte lijntjes</li>
              </ul>
              <p>
                <strong>Momentum @ Werk past niet als:</strong>
              </p>
              <ul>
                <li>je een teamuitje of een workshop van een middag zoekt. Leuk, alleen verandert er daarna niets</li>
                <li>
                  je medewerkers hebt die al ziek thuis zitten met een medische diagnose. Dat hoort bij de
                  bedrijfsarts, en daar sturen we ook op aan
                </li>
                <li>je resultaat verwacht zonder dat het bedrijf er tijd of commitment tegenover zet</li>
                <li>je op zoek bent naar de goedkoopste optie. Reken op €1.200 per deelnemer voor tien weken</li>
              </ul>
              <p>Twijfel je of het past bij jullie situatie? Eén gesprek en we weten het allebei.</p>
            </ContentQuoteBlock>

            <div className={`${styles.introCtaRow} ${STARK_CTA_ROW}`}>
              <Link href={hrefKennismaking} className={`${styles.introCta} ${styles.introCtaFilled} ${STARK_CTA}`}>
                Plan een gesprek
              </Link>
              <WhatsAppLink className={`${styles.introCta} ${STARK_CTA}`}>
                <WhatsAppIcon className={styles.introCtaIcon} />
                <span>Stuur een WhatsApp</span>
              </WhatsAppLink>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionWithOrangeBottom}`}>
        <div className={styles.catalogHead}>
          <h2 className={`${styles.title} ${styles.titleHero}`} style={oswaldTrim('Welk')}>
            Welk aanbod <span className={styles.titleHeroOutline}>past</span>
          </h2>
          <p className={styles.catalogIntro}>
            Momentum en Impact ken je van onze coaching. Hier zetten we ze in voor medewerkers die
            opdagen.
          </p>
        </div>
        <div className={`${aanbodStyles.cardsAndCta} ${styles.aanbodCardsGrid}`}>
          {zakelijkTracks.map((track) => (
            <AanbodFeatureCard key={track.id} track={track} />
          ))}
        </div>
        <div className={styles.catalogCta}>
          <p className={styles.catalogCtaLead}>Niet zeker welk programma past?</p>
          <div className={`${styles.introCtaRow} ${STARK_CTA_ROW}`}>
            <Link href={hrefKennismaking} className={`${styles.introCta} ${styles.introCtaFilled} ${STARK_CTA}`}>
              Plan een gesprek
            </Link>
            <WhatsAppLink className={`${styles.introCta} ${STARK_CTA}`}>
              <WhatsAppIcon className={styles.introCtaIcon} />
              <span>Stuur een WhatsApp</span>
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section
        className={`${styles.introSection} ${styles.introSectionLight} ${styles.processSection}`}
        aria-label="Zo starten we samen"
      >
        <p className={styles.introLabel}>Zo starten we</p>
        <h2 className={styles.processTitle} style={oswaldTrim('Van')}>
          Van gesprek naar <span className={styles.processTitleOutline}>start</span>
        </h2>
        <p className={styles.processIntro}>
          Geen offerte via een formulier. We starten altijd met een gesprek, zodat het voorstel klopt.
        </p>
        <ol className={styles.processSteps}>
          {zakelijkStartSteps.map((step) => (
            <li key={step.num} className={styles.processStep}>
              <span className={styles.processStepNum} aria-hidden>
                {step.num}
              </span>
              <h3 className={styles.processStepTitle}>{step.title}</h3>
              <p className={styles.processStepDesc}>{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <span className={styles.label}>Wat je nog wilt weten</span>
          <h2 className={styles.title} style={oswaldTrim('Goede')}>Goede vragen</h2>
          <FaqList items={zakelijkFaq} />
          <FaqJsonLd items={zakelijkFaq} />
        </div>
      </section>

      <Footer photoFirst photoSet="zakelijk" />
    </main>
  )
}
