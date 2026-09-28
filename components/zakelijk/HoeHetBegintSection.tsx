import quoteStyles from '@/components/ContentQuoteBlock.module.css'
import introStyles from '@/components/IntroSection.module.css'
import { hrefKennismaking, hrefProefOpDeSom } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_PRIMARY, STARK_CTA_ROW } from '@/lib/stark-cta'
import pageStyles from './ZakelijkOndernemersPage.module.css'

const DEFAULT_PROEF_GRAF =
  'Of kom een keer meedoen. De Proef op de Som is een middag met mensen die in hun werk iets te trekken hebben: eigenaren, directeuren, MT-leden, teamleiders. Je maakt mee hoe we werken — coaching en training, precies zoals in een traject.'

export default function HoeHetBegintSection({
  proefGraf = DEFAULT_PROEF_GRAF,
  costLine,
}: {
  proefGraf?: string
  costLine?: string
}) {
  return (
    <section
      className={`${quoteStyles.section} ${quoteStyles.sectionDark} ${pageStyles.start} ${pageStyles.introRoom}`}
      aria-label="Hoe het begint"
    >
      <div className={pageStyles.workSpine}>
      <header className={pageStyles.workHead}>
        <h2 className={introStyles.quote}>
          <span className={introStyles.quoteLine}>Hoe het begint</span>
        </h2>
      </header>

      <div className={`${quoteStyles.inner} ${pageStyles.introInner}`}>
        <div className={quoteStyles.body}>
          <p className={pageStyles.introGraf}>
            Een kennismakingsgesprek van een uur. Bij ons of bij jou op de zaak, kosteloos en
            vrijblijvend.
          </p>
          {costLine ? <p className={pageStyles.introGraf}>{costLine}</p> : null}
          <p className={pageStyles.introGraf}>{proefGraf}</p>
          <p className={pageStyles.startHighlight}>
            Donderdag 5 november, van 15.00 tot 18.00 uur. Inclusief soep en broodjes. Kosteloos.
          </p>
        </div>
        <div className={`${introStyles.ctaRow} ${STARK_CTA_ROW} ${pageStyles.startCta}`}>
          <a
            href={hrefProefOpDeSom}
            className={`${introStyles.cta} ${introStyles.ctaFilled} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
            rel="noopener noreferrer"
          >
            Meld je aan voor 5 november
          </a>
          <a href={hrefKennismaking} className={`${introStyles.cta} ${STARK_CTA} ${pageStyles.startCtaOutline}`}>
            Plan een kennismakingsgesprek
          </a>
        </div>
      </div>
      </div>
    </section>
  )
}
