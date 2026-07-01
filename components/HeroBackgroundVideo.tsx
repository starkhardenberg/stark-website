'use client'

import { useEffect, useRef } from 'react'
import styles from './HeroSection.module.css'

type Props = {
  src: string
  poster: string
}

export default function HeroBackgroundVideo({ src, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    ref.current?.play().catch(() => {})
  }, [])

  return (
    <video
      ref={ref}
      className={styles.heroVideo}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
    />
  )
}
