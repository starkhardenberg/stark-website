'use client'

import { useLayoutEffect, useState } from 'react'
import HeroBackgroundVideo from './HeroBackgroundVideo'
import HeroVimeoBackground from './HeroVimeoBackground'
import styles from './HeroSection.module.css'

type VimeoProps = {
  src: string
  videoAspect: number
  startSeconds?: number
  coverBoost?: number
  clipOverride?: number | null
}

type Props = {
  poster: string
  mobileSrc: string
  vimeo: VimeoProps | null
}

function prefersNativeHeroVideo(): boolean {
  return window.matchMedia('(pointer: coarse)').matches
}

export default function HeroAdaptiveBackground({ poster, mobileSrc, vimeo }: Props) {
  const [mode, setMode] = useState<'pending' | 'native' | 'vimeo'>('pending')

  useLayoutEffect(() => {
    if (prefersNativeHeroVideo() && mobileSrc) {
      setMode('native')
      return
    }
    if (vimeo?.src) {
      setMode('vimeo')
      return
    }
    if (mobileSrc) {
      setMode('native')
    }
  }, [mobileSrc, vimeo?.src])

  if (mode === 'native') {
    return <HeroBackgroundVideo src={mobileSrc} poster={poster} />
  }

  if (mode === 'vimeo' && vimeo) {
    return (
      <HeroVimeoBackground
        src={vimeo.src}
        poster={poster}
        videoAspect={vimeo.videoAspect}
        startSeconds={vimeo.startSeconds}
        coverBoost={vimeo.coverBoost}
        clipOverride={vimeo.clipOverride}
      />
    )
  }

  return <img src={poster} alt="" className={styles.posterFallback} />
}
