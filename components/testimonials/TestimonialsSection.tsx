import Image from 'next/image'
import RotatingTestimonials, { type Testimonial } from '../RotatingTestimonials'
import type { HeroQuote } from './testimonials-data'
import styles from './TestimonialsSection.module.css'

type Props = {
  id?: string
  title?: string
  hero?: HeroQuote
  items: Testimonial[]
}

export default function TestimonialsSection({
  id,
  title = 'Wat mensen zeggen',
  hero,
  items,
}: Props) {
  if (!hero && items.length === 0) return null

  return (
    <section className={styles.section} id={id}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>{title}</h2>

        {hero ? (
          <figure className={styles.heroQuote}>
            <div className={styles.heroImgWrap} aria-hidden="true">
              <Image
                src={hero.image}
                alt={hero.imageAlt ?? ''}
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
                className={styles.heroImg}
              />
            </div>
            <div className={styles.heroContent}>
              <blockquote className={styles.heroText}>
                <p>{hero.text}</p>
              </blockquote>
              <figcaption className={styles.heroCite}>
                <span className={styles.heroName}>{hero.name}</span>
                <span className={styles.heroContext}>{hero.context}</span>
              </figcaption>
            </div>
          </figure>
        ) : null}

        {items.length > 0 ? (
          <div className={styles.testimonials}>
            <RotatingTestimonials items={items} />
          </div>
        ) : null}
      </div>
    </section>
  )
}
