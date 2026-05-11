import RouteCarousel, { RouteOption } from './RouteCarousel'
import styles from './TrackItem.module.css'

interface Track {
  id: string
  num: string
  cat: string
  desc: string
  routeOptions: RouteOption[]
  cta: string
  ctaHref: string
  photo: string
  photoAlt: string
  light?: boolean
}

export default function TrackItem({ track }: { track: Track }) {
  return (
    <article
      className={`${styles.item} ${track.light ? styles.light : ''}`}
      id={track.id}
    >
      <div className={styles.header}>
        <span className={styles.num}>{track.num}</span>
        <span className={styles.cat}>{track.cat}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.desc}>{track.desc}</p>
        <RouteCarousel options={track.routeOptions} light={track.light} />
        <a className={`${styles.cta} ${track.light ? styles.ctaDark : ''}`} href={track.ctaHref}>
          {track.cta}
        </a>
      </div>

    </article>
  )
}
