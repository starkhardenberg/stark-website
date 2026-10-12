import GoogleReviewsLink from '@/components/GoogleReviewsLink'
import { STARK_GRAIN } from '@/lib/stark-grain'
import PortraitQuoteStage from './PortraitQuoteStage'
import type { PortraitPerson } from './portrait-quotes'
import styles from './TestimonialsSection.module.css'
import stageStyles from './PortraitQuoteStage.module.css'

export default function PortraitStories({
  id,
  people,
  showGoogleReviews = false,
}: {
  id?: string
  people: readonly PortraitPerson[]
  showGoogleReviews?: boolean
}) {
  return (
    <section className={`${styles.section} ${styles.sectionUnified} ${STARK_GRAIN}`} id={id}>
      <div className={`${styles.innerHero} ${styles.innerHeroNarrow} ${styles.innerHeroUnified} ${stageStyles.shell}`}>
        <div className={styles.sectionIntro}>
          <h2 className={styles.sectionHeading}>Hun verhaal</h2>
          <p className={`starkSectionMeta starkSectionMetaOnDark ${styles.sectionMeta}`}>Wat mensen zeggen</p>
        </div>
        <PortraitQuoteStage people={people} />
      </div>
      {showGoogleReviews ? (
        <div className={stageStyles.reviews}>
          <GoogleReviewsLink tone="dark" />
        </div>
      ) : null}
    </section>
  )
}
