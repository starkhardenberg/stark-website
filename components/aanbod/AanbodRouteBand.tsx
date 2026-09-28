import Link from 'next/link'
import type { CSSProperties } from 'react'
import BeeldenCaption from '@/components/BeeldenCaption'
import StarkImage from '@/components/StarkImage'
import StarkArrow from '@/components/icons/StarkArrow'
import type { AanbodTrack } from './aanbod-tracks'
import styles from './AanbodRouteBand.module.css'

type AanbodRouteBandProps = {
  track: AanbodTrack
  /** 0 = foto links, 1 = rechts, 2 = links */
  index: number
}

function displayNum(num: string) {
  return String(parseInt(num, 10))
}

export default function AanbodRouteBand({ track, index }: AanbodRouteBandProps) {
  const photoLeft = index % 2 === 0
  const summary =
    track.summary ?? track.desc?.split('\n\n')[0]?.trim() ?? ''

  const imageStyle: CSSProperties = {}
  if (track.photoObjectPosition) imageStyle.objectPosition = track.photoObjectPosition
  if (track.photoScale) {
    imageStyle.transform = `scale(${track.photoScale})`
    imageStyle.transformOrigin = track.photoScaleOrigin ?? 'center'
  }

  return (
    <article
      id={track.id}
      className={`${styles.band} ${photoLeft ? styles.bandPhotoLeft : styles.bandPhotoRight}`}
      aria-labelledby={`aanbod-route-${track.id}`}
    >
      <div className={styles.bandInner}>
        <div className={styles.media}>
          <span className={styles.num} aria-hidden>
            {displayNum(track.num)}
          </span>
          <div className={styles.mediaFrame}>
            <StarkImage
              src={`/images/${track.photo}`}
              alt={track.photoAlt}
              fill
              hoverColor={Boolean(track.readMoreHref)}
              className={styles.image}
              sizes="(min-width: 900px) 50vw, 100vw"
              style={Object.keys(imageStyle).length ? imageStyle : undefined}
            />
          </div>
          {index === 0 ? <BeeldenCaption /> : null}
        </div>

        <div className={styles.copy}>
          <h3 id={`aanbod-route-${track.id}`} className={styles.name}>
            {track.cat}
          </h3>
          {summary ? <p className={styles.summary}>{summary}</p> : null}
          {track.highlights && track.highlights.length > 0 ? (
            <ul className={styles.highlights}>
              {track.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {track.readMoreHref ? (
            <Link href={track.readMoreHref} className={styles.link}>
              {track.readMoreLabel ?? 'Lees meer'}
              <StarkArrow className={styles.linkArrow} />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  )
}
