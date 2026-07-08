'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './HeroSection.module.css'

type Props = {
  src: string
  poster: string
  videoAspect: number
  focusX?: number
  coverBoost?: number
  clipOverride?: number | null
  onPlaybackFailed?: () => void
}

type Layout = {
  width: number
  height: number
  cropPct: number
}

const DESKTOP_BREAKPOINT = 900
const PLAYBACK_FAIL_MS = 6000

function cropPerEdge(containerW: number, clipOverride?: number | null): number {
  if (clipOverride != null) return clipOverride
  return containerW >= DESKTOP_BREAKPOINT ? 12 : 6
}

function coverLayout(
  containerW: number,
  containerH: number,
  videoAspect: number,
  coverBoost: number,
  clipOverride?: number | null,
): Layout {
  const containerAspect = containerW / containerH
  const cropPct = cropPerEdge(containerW, clipOverride)
  const letterboxTotal = (cropPct * 2) / 100

  let coverW: number
  let coverH: number

  if (videoAspect >= containerAspect) {
    coverH = containerH
    coverW = containerH * videoAspect
  } else {
    coverW = containerW
    coverH = containerW / videoAspect
  }

  let height = coverH / (1 - letterboxTotal)
  let width = Math.max(coverW, height * videoAspect)

  if (width / height < videoAspect) {
    width = height * videoAspect
  }

  width *= coverBoost
  height *= coverBoost

  return { width, height, cropPct }
}

export default function HeroVimeoBackground({
  src,
  poster,
  videoAspect,
  focusX = 0.78,
  coverBoost = 1,
  clipOverride = null,
  onPlaybackFailed,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [layout, setLayout] = useState<Layout | null>(null)
  const [playing, setPlaying] = useState(false)
  const loadedRef = useRef(false)

  useLayoutEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const update = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      if (w < 1 || h < 1) return
      setLayout(coverLayout(w, h, videoAspect, coverBoost, clipOverride))
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)

    const desktopMq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`)
    desktopMq.addEventListener('change', update)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
      desktopMq.removeEventListener('change', update)
    }
  }, [videoAspect, coverBoost, clipOverride])

  useEffect(() => {
    loadedRef.current = false
    setPlaying(false)

    const failTimer = onPlaybackFailed
      ? setTimeout(() => {
          if (!loadedRef.current) onPlaybackFailed()
        }, PLAYBACK_FAIL_MS)
      : undefined

    return () => {
      if (failTimer) clearTimeout(failTimer)
    }
  }, [src, onPlaybackFailed])

  const reveal = () => {
    loadedRef.current = true
    setPlaying(true)
  }
  const focusPct = focusX * 100

  return (
    <div ref={wrapRef} className={styles.vimeoWrap}>
      <img
        src={poster}
        alt=""
        className={`${styles.heroPoster} ${playing ? styles.heroPosterHidden : ''}`}
        fetchPriority="high"
      />
      <iframe
        src={src}
        title=""
        className={styles.vimeoIframe}
        style={
          layout
            ? {
                width: `${layout.width}px`,
                height: `${layout.height}px`,
                left: `${focusPct}%`,
                top: '50%',
                transform: `translate3d(-${focusPct}%, -50%, 0)`,
              }
            : {
                width: 'max(100vw, calc(100svh * 16 / 9))',
                height: 'calc(max(100svh, calc(100vw * 9 / 16)) / 0.76)',
                left: `${focusPct}%`,
                top: '50%',
                transform: `translate3d(-${focusPct}%, -50%, 0)`,
              }
        }
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
        loading="eager"
        onLoad={reveal}
      />
    </div>
  )
}
