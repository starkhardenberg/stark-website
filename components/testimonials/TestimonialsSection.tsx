import type { CSSProperties } from 'react'
import Image from 'next/image'
import RotatingTestimonials, { type Testimonial } from '../RotatingTestimonials'
import type { HeroQuote } from './testimonials-data'
import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'
import styles from './TestimonialsSection.module.css'

type Props = {
  id?: string
  title?: string
  hero?: HeroQuote
  items: Testimonial[]
  /** Smaller hero-quoteblok, meer inspringend links/rechts (subtieler). */
  narrow?: boolean
}

function HeroQuoteBlock({ hero }: { hero: HeroQuote }) {
  const imgStyle: CSSProperties = {}
  if (hero.imageCover) imgStyle.objectFit = 'cover'
  if (hero.objectPosition) imgStyle.objectPosition = hero.objectPosition
  if (hero.imageScale) {
    imgStyle.transform = `${hero.imageMirror ? 'scaleX(-1) ' : ''}scale(${hero.imageScale})`
    imgStyle.transformOrigin = hero.imageScaleOrigin ?? 'center 30%'
  }
  return (
    <figure className={`${styles.heroQuote}${hero.darkPortrait ? ` ${styles.heroQuoteDark}` : ''}`}>
      <div className={styles.heroImgWrap} aria-hidden="true">
        <Image
          src={hero.image}
          alt={hero.imageAlt ?? ''}
          fill
          sizes="(min-width: 900px) 50vw, 100vw"
          className={`${styles.heroImg}${hero.imageMirror ? ` ${styles.heroImgMirror}` : ''}${hero.imageBw ? ` ${styles.heroImgBw}` : ''}`}
          style={Object.keys(imgStyle).length ? imgStyle : undefined}
        />
      </div>
      <div className={styles.heroContent}>
        <blockquote className={styles.heroText}>
          <p>{capitalizeQuoteStart(hero.text)}</p>
        </blockquote>
        <figcaption className={styles.heroCite}>
          <span className={styles.heroName}>{hero.name}</span>
          <span className={styles.heroContext}>{hero.context}</span>
        </figcaption>
      </div>
    </figure>
  )
}

export default function TestimonialsSection({
  id,
  title = 'Wat mensen zeggen',
  hero,
  items,
  narrow = false,
}: Props) {
  if (!hero && items.length === 0) return null

  return (
    <>
      {hero ? (
        <section className={`${styles.section} ${styles.sectionHero}`} id={id}>
          <div className={`${styles.innerHero}${narrow ? ` ${styles.innerHeroNarrow}` : ''}`}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <HeroQuoteBlock hero={hero} />
          </div>
        </section>
      ) : null}

      {items.length > 0 ? (
        <section className={`${styles.section} ${styles.sectionLight} ${styles.sectionCarousel}`}>
          <div className={styles.innerCarousel}>
            <RotatingTestimonials items={items} cardTone="dark" />
          </div>
        </section>
      ) : null}
    </>
  )
}
