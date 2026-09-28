import { aanbodTracks } from './aanbod/aanbod-tracks'
import AanbodFeatureCard from './aanbod/AanbodFeatureCard'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import Uitroepteken from '@/components/Uitroepteken'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_GRAIN } from '@/lib/stark-grain'
import { STARK_CTA, STARK_CTA_ROW, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import styles from './AanbodSection.module.css'

export default function AanbodSection() {
  return (
    <section className={`${styles.aanbod} ${STARK_GRAIN}`} id="aanbod">
      <Uitroepteken variant="background" />
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleLine}>Drie routes,</span>
          <span className={`${styles.titleLine} ${styles.titleLineEen}`}>één adres</span>
        </h2>
        <p className={`starkSectionMeta starkSectionMetaOnDark ${styles.sectionIntro}`}>
          Van een sterk lijf tot een sterke kop tot een sterk bedrijf
        </p>

        <div className={styles.cardsAndCta}>
          <AanbodFeatureCard track={aanbodTracks[0]} />
          <AanbodFeatureCard track={aanbodTracks[1]} />
          <AanbodFeatureCard track={aanbodTracks[2]} />
        </div>

        <div className={styles.sectionCta}>
          <p className={`starkSectionMeta starkSectionMetaOnDark ${styles.sectionCtaLine}`}>
            <span className={styles.sectionCtaLineItem}>Niet zeker welke route bij je past?</span>
            <span className={styles.sectionCtaLineItem}>Mooi, dan hebben we iets om over te praten.</span>
          </p>
          <div className={`${styles.sectionCtaActions} ${STARK_CTA_ROW}`}>
            <a href={hrefKennismaking} className={`${styles.sectionCtaButton} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}>
              {CTA_KENNISMAKING_LABEL}
              <span aria-hidden>→</span>
            </a>
            <WhatsAppLink className={`${styles.sectionCtaWhatsapp} ${STARK_CTA}`}>
              <WhatsAppIcon className={styles.sectionCtaWhatsappIcon} />
              <span>Stuur een WhatsApp</span>
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  )
}
