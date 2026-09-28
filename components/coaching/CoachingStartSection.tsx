import WhatsAppIcon from '@/components/contact/WhatsAppIcon'
import WhatsAppLink from '@/components/contact/WhatsAppLink'
import IntroClose from '@/components/IntroClose'
import { CTA_KENNISMAKING_LABEL, hrefKennismaking } from '@/lib/contact'
import { STARK_CTA, STARK_CTA_ROW, STARK_CTA_PRIMARY } from '@/lib/stark-cta'
import introStyles from '@/components/IntroSection.module.css'
import styles from './CoachingStartSection.module.css'

export default function CoachingStartSection() {
  return (
    <div className={styles.band} aria-label="Zo begin je">
      <IntroClose
        pair
        line1="Alles begint met een gesprek"
        line2="Gratis, een uur. Past het niet, dan zeggen we dat"
      />
      <div className={`${introStyles.ctaRow} ${introStyles.ctaRowProminent} ${STARK_CTA_ROW}`}>
        <a
          href={hrefKennismaking}
          className={`${introStyles.cta} ${introStyles.ctaFilled} ${STARK_CTA} ${STARK_CTA_PRIMARY}`}
        >
          {CTA_KENNISMAKING_LABEL}
          <span aria-hidden>→</span>
        </a>
        <WhatsAppLink className={`${introStyles.cta} ${STARK_CTA}`}>
          <WhatsAppIcon className={introStyles.ctaIcon} />
          <span>Stuur een WhatsApp</span>
        </WhatsAppLink>
      </div>
    </div>
  )
}
