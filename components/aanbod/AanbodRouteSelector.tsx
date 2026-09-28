'use client'

import Link from 'next/link'
import { useEffect, useState, type CSSProperties } from 'react'
import BeeldenCaption from '@/components/BeeldenCaption'
import StarkImage from '@/components/StarkImage'
import StarkArrow from '@/components/icons/StarkArrow'
import type { AanbodTrack } from './aanbod-tracks'
import styles from './AanbodRouteSelector.module.css'

type Props = {
  tracks: AanbodTrack[]
}

function displayNum(num: string) {
  return String(parseInt(num, 10))
}

function routeBody(track: AanbodTrack) {
  if (track.highlights && track.highlights.length > 0) {
    return track.highlights[0]
  }
  return track.desc?.split('\n\n')[0]?.trim() ?? ''
}

export default function AanbodRouteSelector({ tracks }: Props) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '')
      const index = tracks.findIndex((track) => track.id === hash)
      if (index >= 0) setActive(index)
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [tracks])

  return (
    <div className={styles.shell}>
      <div className={styles.rail} role="tablist" aria-label="Kies je route">
        <p className={styles.railEyebrow}>Kies je route</p>
        {tracks.map((track, index) => {
          const isActive = index === active
          return (
            <button
              key={track.id}
              type="button"
              role="tab"
              id={`aanbod-tab-${track.id}`}
              aria-selected={isActive}
              aria-controls={`aanbod-panel-${track.id}`}
              className={`${styles.railBtn} ${isActive ? styles.railBtnActive : ''}`}
              onClick={() => setActive(index)}
            >
              <span className={styles.railNum} aria-hidden>
                {displayNum(track.num)}
              </span>
              <span className={styles.railLabel}>{track.cat}</span>
            </button>
          )
        })}
      </div>

      <div className={styles.stage}>
        {tracks.map((track, index) => {
          const isActive = index === active
          const isClimax = index === tracks.length - 1
          const body = routeBody(track)

          const imageStyle: CSSProperties = {}
          if (track.photoObjectPosition) imageStyle.objectPosition = track.photoObjectPosition
          if (track.photoScale) {
            imageStyle.transform = `scale(${track.photoScale})`
            imageStyle.transformOrigin = track.photoScaleOrigin ?? 'center'
          }

          return (
            <article
              key={track.id}
              id={track.id}
              role="tabpanel"
              aria-labelledby={`aanbod-tab-${track.id}`}
              hidden={!isActive}
              className={`${styles.panel} ${isClimax ? styles.panelClimax : ''}`}
            >
              <div className={styles.panelInner}>
                <div className={styles.media}>
                  <span className={styles.stamp} aria-hidden>
                    {displayNum(track.num)}
                  </span>
                  <div className={styles.mediaFrame}>
                    <StarkImage
                      src={`/images/${track.photo}`}
                      alt={track.photoAlt}
                      fill
                      hoverColor={Boolean(track.readMoreHref)}
                      className={styles.image}
                      sizes="(min-width: 900px) 58vw, 100vw"
                      style={Object.keys(imageStyle).length ? imageStyle : undefined}
                    />
                  </div>
                  {index === 0 ? <BeeldenCaption /> : null}
                </div>

                <div className={styles.copy}>
                  <h3 className={styles.hook}>{track.summary?.replace(/\.$/, '')}</h3>
                  {body ? <p className={styles.body}>{body}</p> : null}
                  {track.readMoreHref ? (
                    <Link href={track.readMoreHref} className={styles.cta}>
                      {track.readMoreLabel ?? 'Lees meer'}
                      <StarkArrow className={styles.ctaArrow} />
                    </Link>
                  ) : null}
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
