import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
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
  ZAKELIJK_FAQ,
  ZAKELIJK_FOOTER,
  ZAKELIJK_HERO,
  ZAKELIJK_INTRO,
  ZAKELIJK_META,
  ZAKELIJK_WERK,
} from '@/components/zakelijk/zakelijk-landing'
import ServiceJsonLd from '@/components/ServiceJsonLd'
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
  return (
    <main className={styles.main}>
      <FaqJsonLd items={ZAKELIJK_FAQ} />
      <ServiceJsonLd
        name="STARK! Wark"
        description={ZAKELIJK_META.description}
        path="/zakelijk"
      />
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
              <ol className={pageStyles.timeline}>
                {ZAKELIJK_INTRO.scene.map((beat) => (
                  <li key={beat.time} className={pageStyles.timelineItem}>
                    <span className={pageStyles.timelineTime}>{beat.time}</span>
                    <p className={pageStyles.introGraf}>{beat.text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <p className={pageStyles.pivot}>
              {ZAKELIJK_INTRO.pivotBefore}
                {ZAKELIJK_INTRO.pivotStrikes.map((phrase, index) => (
                  <span key={phrase}>
                    <span className={pageStyles.pivotStrike}>{phrase}</span>{ZAKELIJK_INTRO.pivotJoin[index]}
                  </span>
                ))}
            </p>
            <div className={quoteStyles.body}>
              {ZAKELIJK_INTRO.claim.map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`${pageStyles.introGraf}${index === 0 ? ` ${pageStyles.claimStrong}` : ''}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="ingangen"
        className={`${styles.section} ${styles.sectionBlack} ${pageStyles.ingangen}`}
        aria-label={ZAKELIJK_INTRO.closeLine1}
      >
        <div className={pageStyles.routesHead}>
          <div className={pageStyles.introCloseFlush}>
            <IntroClose
              wrap
              align="start"
              wide
              tone="dark"
              line1={ZAKELIJK_INTRO.closeLine1}
              line2={ZAKELIJK_INTRO.closeLine2}
            />
          </div>
          <p className={pageStyles.routesLead}>
            {ZAKELIJK_INTRO.routesLead.map((line) => (
              <span key={line} className={pageStyles.routesLeadLine}>{line}</span>
            ))}
          </p>
        </div>
        <div className={`${aanbodStyles.cardsAndCta} ${aanbodStyles.cardsAndCtaCentered} ${pageStyles.ingangGrid}`}>
          {zakelijkSoloRoutes.map((track) => (
            <AanbodFeatureCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <section
        className={`${quoteStyles.section} ${quoteStyles.sectionLight} ${pageStyles.work} ${pageStyles.introRoom}`}
        aria-label={ZAKELIJK_WERK.title}
      >
        <div className={pageStyles.workSpine}>
          <header className={pageStyles.workHead}>
            <h2 className={introStyles.quote}>
              <span className={introStyles.quoteLine}>{ZAKELIJK_WERK.title}</span>
            </h2>
          </header>

          <div className={`${quoteStyles.inner} ${pageStyles.introInner}`}>
            <div className={quoteStyles.body}>
              {ZAKELIJK_WERK.opening.map((paragraph) => (
                <p key={paragraph} className={pageStyles.introGraf}>
                  {paragraph}
                </p>
              ))}
            </div>

            <ol className={`${pageStyles.timeline} ${pageStyles.workLine}`}>
              {ZAKELIJK_WERK.beats.map((beat, index) => (
                <li key={beat.label} className={pageStyles.timelineItem}>
                  <span className={pageStyles.timelineTime}>{index + 1}</span>
                  <div>
                    <h3 className={pageStyles.workKey}>{beat.label}</h3>
                    <p className={pageStyles.workSub}>{beat.title}</p>
                    {(Array.isArray(beat.text) ? beat.text : [beat.text]).map((paragraph) => (
                      <p key={paragraph} className={pageStyles.workText}>
                        {paragraph}
                      </p>
                    ))}
                    <p className={`${pageStyles.workText} ${pageStyles.workMark}`}>{beat.mark}</p>
                    {index === ZAKELIJK_WERK.beats.length - 1 ? (
                      <p className={pageStyles.workRestart}>
                        <svg
                          className={pageStyles.workRestartMark}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3" />
                          <path d="M19.5 4.2V8h-3.8" />
                        </svg>
                        {ZAKELIJK_WERK.restart}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <HoeHetBegintSection />

      <TestimonialsSection hero={heroQuotePatrick} items={[]} narrow alignStart spine light />

      <section className={styles.faqSection} aria-label="Goede vragen">
        <header className={styles.sectionQuoteHead}>
          <h2 className={styles.sectionQuote}>
            <span className={styles.sectionQuoteLine}>Goede vragen</span>
          </h2>
          <p className={`starkSectionMeta starkSectionMetaOnDark ${styles.sectionQuoteMeta}`}>
            Wat je nog wilt weten
          </p>
        </header>
        <div className={styles.faqInner}>
          <FaqList items={ZAKELIJK_FAQ} tone="dark" variant="landing" />
        </div>
      </section>

      <Footer
        photoless
        hideBrand
        accentRule
        tone="light"
        statement={ZAKELIJK_FOOTER.statement}
        statementMeta={ZAKELIJK_FOOTER.statementMeta}
      />
    </main>
  )
}
