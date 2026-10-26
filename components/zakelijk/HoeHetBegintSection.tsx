import quoteStyles from '@/components/ContentQuoteBlock.module.css'
import introStyles from '@/components/IntroSection.module.css'
import { ZAKELIJK_START } from '@/components/zakelijk/zakelijk-landing'
import { STARK_CTA, STARK_CTA_PRIMARY, STARK_CTA_ROW } from '@/lib/stark-cta'
import pageStyles from './ZakelijkOndernemersPage.module.css'

export default function HoeHetBegintSection() {
  return (
    <section
      className={`${quoteStyles.section} ${quoteStyles.sectionDark} ${pageStyles.start} ${pageStyles.introRoom}`}
      id="zo-begin-je"
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
            <div className={pageStyles.startCopy}>
              {ZAKELIJK_START.paragraphs.map((paragraph) => (
                <p key={paragraph.lead ?? paragraph.text}>
                  {paragraph.lead ? (
                    <span className={pageStyles.startPointLead}>{paragraph.lead}</span>
                  ) : null}
                  {paragraph.text}
                </p>
              ))}
            </div>
            <dl className={pageStyles.startFacts}>
              {ZAKELIJK_START.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className={`${introStyles.ctaRow} ${STARK_CTA_ROW} ${pageStyles.startCta}`}>
            <a
              href={ZAKELIJK_START.proef.href}
              className={`${introStyles.cta} ${introStyles.ctaFilled} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ZAKELIJK_START.proef.label}
            </a>
          </div>
          <p className={pageStyles.startAside}>
            {ZAKELIJK_START.asideBefore}
            <a
              href={ZAKELIJK_START.kennismakingHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ZAKELIJK_START.asideLink}
            </a>
            {ZAKELIJK_START.asideAfter}
          </p>
        </div>
      </div>
    </section>
  )
}
