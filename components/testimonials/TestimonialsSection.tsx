import StarkImage from '@/components/StarkImage'
import type { HeroQuote } from './testimonials-data'
import { capitalizeQuoteStart } from '@/lib/capitalizeQuoteStart'
import GoogleReviewsLink from '../GoogleReviewsLink'
import RotatingTestimonials from '../RotatingTestimonials'
import type { Testimonial } from './types'
import { STARK_GRAIN } from '@/lib/stark-grain'
import styles from './TestimonialsSection.module.css'

type Props = {
  id?: string
  title?: string
  heading?: string
  hero?: HeroQuote
  items: Testimonial[]
  /** Smaller hero-quoteblok, meer inspringend links/rechts (subtieler). */
  narrow?: boolean
  /** Hero + carousel in één donker blok. */
  unifiedDark?: boolean
  /** Eén hero-quote vóór de carrousel meerekenen in de teller. */
  heroQuoteOffset?: number
  /** Statische Google-reviewlink onder de carrousel. */
  showGoogleReviews?: boolean
  /** Kop links, in lijn met de ondernemerspagina. */
  alignStart?: boolean
  /** Crème sectie, voor het licht-donker ritme. */
  light?: boolean
  /** Zelfde linkerlijn als intro / hoe we werken / hoe het begint. */
  spine?: boolean
}

function HeroQuoteBlock({ hero }: { hero: HeroQuote }) {
  return (
    <figure className={`${styles.heroQuote}${hero.darkPortrait ? ` ${styles.heroQuoteDark}` : ''}`}>
      <div
        className={`${styles.heroImgWrap}${hero.portraitCrop ? ` ${styles.heroImgWrapPortrait}` : ''}${hero.imageContain ? ` ${styles.heroImgWrapContain}` : ''}${hero.image.includes('rebekka') ? ` ${styles.heroImgWrapRebekka}` : ''}`}
        aria-hidden="true"
      >
        <StarkImage
          src={hero.image}
          alt={hero.imageAlt ?? ''}
          fill
          unaltered={hero.imageBw || hero.darkPortrait}
          sizes="(min-width: 900px) 50vw, 100vw"
          className={`${styles.heroImg}${hero.imageMirror ? ` ${styles.heroImgMirror}` : ''}`}
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
  alignStart = false,
  light = false,
  spine = false,
}: Props) {
  if (!hero && items.length === 0) return null

  const innerHeroClass = [
    styles.innerHero,
    narrow ? styles.innerHeroNarrow : '',
    unifiedDark ? styles.innerHeroUnified : '',
    unifiedDark && items.length === 0 ? styles.innerHeroUnifiedSolo : '',
    alignStart ? styles.innerHeroStart : '',
    spine ? styles.innerHeroSpine : '',
  ]
    .filter(Boolean)
    .join(' ')

  const sectionIntro = hero ? (
    <div className={styles.sectionIntro}>
      <h2 className={styles.sectionHeading}>{heading}</h2>
      <p className={`starkSectionMeta ${light ? '' : 'starkSectionMetaOnDark'} ${styles.sectionMeta}`}>{title}</p>
    </div>
  ) : null

  if (unifiedDark || light) {
    return (
      <section
        className={`${styles.section} ${light ? styles.sectionLight : styles.sectionUnified} ${
          light ? '' : STARK_GRAIN
        }`}
        id={id}
      >
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
        <section className={`${styles.section} ${styles.sectionHero} ${STARK_GRAIN}`} id={id}>
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
