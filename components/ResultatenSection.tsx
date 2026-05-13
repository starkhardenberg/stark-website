'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import QuoteCard from './QuoteCard'
import styles from './ResultatenSection.module.css'

type Card = {
  id: string
  text: string
  name: string
  context: string
}

const cards: Card[] = [
  {
    id: 'eva-1',
    text: 'Ik ben de fijnste versie van mezelf. Het is het beste cadeau aan jezelf.',
    name: 'Eva',
    context: 'Impact traject',
  },
  {
    id: 'rosanne-1',
    text: 'De stap lijkt groot. De stappen die je daarna maakt, zijn nog veel groter.',
    name: 'Rosanne',
    context: 'Impact traject',
  },
  {
    id: 'yael-1',
    text: 'Ik wou dat ik het eerder had aangedurfd.',
    name: 'Yael',
    context: 'Impact traject',
  },
  {
    id: 'joyce-1',
    text: 'Ik voel me zekerder, fitter en heb veel meer rust in mijn hoofd.',
    name: 'Joyce',
    context: 'Impact traject',
  },
  {
    id: 'joyce-2',
    text: 'Ik heb nog geen dag spijt gehad van mijn beslissing.',
    name: 'Joyce',
    context: 'Impact traject',
  },
  {
    id: 'yael-2',
    text: 'STARK! is voor mij een vertrouwde en veilige omgeving om persoonlijke grenzen te verleggen.',
    name: 'Yael',
    context: 'Impact traject',
  },
]

function usePerPage() {
  const [perPage, setPerPage] = useState(1)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const update = () => setPerPage(mq.matches ? 3 : 1)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return perPage
}

export default function ResultatenSection() {
  const perPage = usePerPage()
  const totalPages = Math.max(1, Math.ceil(cards.length / perPage))
  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1))
  }, [totalPages])

  const goPrev = useCallback(() => {
    setPage((p) => Math.max(0, p - 1))
  }, [])

  const goNext = useCallback(() => {
    setPage((p) => Math.min(totalPages - 1, p + 1))
  }, [totalPages])

  const start = page * perPage
  const visible = cards.slice(start, start + perPage)

  return (
    <section className={styles.resultaten} id="resultaten">
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Wat mensen zeggen</h2>

        {/* Amanda — hero quote */}
        <figure className={styles.heroQuote}>
          <div className={styles.heroImgWrap} aria-hidden="true">
            <Image
              src="/images/foto-vrouw-lachen.jpg"
              alt=""
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className={styles.heroImg}
            />
          </div>
          <div className={styles.heroContent}>
            <blockquote className={styles.heroText}>
              <p>
                Ik heb echt geleerd rust te nemen en naar mijn lichaam te luisteren in plaats van door te denderen en
                grip verliezen.
              </p>
            </blockquote>
            <figcaption className={styles.heroCite}>
              <span className={styles.heroName}>Amanda</span>
              <span className={styles.heroContext}>Deelnemer Momentum (de vrouwen editie, voorheen Camp Leone)</span>
            </figcaption>
          </div>
        </figure>

        <div
          className={styles.carousel}
          role="region"
          aria-roledescription="carrousel"
          aria-label="Korte testimonials"
        >
          <button
            type="button"
            className={styles.arrowBtn}
            onClick={goPrev}
            disabled={page <= 0}
            aria-controls="testimonial-cards-panel"
            aria-label="Vorige testimonials"
          >
            ‹
          </button>

          <div className={styles.grid} id="testimonial-cards-panel">
            {visible.map((card) => (
              <QuoteCard key={card.id} text={card.text} name={card.name} context={card.context} />
            ))}
          </div>

          <button
            type="button"
            className={styles.arrowBtn}
            onClick={goNext}
            disabled={page >= totalPages - 1}
            aria-controls="testimonial-cards-panel"
            aria-label="Volgende testimonials"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
