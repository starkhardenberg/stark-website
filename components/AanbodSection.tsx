import AanbodFeatureCard from './aanbod/AanbodFeatureCard'
import { aanbodTracks } from './aanbod/aanbod-tracks'
import { mailtoKennismaking } from '@/lib/contact'
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
        <div className={styles.grid}>
          {aanbodTracks.map((track) => (
            <AanbodFeatureCard key={track.id} track={track} />
          ))}
        </div>

        <div className={styles.sectionCta}>
          <p className={styles.sectionCtaText}>
            Twijfel je tussen trainen, coaching of zakelijk?
            <span>Mooi. Dan hebben we iets om over te praten.</span>
          </p>
          <a href={mailtoKennismaking} className={styles.sectionCtaButton}>
            Kom kennismaken
          </a>
        </div>
      </div>
    </section>
  )
}
