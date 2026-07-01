'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './HeroSection.module.css'

type Props = {
  src: string
  poster: string
  videoAspect: number
  startSeconds?: number
  focusX?: number
  coverBoost?: number
  clipOverride?: number | null
}

type VimeoPlayerInstance = {
  play: () => Promise<void>
  ready: () => Promise<void>
  setCurrentTime: (seconds: number) => Promise<number>
  on: (event: string, callback: (data?: { seconds: number; duration: number }) => void) => void
  destroy: () => void
}

type Layout = {
  width: number
  height: number
  cropPct: number
}

const DESKTOP_BREAKPOINT = 900

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

function loadVimeoPlayer(): Promise<void> {
  if ((window as Window & { Vimeo?: { Player: unknown } }).Vimeo?.Player) {
    return Promise.resolve()
  }

  return new Promise((resolve, reject) => {
    const existing = document.querySelector('script[data-vimeo-player]')
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = 'https://player.vimeo.com/api/player.js'
    script.async = true
    script.dataset.vimeoPlayer = 'true'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Vimeo player script failed'))
    document.head.appendChild(script)
  })
}

export default function HeroVimeoBackground({
  src,
  poster,
  videoAspect,
  startSeconds = 0,
  focusX = 0.78,
  coverBoost = 1,
  clipOverride = null,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [layout, setLayout] = useState<Layout | null>(null)
  const [playing, setPlaying] = useState(false)

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
    const iframe = iframeRef.current
    if (!iframe) return

    let player: VimeoPlayerInstance | null = null
    let cancelled = false

    const initPlayer = async () => {
      try {
        await loadVimeoPlayer()
        if (cancelled) return

        const Vimeo = (
          window as Window & {
            Vimeo?: { Player: new (element: HTMLIFrameElement) => VimeoPlayerInstance }
          }
        ).Vimeo
        if (!Vimeo) return

        player = new Vimeo.Player(iframe)
        player.on('playing', () => setPlaying(true))

        if (startSeconds > 0) {
          player.on('timeupdate', (data) => {
            if (!data?.duration || !data.seconds) return
            if (data.duration - data.seconds < 0.35) {
              void player?.setCurrentTime(startSeconds)
            }
          })
        }

        await player.ready()
        if (startSeconds > 0) {
          await player.setCurrentTime(startSeconds)
        }
        await player.play()
      } catch {
        /* autoplay kan door browser geblokkeerd worden; embed-autoplay vangt op */
      }
    }

    void initPlayer()

    return () => {
      cancelled = true
      player?.destroy()
    }
  }, [src, startSeconds])

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
        ref={iframeRef}
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
      />
    </div>
  )
}
