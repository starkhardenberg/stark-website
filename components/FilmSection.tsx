import FilmVimeoPlayer from '@/components/FilmVimeoPlayer'
import { VIMEO_FILM_VIDEO_ID, vimeoFilmEmbedUrl } from '@/lib/film-video'
import styles from './FilmSection.module.css'

export default function FilmSection() {
  const vimeoSrc = VIMEO_FILM_VIDEO_ID
    ? vimeoFilmEmbedUrl(VIMEO_FILM_VIDEO_ID)
    : null

  if (!vimeoSrc) return null

  return (
    <section className={styles.film} aria-label="Bedrijfsfilm STARK Hardenberg">
      <div className={styles.playerWrap}>
        <FilmVimeoPlayer src={vimeoSrc} />
      </div>
    </section>
  )
}
