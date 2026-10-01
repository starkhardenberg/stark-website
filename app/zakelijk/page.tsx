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
import IntroClose from '@/components/IntroClose'
import {
  ZAKELIJK_FOOTER,
  ZAKELIJK_HERO,
  ZAKELIJK_INGANGEN,
  ZAKELIJK_INTRO,
  ZAKELIJK_META,
  ZAKELIJK_WERK,
} from '@/components/zakelijk/zakelijk-landing'
import { pageMetadata } from '@/lib/open-graph'
import pageStyles from '@/components/zakelijk/ZakelijkOndernemersPage.module.css'
import styles from '../landing.module.css'

export const metadata = pageMetadata('zakelijk', ZAKELIJK_META.title, ZAKELIJK_META.description)

function LineWithMark({ line, mark }: { line: string; mark: string }) {
  const at = line.indexOf(mark)
  if (at < 0) return line
  return (
    <>
      {line.slice(0, at)}
      <span className={introStyles.quoteMark}>{mark}</span>
      {line.slice(at + mark.length)}
    </>
  )
}

export default function ZakelijkPage() {
  const { volgorde } = ZAKELIJK_INGANGEN

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
        <Nav deep />
        <div className={`${styles.heroContent} ${styles.heroContentLower}`}>
          <span className={styles.heroSlash} />
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>{ZAKELIJK_HERO.lead}</span>{' '}
            <span className={styles.heroPunch}>{ZAKELIJK_HERO.punch}</span>
          </h1>
          <p className={styles.heroSub}>{ZAKELIJK_HERO.sub}</p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <section
        className={`${quoteStyles.section} ${quoteStyles.sectionLight} ${pageStyles.introRoom} ${pageStyles.introPad}`}
        aria-label={`${ZAKELIJK_INTRO.titleLine1} ${ZAKELIJK_INTRO.titleLine2}`}
      >
        <div className={pageStyles.introMeasure}>
          <header className={`${pageStyles.introHead} ${pageStyles.introAlignStart}`}>
            <h2 className={introStyles.quote}>
              <span className={introStyles.quoteLine}>
                <LineWithMark line={ZAKELIJK_INTRO.titleLine1} mark={ZAKELIJK_INTRO.titleMark} />
              </span>
              <span className={introStyles.quoteLine}>{ZAKELIJK_INTRO.titleLine2}</span>
            </h2>
          </header>

          <div className={`${quoteStyles.inner} ${pageStyles.introInner} ${pageStyles.introAlignStart}`}>
            <div className={quoteStyles.body}>
              {ZAKELIJK_INTRO.prose.map((paragraph) => (
                <p key={paragraph} className={pageStyles.introGraf}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <ol className={`${introStyles.regels} ${pageStyles.introRegels} ${pageStyles.introAlignStart}`}>
            {ZAKELIJK_INTRO.beats.map((beat) => (
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
              line1={ZAKELIJK_INTRO.closeLine1}
              line2={ZAKELIJK_INTRO.closeLine2}
            />
          </div>
        </div>
      </section>

      <section
        className={`${quoteStyles.section} ${quoteStyles.sectionDark} ${pageStyles.work} ${pageStyles.introRoom}`}
        aria-label={ZAKELIJK_WERK.title}
      >
        <div className={pageStyles.workSpine}>
          <header className={pageStyles.workHead}>
            <h2 className={introStyles.quote}>
              <span className={introStyles.quoteLine}>{ZAKELIJK_WERK.title}</span>
            </h2>
          </header>

          <div className={`${quoteStyles.inner} ${pageStyles.introInner}`}>
            <p className={pageStyles.workLead}>{ZAKELIJK_WERK.lead}</p>

            <div className={pageStyles.workBeats}>
              {ZAKELIJK_WERK.beats.map((beat) => (
                <article key={beat.title} className={pageStyles.workBeat}>
                  <h3 className={pageStyles.workBeatTitle}>{beat.title}</h3>
                  <p className={pageStyles.introGraf}>{beat.text}</p>
                  <p className={pageStyles.introGraf}>
                    <span className={pageStyles.workMark}>{beat.mark}</span>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="ingangen"
        className={`${styles.section} ${styles.sectionLight}`}
        aria-label={`${ZAKELIJK_INGANGEN.titleLine1}, ${ZAKELIJK_INGANGEN.titleLine2}`}
      >
        <h2
          className={`${aanbodStyles.sectionTitle} ${aanbodStyles.sectionTitleOnLight} ${aanbodStyles.sectionTitleCentered} ${aanbodStyles.sectionIntro} ${aanbodStyles.sectionIntroCentered}`}
        >
          <span className={aanbodStyles.titleLine}>{ZAKELIJK_INGANGEN.titleLine1}</span>
          <span className={aanbodStyles.titleLine}>{ZAKELIJK_INGANGEN.titleLine2}</span>
        </h2>
        <div className={`${aanbodStyles.cardsAndCta} ${aanbodStyles.cardsAndCtaCentered}`}>
          {zakelijkSoloRoutes
            .filter((track) => track.id !== 'momentum-at-werk')
            .map((track) => (
              <AanbodFeatureCard key={track.id} track={track} />
            ))}
        </div>
        <p className={pageStyles.ingangVolgorde}>
          {volgorde.before}
          <a href={volgorde.link[1]}>{volgorde.link[0]}</a>
          {volgorde.after}
        </p>
      </section>

      <HoeHetBegintSection />

      <TestimonialsSection hero={heroQuotePatrick} items={[]} narrow alignStart light spine />

      <Footer
        photoless
        hideBrand
        accentRule
        statement={ZAKELIJK_FOOTER.statement}
        statementMeta={ZAKELIJK_FOOTER.statementMeta}
      />
    </main>
  )
}
