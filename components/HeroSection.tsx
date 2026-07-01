import Nav from './Nav'
import HeroBackgroundVideo from './HeroBackgroundVideo'
import HeroVimeoBackground from './HeroVimeoBackground'
import {
  HERO_VIDEO_POSTER,
  HERO_VIDEO_URL,
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
        {vimeoSrc ? (
          <HeroVimeoBackground
            src={vimeoSrc}
            poster={HERO_VIDEO_POSTER}
            videoAspect={heroVideoAspect()}
            startSeconds={heroVideoStartSeconds()}
            coverBoost={heroVimeoCoverBoost()}
            clipOverride={heroVimeoClipPercent()}
          />
        ) : HERO_VIDEO_URL ? (
          <HeroBackgroundVideo src={HERO_VIDEO_URL} poster={HERO_VIDEO_POSTER} />
        ) : (
          <img
            src={HERO_VIDEO_POSTER}
            alt=""
            className={styles.posterFallback}
          />
        )}
      </div>

      <Nav />

      <section className={styles.stage}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            <span className={`${styles.line} ${styles.lead}`}>Wij</span>
            <span className={`${styles.line} ${styles.lead}`}>bouwen</span>
            <span className={`${styles.line} ${styles.punch}`}>starke</span>
            <span className={`${styles.line} ${styles.punch}`}>mensen.</span>
          </h1>
        </div>
      </section>
    </main>
  )
}
