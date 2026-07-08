'use client'

import { useLayoutEffect, useState } from 'react'
import HeroBackgroundVideo from './HeroBackgroundVideo'
import HeroVimeoBackground from './HeroVimeoBackground'
import styles from './HeroSection.module.css'

type VimeoProps = {
  src: string
  videoAspect: number
  coverBoost?: number
  clipOverride?: number | null
}

type Props = {
  poster: string
  mobileSrc: string
  desktopFallbackSrc: string
  vimeo: VimeoProps | null
}

function prefersMobileHeroVideo(): boolean {
  return window.matchMedia('(pointer: coarse)').matches
}

export default function HeroAdaptiveBackground({
  poster,
  mobileSrc,
  desktopFallbackSrc,
  vimeo,
}: Props) {
  const [mode, setMode] = useState<'vimeo' | 'native' | 'poster'>('poster')
  const [nativeSrc, setNativeSrc] = useState(mobileSrc)

  useLayoutEffect(() => {
    if (prefersMobileHeroVideo() || !vimeo?.src) {
      setNativeSrc(prefersMobileHeroVideo() ? mobileSrc : desktopFallbackSrc)
      setMode('native')
      return
    }
    setMode('vimeo')
  }, [mobileSrc, desktopFallbackSrc, vimeo?.src])

  if (mode === 'vimeo' && vimeo) {
    return (
      <HeroVimeoBackground
        src={vimeo.src}
        poster={poster}
        videoAspect={vimeo.videoAspect}
        coverBoost={vimeo.coverBoost}
        clipOverride={vimeo.clipOverride}
        onPlaybackFailed={() => {
          setNativeSrc(desktopFallbackSrc)
          setMode('native')
        }}
      />
    )
  }

  if (mode === 'native') {
    return <HeroBackgroundVideo src={nativeSrc} poster={poster} />
  }

  return <img src={poster} alt="" className={styles.posterFallback} />
}
