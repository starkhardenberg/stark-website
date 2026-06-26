'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { CSSProperties, KeyboardEvent, MouseEvent } from 'react'
import type { AanbodTrack } from './aanbod-tracks'
import styles from './AanbodFeatureCard.module.css'

type AanbodFeatureCardProps = {
  track: AanbodTrack
}

export default function AanbodFeatureCard({ track }: AanbodFeatureCardProps) {
  const router = useRouter()
  const mediaLabel =
    track.mediaLabel ?? (track.id === 'trainen' ? 'TRAINING' : track.cat.toUpperCase())
  const paragraphs = (track.desc ?? '')
    .split(/\n\n/)
    .map((s) => s.trim())
    .filter(Boolean)
  const landingHref = track.readMoreHref
  const hasMenu = Boolean(track.menu?.length)

  const imageStyle: CSSProperties = {}
  if (track.photoObjectPosition) imageStyle.objectPosition = track.photoObjectPosition
  if (track.photoScale) {
    imageStyle.transform = `scale(${track.photoScale})`
    imageStyle.transformOrigin = track.photoScaleOrigin ?? 'center'
  }
  if (track.photoGrayscale) {
    imageStyle.filter = 'grayscale(1) contrast(1.04)'
  }

  const openLanding = () => {
    if (!landingHref) return
    router.push(landingHref)
  }

  const handleCardClick = (event: MouseEvent<HTMLElement>) => {
    if (!landingHref) return
    if ((event.target as HTMLElement).closest('a')) return
    openLanding()
  }

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!landingHref) return
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openLanding()
  }

  return (
    <article
      id={track.id}
      aria-label={track.readMoreLabel ?? track.cat}
      className={`${styles.card} ${track.light ? styles.cardLight : ''}${
        track.businessContext ? ` ${styles.cardBusinessContext}` : ''
      }${landingHref ? '' : ` ${styles.cardStatic}`}`}
      role={landingHref ? 'link' : undefined}
      tabIndex={landingHref ? 0 : undefined}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <div className={styles.media}>
        <Image
          src={`/images/${track.photo}`}
          alt={track.photoAlt}
          fill
          className={styles.image}
          sizes="(min-width: 900px) 33vw, 100vw"
          style={Object.keys(imageStyle).length ? imageStyle : undefined}
        />
        <div className={styles.mediaLabelBlock}>
          <span className={styles.mediaLabel}>{mediaLabel}</span>
          {track.mediaSubLabel ? (
            <span
              className={`${styles.mediaSubLabel}${
                track.businessContext ? ` ${styles.mediaSubLabelAccent}` : ''
              }`}
            >
              {track.mediaSubLabel}
            </span>
          ) : null}
        </div>
        <span className={styles.index} aria-hidden>
          {track.num}
        </span>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelInner}>
          <div className={styles.panelContent}>
            {hasMenu ? (
              <>
                {track.eyebrow ? (
                  <span
                    className={`${styles.eyebrow}${
                      track.businessContext ? ` ${styles.eyebrowNeutral}` : ''
                    }`}
                  >
                    {track.eyebrow}
                  </span>
                ) : null}
                {track.panelTitle ? (
                  <h3 className={styles.panelTitle}>{track.panelTitle}</h3>
                ) : null}
                <dl className={styles.menuList}>
                  {track.menu!.map((row) => (
                    <div key={row.label} className={styles.menuRow}>
                      <dt>{row.label}</dt>
                      <dd>{row.text}</dd>
                    </div>
                  ))}
                </dl>
              </>
            ) : (
              <div className={styles.body}>
                {paragraphs.map((text, i) => (
                  <p key={i} className={styles.paragraph}>
                    {text}
                  </p>
                ))}
              </div>
            )}
            {track.readMoreHref ? (
              <Link href={track.readMoreHref} className={styles.readMore}>
                {track.readMoreLabel ?? 'Lees meer'} →
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
