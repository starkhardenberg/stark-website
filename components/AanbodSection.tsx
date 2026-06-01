import AanbodFeatureCard from './aanbod/AanbodFeatureCard'
import { aanbodTracks } from './aanbod/aanbod-tracks'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import styles from './AanbodSection.module.css'

export default function AanbodSection() {
  return (
    <section className={styles.aanbod} id="aanbod">
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>
          Ons <span className={styles.sectionTitleOutline}>aanbod</span>
        </h2>
        <div className={styles.sectionIntro}>
          <p>
            Drie routes, één vertrekpunt: sterker worden in lijf en hoofd.
          </p>
        </div>
        <div className={styles.cardsAndCta}>
          <AanbodFeatureCard track={aanbodTracks[0]} />
          <AanbodFeatureCard track={aanbodTracks[1]} />
          <AanbodFeatureCard track={aanbodTracks[2]} />

          <figure className={styles.sectionCta}>
            <blockquote className={styles.sectionCtaQuote}>
              <p>Twijfel je tussen trainen, coaching of zakelijk?</p>
            </blockquote>
            <figcaption className={styles.sectionCtaCite}>
              <p className={styles.sectionCtaSub}>
                Mooi. Dan hebben we iets om over te praten.
              </p>
              <a href={hrefKennismaking} className={styles.sectionCtaButton}>
                {CTA_KENNISMAKING_LABEL}
                <span aria-hidden>→</span>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
