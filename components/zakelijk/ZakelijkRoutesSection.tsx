import Link from 'next/link'
import AanbodFeatureCard from '@/components/aanbod/AanbodFeatureCard'
import aanbodStyles from '@/components/AanbodSection.module.css'
import StarkArrow from '@/components/icons/StarkArrow'
import { hrefKennismaking } from '@/lib/contact'
import { STARK_GRAIN } from '@/lib/stark-grain'
import { zakelijkRouteTracks } from './zakelijk-route-tracks'
import landingStyles from '@/app/landing.module.css'
import styles from './ZakelijkRoutesSection.module.css'

export default function ZakelijkRoutesSection() {
  return (
    <>
      <section
        id="routes"
        className={`${landingStyles.section} ${landingStyles.sectionBlack} ${landingStyles.sectionWithOrangeBottom} ${STARK_GRAIN}`}
        aria-label="Kies je route"
      >
        <header className={styles.routesHead}>
          <h2 className={`${aanbodStyles.sectionTitle} ${styles.routesTitle}`}>
            <span className={aanbodStyles.titleLine}>Welke route</span>
            <span className={aanbodStyles.titleLine}>past bij jou?</span>
          </h2>
          <p className={styles.routesLead}>
            <span className={styles.routesLeadLine}>
              Dat hangt af van wie er boven jou zit.
            </span>
            <span className={styles.routesLeadLine}>
              Is dat niemand, dan begint het bij jou.
            </span>
          </p>
        </header>
        <div className={`${aanbodStyles.cardsAndCta} ${aanbodStyles.cardsAndCtaCentered}`}>
          {zakelijkRouteTracks.map((track) => (
            <AanbodFeatureCard key={track.id} track={track} />
          ))}
        </div>
      </section>

      <aside id="impact" className={styles.impact} aria-label="Impact">
        <div className={styles.impactInner}>
          <p className={`starkSectionMeta ${styles.impactMeta}`}>Opvang</p>
          <h3 className={styles.impactTitle}>Zit er nu iemand vast?</h3>
          <p className={styles.impactBody}>
            Impact is voor medewerkers die moeten terugkomen, of dreigen uit te vallen. Geen
            groepsprogramma. Persoonlijk, intensief, onder één dak.
          </p>
          <Link href={hrefKennismaking} className={styles.impactCta}>
            Plan een gesprek
            <StarkArrow className={styles.impactCtaArrow} />
          </Link>
        </div>
      </aside>

      <p className={styles.whoFoot}>
        <Link href="/team" className={styles.whoFootLink}>
          Wij trainen driehonderd mensen uit deze regio, aan de Nijverheidsstraat in Hardenberg.
        </Link>
      </p>
    </>
  )
}
