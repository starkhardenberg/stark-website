import StarkImage from '@/components/StarkImage'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FaqList from '@/components/faq/FaqList'
import FaqJsonLd from '@/components/FaqJsonLd'
import { Section } from '@/components/dienst/DienstParts'
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
  ZAKELIJK_INGANGEN,
  ZAKELIJK_INTRO,
  ZAKELIJK_JUMPS,
  ZAKELIJK_META,
  ZAKELIJK_WERK,
} from '@/components/zakelijk/zakelijk-landing'
import { pageMetadata } from '@/lib/open-graph'
import pageStyles from '@/components/zakelijk/ZakelijkOndernemersPage.module.css'
import dienstStyles from '@/components/dienst/DienstPage.module.css'
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
          <p className={styles.heroLabel}>{ZAKELIJK_HERO.label}</p>
          <h1 className={`${styles.heroTitle} ${styles.heroTitleCompact}`}>
            <span className={styles.heroLead}>{ZAKELIJK_HERO.lead}</span>{' '}
            <span className={styles.heroPunch}>{ZAKELIJK_HERO.punch}</span>
          </h1>
          <p className={styles.heroSub}>{ZAKELIJK_HERO.sub}</p>
        </div>
        <div className={`${styles.heroBar} ${styles.heroBarHidden}`} />
      </section>

      <nav className={pageStyles.jumps} aria-label="Snel naar">
        <p className={pageStyles.jumpsRow}>
          {ZAKELIJK_JUMPS.map((item, index) => (
            <span key={item.href} className={pageStyles.jumpItem}>
              {index > 0 ? (
                <span className={pageStyles.jumpDot} aria-hidden="true">
                  ·
                </span>
              ) : null}
              <a href={item.href}>{item.label}</a>
            </span>
          ))}
        </p>
      </nav>

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
              <p className={pageStyles.introGraf}>{ZAKELIJK_INTRO.purpose}</p>
              <p className={pageStyles.introGraf}>{ZAKELIJK_INTRO.opener}</p>
              {ZAKELIJK_INTRO.scenes.map((scene) => (
                <p key={scene} className={pageStyles.introGraf}>
                  {scene}
                </p>
              ))}
              <p className={`${pageStyles.introGraf} ${pageStyles.introAfter}`}>{ZAKELIJK_INTRO.after}</p>
            </div>
          </div>

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

          <div className={`${quoteStyles.inner} ${pageStyles.introInner} ${pageStyles.introAlignStart}`}>
            <div className={quoteStyles.body}>
              {ZAKELIJK_INTRO.close.map((paragraph) => (
                <p key={paragraph} className={pageStyles.introGraf}>
                  {paragraph}
                </p>
              ))}
            </div>
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
            <p className={`${styles.heroLabel} ${pageStyles.workSteps}`}>
              {ZAKELIJK_WERK.beats.map((beat) => beat.label).join(' · ')}
            </p>

            <div className={pageStyles.workBeats}>
              {ZAKELIJK_WERK.beats.map((beat) => (
                <article key={beat.title} className={pageStyles.workBeat}>
                  <p className={styles.heroLabel}>{beat.label}</p>
                  <h3 className={pageStyles.workBeatTitle}>{beat.title}</h3>
                  {(Array.isArray(beat.text) ? beat.text : [beat.text]).map((paragraph) => (
                    <p key={paragraph} className={pageStyles.introGraf}>
                      {paragraph}
                    </p>
                  ))}
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
        className={`${styles.section} ${styles.sectionLight} ${pageStyles.ingangen}`}
        aria-label={`${ZAKELIJK_INGANGEN.titleLine1}, ${ZAKELIJK_INGANGEN.titleLine2}`}
      >
        <h2
          className={`${aanbodStyles.sectionTitle} ${aanbodStyles.sectionTitleOnLight} ${pageStyles.ingangTitle}`}
        >
          <span className={aanbodStyles.titleLine}>{ZAKELIJK_INGANGEN.titleLine1}</span>
          <span className={aanbodStyles.titleLine}>{ZAKELIJK_INGANGEN.titleLine2}</span>
        </h2>
        <div className={`${aanbodStyles.cardsAndCta} ${aanbodStyles.cardsAndCtaCentered} ${pageStyles.ingangGrid}`}>
          {zakelijkSoloRoutes.map((track) => (
            <AanbodFeatureCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <div className={dienstStyles.page}>
        <Section number="05" title="Goede vragen" tone="light">
          <FaqList tone="light" items={ZAKELIJK_FAQ} />
        </Section>
      </div>

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
