import type { Metadata } from 'next'
import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AanbodFeatureCard from '@/components/aanbod/AanbodFeatureCard'
import aanbodStyles from '@/components/AanbodSection.module.css'
import quoteStyles from '@/components/ContentQuoteBlock.module.css'
import introStyles from '@/components/IntroSection.module.css'
import { zakelijkSoloRoutes } from '@/components/zakelijk/zakelijk-solo-routes'
import HoeHetBegintSection from '@/components/zakelijk/HoeHetBegintSection'
import TestimonialsSection from '@/components/testimonials/TestimonialsSection'
import { heroQuotePatrick } from '@/components/testimonials/testimonials-data'
import { hrefKennismaking } from '@/lib/contact'
import IntroClose from '@/components/IntroClose'
import pageStyles from '@/components/zakelijk/ZakelijkOndernemersPage.module.css'
import styles from '../landing.module.css'

export const metadata: Metadata = {
  title: 'Zakelijk — STARK! Hardenberg',
  description:
    'Sterker worden, en doen wat er te doen is. Voor ondernemers, DGA\'s en ZZP\'ers. Het begint bij jou. Hardenberg.',
  robots: { index: false, follow: false },
}

const INTRO_BEATS = [
  { id: '01', text: 'Afspraken die verwateren.' },
  { id: '02', text: 'Werk dat twee keer gedaan wordt.' },
  { id: '03', text: 'Wachten tot iemand anders iets besluit.' },
  { id: '04', text: 'Niet weten waar je aan toe bent.' },
] as const

/**
 * Preview van de nieuwe /zakelijk (ondernemerspagina).
 * Bestaande /zakelijk blijft staan tot review.
 */
export default function ZakelijkV2Page() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} ${styles.heroCoaching} ${styles.heroReadable}`}>
        <div className={styles.heroBg}>
          <StarkImage
            src="/images/foto-zakelijk-hero-sled.png"
            alt="Training bij STARK! Hardenberg"
            fill
            className={`${styles.heroBgImg} ${styles.heroBgImgCoaching}`}
            sizes="100vw"
            priority
            style={{ objectPosition: '58% 42%' }}
          />
        </div>
        <Nav deep ctaLabel="Plan een gesprek" ctaHref={hrefKennismaking} />
        <div className={`${styles.heroContent} ${styles.heroContentLower}`}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>Sterker in lijf</span>{' '}
            <span className={styles.heroPunch}>en werk</span>
          </h1>
          <p className={styles.heroSub}>Begint bij ons</p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section
        className={`${quoteStyles.section} ${quoteStyles.sectionLight} ${pageStyles.introRoom} ${pageStyles.introPad}`}
        aria-label="Vitaliteit begint niet bij de medewerker"
      >
        <div className={pageStyles.introMeasure}>
          <header className={`${pageStyles.introHead} ${pageStyles.introAlignStart}`}>
            <h2 className={introStyles.quote}>
              <span className={introStyles.quoteLine}>
                Vitaliteit begint <span className={introStyles.quoteMark}>niet</span>
              </span>
              <span className={introStyles.quoteLine}>bij de medewerker</span>
            </h2>
          </header>

          <div className={`${quoteStyles.inner} ${pageStyles.introInner} ${pageStyles.introAlignStart}`}>
            <div className={quoteStyles.body}>
              <p className={pageStyles.introGraf}>
                In de meeste bedrijven is vitaliteit een sportabonnement, een workshop of een cursus
                stressmanagement. Wij beginnen een laag lager. Wat mensen in hun werk energie kost,
                zit meestal in hoe het werk loopt.
              </p>
              <p className={pageStyles.introGraf}>
                Dat kost geld. Werk dat twee keer gedaan wordt, betaal je twee keer. Een besluit
                dat blijft liggen, is omzet die blijft liggen.
              </p>
              <p className={pageStyles.introGraf}>
                Dat ontstaat in hoe er wordt geleid en samengewerkt. Dat is exact het gebied waar
                wij werken, met de eigenaar, het MT en de teamleiders. Mensen die verantwoordelijk
                zijn voor anderen en daar sterker in willen worden.
              </p>
              <p className={pageStyles.introGraf}>
                Als die laag staat, landt ook het aanbod om je mensen sterker en fitter te maken.
              </p>
            </div>
          </div>

          <ol className={`${introStyles.regels} ${pageStyles.introRegels} ${pageStyles.introAlignStart}`}>
            {INTRO_BEATS.map((beat) => (
              <li key={beat.id} className={introStyles.regel}>
                <span className={introStyles.regelNum} aria-hidden>
                  {beat.id}
                </span>
                <div className={introStyles.regelCopy}>
                  <p className={introStyles.regelLead}>{beat.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className={pageStyles.introCloseFlush}>
            <IntroClose
              wrap
              afterCopy
              align="start"
              wide
              line1="Het regent van boven naar beneden"
              line2="Dus beginnen we bij jou, niet andersom"
            />
          </div>
        </div>
      </section>

      <section
        className={`${quoteStyles.section} ${quoteStyles.sectionDark} ${pageStyles.work} ${pageStyles.introRoom}`}
        aria-label="Hoe we werken"
      >
        <div className={pageStyles.workSpine}>
          <header className={pageStyles.workHead}>
            <h2 className={introStyles.quote}>
              <span className={introStyles.quoteLine}>Hoe we werken</span>
            </h2>
          </header>

          <div className={`${quoteStyles.inner} ${pageStyles.introInner}`}>
            <p className={pageStyles.workLead}>
              Bij STARK! leer je zo te leiden dat je mensen weten wat er moet gebeuren, het toezeggen
              en het ook daadwerkelijk doen.
            </p>

            <div className={pageStyles.workBeats}>
            <article className={pageStyles.workBeat}>
              <h3 className={pageStyles.workBeatTitle}>Wat die week speelde</h3>
              <p className={pageStyles.introGraf}>
                In de coaching leggen we bloot wat er nu gebeurt en wat dat kost. We werken met wat
                die week speelde. Iemand die niet heeft gedaan wat beloofd was. Iemand die nog steeds
                niet is aangesproken op wat er niet werkt. Werk dat weer bij dezelfde persoon
                terechtkomt. Sommige mensen lopen hard, anderen minder.
              </p>
              <p className={pageStyles.introGraf}>
                <span className={pageStyles.workMark}>Dat maken we zichtbaar.</span>
              </p>
            </article>

            <article className={pageStyles.workBeat}>
              <h3 className={pageStyles.workBeatTitle}>Mensen die de afspraken nakomen</h3>
              <p className={pageStyles.introGraf}>
                Zichtbaar maken is nodig, alleen niet genoeg. We zetten op scherp wat er niet werkt,
                en maken daar afspraken over. Vervolgens leren mensen te doen wat nodig is om die
                afspraken na te komen. Ook als er druk op de ketel staat, en ook als het iets is wat
                ze nog nooit gedaan hebben. Komt iemand zijn afspraak niet na, dan wordt dat gezegd.
                En hij leert dat aan te nemen zonder het persoonlijk te maken, en het recht te zetten.
                Pas dan komt in beweging wat stilstond.
              </p>
              <p className={pageStyles.introGraf}>
                <span className={pageStyles.workMark}>
                  Dat is het verschil tussen een bedrijf dat afspraken maakt en een bedrijf dat ze
                  nakomt.
                </span>
              </p>
            </article>

            <article className={pageStyles.workBeat}>
              <h3 className={pageStyles.workBeatTitle}>In de trainingszaal toets je het</h3>
              <p className={pageStyles.introGraf}>
                Wat we in de coaching bespreken, oefen je in de training. Als je intensief traint is
                binnen tien seconden zichtbaar wat je doet als het zwaar wordt: doorzetten, inhouden,
                wegkijken, of precies dat ene setje meer. Datzelfde laat je maandagochtend op kantoor
                zien. Daarom trainen we. Om te oefenen met wie je bent als het spannend wordt. Fitter
                worden hoort erbij.
              </p>
              <p className={pageStyles.introGraf}>
                <span className={pageStyles.workMark}>
                  Op kantoor duurt het maanden voordat iemand het benoemt.
                </span>
              </p>
            </article>
          </div>
        </div>
        </div>
      </section>

      <section
        id="ingangen"
        className={`${styles.section} ${styles.sectionLight}`}
        aria-label="Alleen jij, of jij en je mensen"
      >
        <h2
          className={`${aanbodStyles.sectionTitle} ${aanbodStyles.sectionTitleOnLight} ${aanbodStyles.sectionTitleCentered} ${aanbodStyles.sectionIntro} ${aanbodStyles.sectionIntroCentered}`}
        >
          <span className={aanbodStyles.titleLine}>Alleen jij</span>
          <span className={aanbodStyles.titleLine}>of jij en je mensen</span>
        </h2>
        <div className={`${aanbodStyles.cardsAndCta} ${aanbodStyles.cardsAndCtaCentered}`}>
          {zakelijkSoloRoutes
            .filter((track) => track.id !== 'momentum-at-werk')
            .map((track) => (
              <AanbodFeatureCard key={track.id} track={track} />
            ))}
        </div>
      </section>

      <HoeHetBegintSection costLine="In het gesprek rekenen we uit wat het je nu kost dat het blijft liggen." />

      <TestimonialsSection hero={heroQuotePatrick} items={[]} narrow alignStart light spine />

      <Footer
        photoless
        hideBrand
        accentRule
        statement="Koffie en verder praten?"
        statementMeta="Gratis gesprek · ~1 uur"
      />
    </main>
  )
}
