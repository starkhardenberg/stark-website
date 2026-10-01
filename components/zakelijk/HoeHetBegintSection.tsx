import quoteStyles from '@/components/ContentQuoteBlock.module.css'
import introStyles from '@/components/IntroSection.module.css'
import { ZAKELIJK_START } from '@/components/zakelijk/zakelijk-landing'
import { STARK_CTA, STARK_CTA_PRIMARY, STARK_CTA_ROW } from '@/lib/stark-cta'
import pageStyles from './ZakelijkOndernemersPage.module.css'

export default function HoeHetBegintSection() {
  return (
    <section
      className={`${quoteStyles.section} ${quoteStyles.sectionDark} ${pageStyles.start} ${pageStyles.introRoom}`}
      aria-label={ZAKELIJK_START.title}
    >
      <div className={pageStyles.workSpine}>
        <header className={pageStyles.workHead}>
          <h2 className={introStyles.quote}>
            <span className={introStyles.quoteLine}>{ZAKELIJK_START.title}</span>
          </h2>
        </header>

        <div className={`${quoteStyles.inner} ${pageStyles.introInner}`}>
          <div className={quoteStyles.body}>
            {ZAKELIJK_START.prose.map((paragraph) => (
              <p key={paragraph} className={pageStyles.introGraf}>
                {paragraph}
              </p>
            ))}
            <p className={pageStyles.startHighlight}>{ZAKELIJK_START.highlight}</p>
          </div>
          <div className={`${introStyles.ctaRow} ${STARK_CTA_ROW} ${pageStyles.startCta}`}>
            <a
              href={ZAKELIJK_START.kennismaking.href}
              className={`${introStyles.cta} ${introStyles.ctaFilled} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ZAKELIJK_START.kennismaking.label}
            </a>
            <a
              href={ZAKELIJK_START.proef.href}
              className={`${introStyles.cta} ${STARK_CTA} ${pageStyles.startCtaOutline}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ZAKELIJK_START.proef.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
