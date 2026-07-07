import Nav from './Nav'
import HeroAdaptiveBackground from './HeroAdaptiveBackground'
import {
  HERO_VIDEO_MOBILE_URL,
  HERO_VIDEO_POSTER,
  VIMEO_HERO_VIDEO_ID,
  heroVideoAspect,
  heroVideoStartSeconds,
  heroVimeoClipPercent,
  heroVimeoCoverBoost,
  vimeoHeroEmbedUrl,
} from '@/lib/hero-video'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  const vimeoSrc = VIMEO_HERO_VIDEO_ID
    ? vimeoHeroEmbedUrl(VIMEO_HERO_VIDEO_ID)
    : null

  return (
    <main className={styles.hero}>
      <div className={styles.bg} aria-hidden="true">
        <HeroAdaptiveBackground
          poster={HERO_VIDEO_POSTER}
          mobileSrc={HERO_VIDEO_MOBILE_URL}
          vimeo={
            vimeoSrc
              ? {
                  src: vimeoSrc,
                  videoAspect: heroVideoAspect(),
                  startSeconds: heroVideoStartSeconds(),
                  coverBoost: heroVimeoCoverBoost(),
                  clipOverride: heroVimeoClipPercent(),
                }
              : null
          }
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
