'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './FilmSection.module.css'
import { vimeoFilmDefaultVolume, vimeoFilmEmbedUrl } from '@/lib/film-video'

type VimeoPlayerInstance = {
  setVolume: (volume: number) => Promise<number>
  destroy: () => void
}

type Props = {
  videoId: string
  poster: string
}

export default function FilmVimeoPlayer({ videoId, poster }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!playing) return
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

    if ((window as Window & { Vimeo?: { Player: unknown } }).Vimeo?.Player) {
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
  }, [playing])

  if (!playing) {
    return (
      <button
        type="button"
        className={styles.posterBtn}
        onClick={() => setPlaying(true)}
        aria-label="Speel video af: een kijkje achter de schermen"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={poster} alt="" className={styles.poster} />
        <span className={styles.posterScrim} aria-hidden />
        <span className={styles.playStack}>
          <span className={styles.play} aria-hidden>
            <span className={styles.playIcon} />
          </span>
          <span className={styles.posterLabel}>Een kijkje achter de schermen</span>
        </span>
      </button>
    )
  }

  return (
    <iframe
      ref={iframeRef}
      src={vimeoFilmEmbedUrl(videoId, true)}
      title="Bedrijfsfilm STARK! Hardenberg"
      className={styles.player}
      allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}
