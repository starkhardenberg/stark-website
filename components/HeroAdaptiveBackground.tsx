'use client'

import { useLayoutEffect, useState } from 'react'
import HeroBackgroundVideo from './HeroBackgroundVideo'
import styles from './HeroSection.module.css'

type Props = {
  poster: string
  mobileSrc: string
  desktopSrc: string
}

function prefersMobileHeroVideo(): boolean {
  return window.matchMedia('(pointer: coarse)').matches
}

export default function HeroAdaptiveBackground({
  poster,
  mobileSrc,
  desktopSrc,
}: Props) {
  const [src, setSrc] = useState<string | null>(null)

  useLayoutEffect(() => {
    setSrc(prefersMobileHeroVideo() ? mobileSrc : desktopSrc)
  }, [mobileSrc, desktopSrc])

  if (!src) {
    return <img src={poster} alt="" className={styles.posterFallback} />
  }

  return <HeroBackgroundVideo src={src} poster={poster} />
}
