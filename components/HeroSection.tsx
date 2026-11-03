import Nav from './Nav'
import HeroBadgePin from './HeroBadgePin'
import HeroAdaptiveBackground from './HeroAdaptiveBackground'
import {
  HERO_VIDEO_DESKTOP_URL,
  HERO_VIDEO_MOBILE_URL,
  HERO_VIDEO_POSTER,
} from '@/lib/hero-video'
import { STARK_GRAIN } from '@/lib/stark-grain'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <main className={`${styles.hero} ${STARK_GRAIN}`}>
      <div className={styles.bg} aria-hidden="true">
        <HeroAdaptiveBackground
          poster={HERO_VIDEO_POSTER}
          mobileSrc={HERO_VIDEO_MOBILE_URL}
          desktopSrc={HERO_VIDEO_DESKTOP_URL}
        />
      </div>

      <Nav deep />

      <HeroBadgePin />

      <section className={styles.stage}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            <span className={`${styles.line} ${styles.lead}`}>Wij</span>{' '}
            <span className={`${styles.line} ${styles.lead}`}>bouwen</span>{' '}
            <span className={`${styles.line} ${styles.punch}`}>starke</span>{' '}
            <span className={`${styles.line} ${styles.punch}`}>mensen</span>
          </h1>
          <p className={styles.sub} data-hero-sub="">
            Trainen voor je lijf. Coachen voor je kop
          </p>
        </div>
      </section>
    </main>
  )
}
