'use client'

import { useLayoutEffect, useRef } from 'react'
import styles from './HeroSection.module.css'

type Props = {
  poster: string
  mobileSrc: string
  desktopSrc: string
}

/** Safari weigert autoplay als muted alleen een property is, niet een attribuut. */
function arm(video: HTMLVideoElement) {
  video.muted = true
  video.defaultMuted = true
  video.setAttribute('muted', '')
  video.setAttribute('playsinline', '')
  video.setAttribute('webkit-playsinline', '')
}

export default function HeroBackgroundVideo({ poster, mobileSrc, desktopSrc }: Props) {
  const ref = useRef<HTMLVideoElement>(null)

  useLayoutEffect(() => {
    const video = ref.current
    if (!video) return

    arm(video)

    let done = false
    const stopListening = () => {
      if (done) return
      done = true
      document.removeEventListener('touchstart', play, true)
      document.removeEventListener('pointerdown', play, true)
      document.removeEventListener('click', play, true)
    }

    const play = () => {
      arm(video)
      const attempt = video.play()
      if (attempt) attempt.then(() => stopListening()).catch(() => {})
    }

    play()
    video.addEventListener('loadeddata', play)
    video.addEventListener('canplay', play)
    document.addEventListener('touchstart', play, true)
    document.addEventListener('pointerdown', play, true)
    document.addEventListener('click', play, true)

    return () => {
      video.removeEventListener('loadeddata', play)
      video.removeEventListener('canplay', play)
      stopListening()
    }
  }, [mobileSrc, desktopSrc])

  return (
    <video
      ref={ref}
      className={styles.heroVideo}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-hidden="true"
    >
      <source src={mobileSrc} type="video/mp4" media="(pointer: coarse)" />
      <source src={desktopSrc} type="video/mp4" />
    </video>
  )
}
