import { aanbodTracks } from './aanbod/aanbod-tracks'
import AanbodFeatureCard from './aanbod/AanbodFeatureCard'
import RouteKiezer from './aanbod/RouteKiezer'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import Uitroepteken from '@/components/Uitroepteken'
import { STARK_GRAIN } from '@/lib/stark-grain'
import { STARK_CTA, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
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
          <span>Van een sterk lijf</span><span>tot een sterke kop</span><span>tot een sterk bedrijf</span>
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
          <div className={styles.sectionCtaPicker}>
            <RouteKiezer />
            <WhatsAppLink className={`${styles.sectionCtaDirect} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}>
              <span>Liever direct appen?</span>
              <span>Stuur Yvonne een bericht</span>
            </WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  )
}
