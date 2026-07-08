import Nav from './Nav'
import HeroAdaptiveBackground from './HeroAdaptiveBackground'
import {
  HERO_VIDEO_DESKTOP_URL,
  HERO_VIDEO_MOBILE_URL,
  HERO_VIDEO_POSTER,
} from '@/lib/hero-video'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <main className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <HeroAdaptiveBackground
          poster={HERO_VIDEO_POSTER}
          desktopSrc={HERO_VIDEO_DESKTOP_URL}
          mobileSrc={HERO_VIDEO_MOBILE_URL}
        />
      </div>

      <Nav />

      <section className={styles.stage}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            <span className={`${styles.line} ${styles.lead}`}>Wij</span>{' '}
            <span className={`${styles.line} ${styles.lead}`}>bouwen</span>{' '}
            <span className={`${styles.line} ${styles.punch}`}>starke</span>{' '}
            <span className={`${styles.line} ${styles.punch}`}>mensen.</span>
          </h1>
          <p className={styles.sub}>
            Trainen voor je lijf. Coachen voor je kop.
          </p>
        </div>
      </section>
    </main>
  )
}
