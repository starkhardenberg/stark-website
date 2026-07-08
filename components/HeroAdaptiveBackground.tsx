'use client'

import { useLayoutEffect, useState } from 'react'
import HeroBackgroundVideo from './HeroBackgroundVideo'

type Props = {
  poster: string
  desktopSrc: string
  mobileSrc: string
}

function prefersMobileHeroVideo(): boolean {
  return window.matchMedia('(pointer: coarse)').matches
}

export default function HeroAdaptiveBackground({ poster, desktopSrc, mobileSrc }: Props) {
  const [src, setSrc] = useState(desktopSrc)

  useLayoutEffect(() => {
    setSrc(prefersMobileHeroVideo() ? mobileSrc : desktopSrc)
  }, [desktopSrc, mobileSrc])

  return <HeroBackgroundVideo src={src} poster={poster} />
}
