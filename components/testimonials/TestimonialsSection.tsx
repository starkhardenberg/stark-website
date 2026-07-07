import type { CSSProperties } from 'react'
import Image from 'next/image'
import RotatingTestimonials, { type Testimonial } from '../RotatingTestimonials'
import type { HeroQuote } from './testimonials-data'
import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'
import GoogleReviewsLink from '../GoogleReviewsLink'
import styles from './TestimonialsSection.module.css'

type Props = {
  id?: string
  title?: string
  heading?: string
  hero?: HeroQuote
  items: Testimonial[]
  /** Smaller hero-quoteblok, meer inspringend links/rechts (subtieler). */
  narrow?: boolean
  /** Hero + carousel in één navy-blok (lichte kaartjes op donkere achtergrond). */
  unifiedDark?: boolean
  /** Eén hero-quote vóór de carrousel meerekenen in de teller. */
  heroQuoteOffset?: number
  /** Statische Google-reviewlink onder de carrousel. */
  showGoogleReviews?: boolean
}

function HeroQuoteBlock({ hero }: { hero: HeroQuote }) {
  const imgStyle: CSSProperties = {}
  if (hero.imageContain) imgStyle.objectFit = 'contain'
  else if (hero.imageCover) imgStyle.objectFit = 'cover'
  if (hero.objectPosition) imgStyle.objectPosition = hero.objectPosition
  if (
    !hero.portraitCrop &&
    !hero.imageContain &&
    (hero.imageMirror ||
      hero.imageScale != null ||
      hero.imageTranslateY != null)
  ) {
    const mirror = hero.imageMirror ? 'scaleX(-1) ' : ''
    const ty = hero.imageTranslateY ?? '0'
    const scale = hero.imageScale ?? 1
    imgStyle.transform = `${mirror}translateY(${ty}) scale(${scale})`
    imgStyle.transformOrigin = hero.imageScaleOrigin ?? 'center 30%'
  }
  return (
    <figure className={`${styles.heroQuote}${hero.darkPortrait ? ` ${styles.heroQuoteDark}` : ''}`}>
      <div
        className={`${styles.heroImgWrap}${hero.portraitCrop ? ` ${styles.heroImgWrapPortrait}` : ''}${hero.imageContain ? ` ${styles.heroImgWrapContain}` : ''}`}
        aria-hidden="true"
      >
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
  heading = 'Hun verhaal',
  hero,
  items,
  narrow = false,
  unifiedDark = false,
  heroQuoteOffset = 0,
  showGoogleReviews = false,
}: Props) {
  if (!hero && items.length === 0) return null

  const innerHeroClass = [
    styles.innerHero,
    narrow ? styles.innerHeroNarrow : '',
    unifiedDark ? styles.innerHeroUnified : '',
  ]
    .filter(Boolean)
    .join(' ')

  const sectionIntro = hero ? (
    <div className={styles.sectionIntro}>
      <p className={styles.sectionEyebrow}>{title}</p>
      <h2 className={styles.sectionHeading}>{heading}</h2>
    </div>
  ) : null

  if (unifiedDark) {
    return (
      <section className={`${styles.section} ${styles.sectionUnified}`} id={id}>
        {hero ? (
          <div className={innerHeroClass}>
            {sectionIntro}
            <HeroQuoteBlock hero={hero} />
          </div>
        ) : null}
        {items.length > 0 ? (
          <div className={styles.innerCarouselUnified}>
            <RotatingTestimonials items={items} cardTone="light" quoteOffset={heroQuoteOffset} />
            {showGoogleReviews ? <GoogleReviewsLink tone="dark" /> : null}
          </div>
        ) : null}
      </section>
    )
  }

  return (
    <>
      {hero ? (
        <section className={`${styles.section} ${styles.sectionHero}`} id={id}>
          <div className={innerHeroClass}>
            {sectionIntro}
            <HeroQuoteBlock hero={hero} />
          </div>
        </section>
      ) : null}

      {items.length > 0 ? (
        <section className={`${styles.section} ${styles.sectionLight} ${styles.sectionCarousel}`}>
          <div className={styles.innerCarousel}>
            <RotatingTestimonials items={items} cardTone="dark" quoteOffset={heroQuoteOffset} />
            {showGoogleReviews ? <GoogleReviewsLink tone="light" /> : null}
          </div>
        </section>
      ) : null}
    </>
  )
}
