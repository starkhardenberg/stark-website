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
    const video = ref.current
    if (!video) return

    const play = () => {
      void video.play().catch(() => {})
    }

    play()
    video.addEventListener('loadeddata', play)

    return () => {
      video.removeEventListener('loadeddata', play)
    }
  }, [src])

  return (
    <video
      ref={ref}
      key={src}
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
