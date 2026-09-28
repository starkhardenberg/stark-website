import type { ReactNode } from 'react'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW, STARK_CTA_PRIMARY, STARK_EXCLAIM } from '@/lib/stark-cta'
import IntroClose from '@/components/IntroClose'
import styles from './IntroSection.module.css'

type Regel = {
  id: string
  lead: ReactNode
  /** Elke zin op een eigen regel */
  rest?: string[]
  accent?: boolean
}

const REGELS: Regel[] = [
  {
    id: '01',
    lead: 'We beginnen met een gesprek',
    rest: [
      'Waar sta je nu en waar wil je heen.',
      'Dat leggen we samen vast voordat we starten.',
    ],
  },
  {
    id: '02',
    lead: 'We bepalen de richting',
    rest: ['Punt A en punt B staan vast.', 'Daar werken we naartoe.'],
  },
  {
    id: '03',
    lead: 'Jij zet de stappen',
    rest: [
      'Wij lopen naast je, kijken mee, helpen mee, denken mee en samen zorgen we dat het werkt voor jou.',
    ],
  },
  {
    id: '04',
    lead: 'Ook je hoofd kun je trainen',
    rest: [
      'Dat is coaching. Momentum in de groep, Impact één op één.',
      'Voor een resultaat dat ertoe doet.',
    ],
  },
  {
    id: '05',
    lead: 'Leiderschap',
    rest: [
      'Omdat vitaliteit start bij hoe een bedrijf geleid wordt, op alle lagen.',
      'Eruit halen wat erin zit.',
    ],
  },
]

export default function IntroSection() {
  return (
    <section className={styles.intro} aria-label="Introductie STARK!">
      <div className={styles.inner}>
        <header className={`${styles.banner} ${styles.bannerToRegels}`}>
          <h2 className={`${styles.quote} ${styles.quoteDialect}`}>
            <span className={styles.quoteNowrap}>
              mooi da&apos;j dr <span className={styles.quoteMark}>bint</span>
            </span>
          </h2>
          <p className={`starkSectionMeta ${styles.positioning}`}>
            Wi&apos;j bint STARK<span className={STARK_EXCLAIM}>!</span> · Van kids tot
            ZilverFitness · Sinds 2013 in Hardenberg
          </p>
          <p className={styles.theme}>
            Wij zijn er voor mensen die klaar zijn met het bekende patroon van vallen en opstaan.
            Zodat ze blijven staan, en er zo iets nieuws kan ontstaan.
          </p>
        </header>

        <div className={styles.copyCol}>
          <ol className={styles.regels}>
            {REGELS.map((regel) => (
              <li
                key={regel.id}
                className={`${styles.regel} ${regel.accent ? styles.regelAccent : ''}`}
              >
                <span className={styles.regelNum} aria-hidden>
                  {regel.id}
                </span>
                <div className={styles.regelCopy}>
                  <p className={styles.regelLead}>{regel.lead}</p>
                    {regel.rest ? (
                      <p className={styles.regelRest}>
                        {regel.rest.map((line) => (
                          <span key={line} className={styles.regelRestLine}>
                            {line}
                          </span>
                        ))}
                      </p>
                    ) : null}
                </div>
              </li>
            ))}
          </ol>

          <IntroClose
            align="start"
            line1="Een schop onder je kont"
            line2="terwijl we je hand vasthouden"
          />

          <div className={`${styles.ctaRow} ${styles.ctaRowProminent} ${STARK_CTA_ROW}`}>
            <a href={hrefKennismaking} className={`${styles.cta} ${styles.ctaFilled} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}>
              {CTA_KENNISMAKING_LABEL}
              <span aria-hidden>→</span>
            </a>
            <a href="#aanbod" className={styles.cta}>
              Bekijk de routes
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
