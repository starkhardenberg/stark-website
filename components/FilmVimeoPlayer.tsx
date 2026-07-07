'use client'

import { useEffect, useRef } from 'react'
import styles from './FilmSection.module.css'
import { vimeoFilmDefaultVolume } from '@/lib/film-video'

type VimeoPlayerInstance = {
  setVolume: (volume: number) => Promise<number>
  destroy: () => void
}

type Props = {
  src: string
}

export default function FilmVimeoPlayer({ src }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    let player: VimeoPlayerInstance | null = null
    let script: HTMLScriptElement | null = null

    const initPlayer = () => {
      const Vimeo = (
        window as Window & {
          Vimeo?: { Player: new (element: HTMLIFrameElement) => VimeoPlayerInstance }
        }
      ).Vimeo
      if (!Vimeo) return

      player = new Vimeo.Player(iframe)
      void player.setVolume(vimeoFilmDefaultVolume())
    }

    if (
      (window as Window & { Vimeo?: { Player: unknown } }).Vimeo?.Player
    ) {
      initPlayer()
    } else {
      script = document.createElement('script')
      script.src = 'https://player.vimeo.com/api/player.js'
      script.async = true
      script.onload = initPlayer
      document.body.appendChild(script)
    }

    return () => {
      player?.destroy()
      script?.remove()
    }
  }, [src])

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title="Bedrijfsfilm STARK! Hardenberg"
      className={styles.player}
      loading="lazy"
      allow="fullscreen; picture-in-picture; encrypted-media"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}
