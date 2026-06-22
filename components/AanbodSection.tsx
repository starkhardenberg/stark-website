import AanbodFeatureCard from './aanbod/AanbodFeatureCard'
import { aanbodTracks } from './aanbod/aanbod-tracks'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
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
        </div>

        <div className={styles.sectionCta}>
          <p className={styles.sectionCtaLine}>
            Niet zeker welke route bij je past?
            <span className={styles.sectionCtaSub}>Mooi, dan hebben we iets om over te praten.</span>
          </p>
          <div className={styles.sectionCtaActions}>
            <a href={hrefKennismaking} className={styles.sectionCtaButton}>
              {CTA_KENNISMAKING_LABEL}
              <span aria-hidden>→</span>
            </a>
            <WhatsAppLink className={styles.sectionCtaWhatsapp}>
              <WhatsAppIcon className={styles.sectionCtaWhatsappIcon} />
              <span>Stuur een WhatsApp</span>
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  )
}
