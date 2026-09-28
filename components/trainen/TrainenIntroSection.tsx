import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import styles from '@/components/IntroSection.module.css'

type Regel = {
  id: string
  lead: string
  /** Bewuste afbreking, bijvoorbeeld op de komma. */
  leadLines?: [string, string]
  rest?: [string, string]
}

const REGELS: Regel[] = [
  {
    id: '01',
    lead: 'Je start op jouw niveau',
    rest: [
      'De trainer kijkt waar jij staat.',
      'Vanuit daar bouwen jullie verder.',
    ],
  },
  {
    id: '02',
    lead: 'Ons team kent je naam',
    rest: [
      'En zet je steeds opnieuw weer op scherp.',
      'Vaste gezichten in elke training.',
    ],
  },
  {
    id: '03',
    lead: 'Functioneel sterk worden',
    rest: [
      'Kracht en conditie voor je week.',
      'Tillen, bukken, spelen, de trap op.',
    ],
  },
  {
    id: '04',
    lead: 'Je komt voor jezelf, je blijft voor de groep',
    leadLines: ['Je komt voor jezelf,', 'je blijft voor de groep'],
    rest: [
      'Hard werken. Hard lachen.',
      'Trainers die zelf als lid begonnen.',
    ],
  },
]

export default function TrainenIntroSection() {
  return (
    <section className={styles.intro} aria-label="Trainen bij STARK!">
      <div className={styles.inner}>
        <header className={`${styles.banner} ${styles.bannerToRegels}`}>
          <h2 className={`${styles.quote} ${styles.quoteLoud}`}>
            <span className={styles.quoteLine}>Iedereen is</span>
            <span className={`${styles.quoteLine} ${styles.quoteMark}`}>STARK!</span>
          </h2>
          <p className={`starkSectionMeta ${styles.positioning}`}>
            Echt stark en fit · Voor jezelf, met elkaar · Sinds 2013
          </p>
        </header>

        <div className={styles.copyCol}>
          <ol className={styles.regels}>
            {REGELS.map((regel) => (
              <li key={regel.id} className={styles.regel}>
                <span className={styles.regelNum} aria-hidden>
                  {regel.id}
                </span>
                <div className={styles.regelCopy}>
                  <p className={styles.regelLead}>
                    {regel.leadLines
                      ? regel.leadLines.map((line) => (
                          <span key={line} className={styles.regelLeadLine}>
                            {line}
                          </span>
                        ))
                      : regel.lead}
                  </p>
                  {regel.rest ? (
                    <p className={styles.regelRest}>
                      <span className={styles.regelRestLine}>{regel.rest[0]}</span>
                      <span className={styles.regelRestLine}>{regel.rest[1]}</span>
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>

          <div className={`${styles.ctaRow} ${styles.ctaRowSpaced} ${STARK_CTA_ROW}`}>
            <a
              href={hrefKennismaking}
              className={`${styles.cta} ${styles.ctaFilled} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
            >
              {CTA_KENNISMAKING_LABEL}
              <span aria-hidden>→</span>
            </a>
            <a href="#groepen" className={styles.cta}>
              Bekijk de groepen
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
