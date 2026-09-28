import FilmVimeoPlayer from '@/components/FilmVimeoPlayer'
import {
  VIMEO_FILM_POSTER,
  VIMEO_FILM_VIDEO_ID,
} from '@/lib/film-video'
import styles from './FilmSection.module.css'

export default function FilmSection() {
  if (!VIMEO_FILM_VIDEO_ID) return null

  return (
    <section className={styles.film} aria-label="Bedrijfsfilm STARK! Hardenberg">
      <div className={styles.playerWrap}>
        <FilmVimeoPlayer videoId={VIMEO_FILM_VIDEO_ID} poster={VIMEO_FILM_POSTER} />
      </div>
    </section>
  )
}
