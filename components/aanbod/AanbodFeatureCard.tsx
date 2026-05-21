'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { KeyboardEvent, MouseEvent } from 'react'
import { motion } from 'framer-motion'
import type { AanbodTrack } from './aanbod-tracks'
import styles from './AanbodFeatureCard.module.css'

type AanbodFeatureCardProps = {
  track: AanbodTrack
}

export default function AanbodFeatureCard({ track }: AanbodFeatureCardProps) {
  const router = useRouter()
  const mediaLabel = track.id === 'trainen' ? 'TRAINING' : track.cat.toUpperCase()
  const paragraphs = track.desc
    .split(/\n\n/)
    .map((s) => s.trim())
    .filter(Boolean)
  const landingHref = track.readMoreHref

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
    <motion.article
      id={track.id}
      aria-label={track.readMoreLabel ?? track.cat}
      className={`${styles.card} ${track.light ? styles.cardLight : ''}`}
      role={landingHref ? 'link' : undefined}
      tabIndex={landingHref ? 0 : undefined}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      initial={{ y: 0 }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
    >
      <motion.div
        className={styles.media}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      >
        <Image
          src={`/images/${track.photo}`}
          alt={track.photoAlt}
          fill
          className={styles.image}
          sizes="(min-width: 900px) 33vw, 100vw"
          style={track.photoObjectPosition ? { objectPosition: track.photoObjectPosition } : undefined}
        />
        <span className={styles.mediaLabel}>{mediaLabel}</span>
      </motion.div>

      <div className={styles.panel}>
        <div className={styles.panelInner}>
          <span className={styles.index} aria-hidden>
            {track.num}
          </span>
          <div className={styles.panelContent}>
            <div className={styles.body}>
              {paragraphs.map((text, i) => (
                <p key={i} className={styles.paragraph}>
                  {text}
                </p>
              ))}
            </div>
            {track.readMoreHref ? (
              <Link href={track.readMoreHref} className={styles.readMore}>
                {track.readMoreLabel ?? 'Lees meer'} →
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </motion.article>
  )
}
