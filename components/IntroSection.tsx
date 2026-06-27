import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW } from '@/lib/stark-cta'
import { oswaldTrim } from '@/lib/displayTrim'
import styles from './IntroSection.module.css'

const manifestLines = [
  {
    lead: 'Vaste gezichten, korte lijnen.',
    rest: 'Geen poespas.',
  },
  {
    lead: 'Trainen, coachen, of een combinatie.',
    rest: 'Jij bepaalt.',
  },
  {
    lead: 'We doen wat werkt.',
    rest: 'Je krijgt een schop onder je kont én we houden je hand vast.',
  },
  {
    lead: 'Sterk in lijf en hoofd.',
    rest: 'Klaar voor wat er op je pad komt.',
  },
  {
    lead: 'Het begint met een gesprek.',
    rest: 'Eerst elkaar leren kennen, dan kijken we verder.',
  },
]

export default function IntroSection() {
  return (
    <section className={styles.intro} aria-label="Introductie STARK!">
      <div className={styles.inner}>
        <div className={styles.manifest}>
          <div className={styles.headingCol}>
            <p className={styles.label}>Wi&apos;j bint STARK</p>
            <h2 className={styles.heading} style={oswaldTrim('Wij')}>Wij doen het anders.</h2>
          </div>

          <div className={styles.copyCol}>
            <ul className={styles.lines}>
              {manifestLines.map((line) => (
                <li key={line.lead} className={styles.line}>
                  <p className={styles.lineLead}>{line.lead}</p>
                  <p className={styles.lineRest}>{line.rest}</p>
                </li>
              ))}
            </ul>

            <div className={`${styles.ctaRow} ${STARK_CTA_ROW}`}>
              <a href={hrefKennismaking} className={`${styles.cta} ${styles.ctaFilled} ${STARK_CTA}`}>
                {CTA_KENNISMAKING_LABEL}
              </a>
              <a href="#aanbod" className={styles.cta}>
                Bekijk de routes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
