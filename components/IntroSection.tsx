import Link from 'next/link'
import type { ReactNode } from 'react'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW } from '@/lib/stark-cta'
import { oswaldTrim } from '@/lib/displayTrim'
import styles from './IntroSection.module.css'

type Regel = {
  id: string
  lead: ReactNode
  rest?: ReactNode
  accent?: boolean
}

const REGELS: Regel[] = [
  {
    id: '01',
    lead: 'Hardenberg heeft genoeg sportscholen met apparaten, pasjes of een app.',
    rest: 'STARK! is dat niet. Afwisselende workouts. Training die meebeweegt met blessures of een lijf dat tegenwerkt. Functioneel sterker worden. En begeleiding die persoonlijk blijft.',
  },
  {
    id: '02',
    lead: 'Je traint met een trainer naast je.',
    rest: 'Voor jezelf en samen met de groep. Aandacht voor iedereen in de zaal.',
  },
  {
    id: '03',
    lead: 'En loopt het in je hoofd stroef, dan staat er een coach naast je.',
    rest: (
      <>
        <Link href="/coaching" className={styles.inlineLink}>
          Coaching
        </Link>{' '}
        op dezelfde plek. Lijf en kop, één adres.
      </>
    ),
  },
  {
    id: '04',
    lead: 'Je krijgt een schop onder je kont én we houden je hand vast.',
    accent: true,
  },
  {
    id: '05',
    lead: 'Van kids tot ZilverFitness, van eerste les tot jarenlang lid.',
    rest: "Wi'j bint STARK!, sinds 2013 uit Hardenberg.",
  },
]

export default function IntroSection() {
  return (
    <section className={styles.intro} aria-label="Introductie STARK!">
      <div className={styles.inner}>
        <div className={styles.manifest}>
          <div className={styles.headingCol}>
            <p className={styles.label}>Wi&apos;j bint STARK!</p>
            <h2 className={styles.heading} style={oswaldTrim('Zo')}>
              Zo werken wij.
            </h2>
            <p className={styles.positioning}>
              Sportschool en coaching in Hardenberg. Twee routes, één plek: STARK!
            </p>
          </div>

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
                    {regel.rest ? <p className={styles.regelRest}>{regel.rest}</p> : null}
                  </div>
                </li>
              ))}
            </ol>

            <div className={`${styles.ctaRow} ${STARK_CTA_ROW}`}>
              <a href={hrefKennismaking} className={`${styles.cta} ${styles.ctaFilled} ${STARK_CTA}`}>
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
      </div>
    </section>
  )
}
