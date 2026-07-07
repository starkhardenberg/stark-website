import Link from 'next/link'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW } from '@/lib/stark-cta'
import { oswaldTrim } from '@/lib/displayTrim'
import styles from './IntroSection.module.css'

export default function IntroSection() {
  return (
    <section className={styles.intro} aria-label="Introductie STARK!">
      <div className={styles.inner}>
        <div className={styles.manifest}>
          <div className={styles.headingCol}>
            <p className={styles.label}>Wi&apos;j bint STARK!</p>
            <h2 className={styles.heading} style={oswaldTrim('Wij')}>Wij doen het anders.</h2>
          </div>

          <div className={styles.copyCol}>
            <p className={styles.positioning}>
              Sportschool en coaching in Hardenberg. Twee routes, één plek: STARK!
            </p>

            <div className={styles.bodyBlock}>
              <p className={styles.body}>
                Hardenberg heeft genoeg sportscholen. Apparaten, pasjes, een app. STARK! is dat niet. Bij
                ons train je nooit alleen: elke training wordt begeleid, elke deelnemer wordt gezien.
              </p>
              <p className={styles.body}>
                En loopt het in je hoofd stroef, dan staat er een coach naast je. Geen doorverwijzing.{' '}
                <Link href="/coaching" className={styles.inlineLink}>
                  Coaching
                </Link>{' '}
                onder hetzelfde dak.
              </p>
            </div>

            <p className={styles.signature}>
              Je krijgt een schop onder je kont én we houden je hand vast.
            </p>

            <p className={styles.breadth}>
              Van kids tot ZilverFitness, van eerste les tot jarenlang lid. Wi&apos;j bint STARK!, sinds
              2013 uit Hardenberg.
            </p>

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
